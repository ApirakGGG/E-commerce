import Image from "next/image"
import {FaUserCircle} from "react-icons/fa"

interface AvatarProps{
    src?: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
    if(src){
        return(
        <Image 
        src={src}
        alt="Avater"
        className="rounded-full"
        height="50"
        width="50"
        />
        );
    }
    return ( 
        <FaUserCircle size={24}/>
     );
}
 
export default Avatar;