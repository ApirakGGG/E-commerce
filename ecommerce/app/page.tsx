/* eslint-disable @next/next/no-img-element */
import Container from "./components/Container";
import HomeBanner from "./components/nav/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IproductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";
import Collection from "./Collections/Collections";

interface HomeProps {
  searchParams: IproductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <NullData title='Oops! No product found. cilck "All" to clear filter' />
    );
  }

  function shuffleArray(originalArray: any) {
    const array = [...originalArray];
    for (let i = array.length - 1; i > 0; i--) {
      const j = i;
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const shuffledProducts = shuffleArray(products);

  return (
    <div className="p-8 ">
      <Container>
        <div className="">
          <HomeBanner />
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-5 2xl:grid-cols-6 gap-8 rounded-xl trasition"
        >
          {shuffledProducts.map((product: any) => {
            return <ProductCard data={product} key={product.id} />;
          })}
        </div>

        <div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl cursor-pointer">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  src="/image.png"
                  alt="bg"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                  Apple
                </div>
                <a className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                  Apple Inc. is an American multinational technology company
                </a>
                <p className="mt-2 text-sm text-slate-500">
                  headquartered in Cupertino, California. As of March 2023,
                  Apple is the world largest company by market capitalization,
                  and with US$394.3 billion the largest technology company by
                  2022 revenue.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Collection data={undefined} />
        </div>
      </Container>
    </div>
  );
}
