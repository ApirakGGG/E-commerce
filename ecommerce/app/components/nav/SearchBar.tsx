'use client'

import Icon from "@mdi/react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { mdiMagnify } from '@mdi/js';

const SearchBar = () => {
    const router = useRouter()

const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
} = useForm<FieldValues>({
    defaultValues: {
        searchTerm: ''
    }
})

const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
    if(!data.searchTerm) return router.push('/')

    const url = queryString.stringifyUrl({
        url: '/',
        query:{
            searchTerm: data.searchTerm
        }
    },{skipNull: true})

console.log(url)

    router.push(url)
    reset()
}

    return ( <div className="flex items-center">
        <input 
        {...register('searchTerm')}
        autoComplete="off"
        type="text"
        placeholder="Search"
        className="p-2 border-white-500 rounded-full focus:outline-none focus:bourder-[1.5px] ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
        focus:border-slate-300 w-80"
        />
        
        <button onClick={handleSubmit(onSubmit)} className=" hover:opacity-80  p-2 rounded-full ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 animate-bounce">
        <Icon path={mdiMagnify} size={1.5} />
            </button> 
    </div> );
}
 
export default SearchBar;