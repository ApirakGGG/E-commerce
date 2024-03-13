import { products } from "@/untils/products";
import ProductCard from "../components/products/ProductCard";

interface CollectionsProps {
  data: any;
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

const Collections: React.FC<CollectionsProps> = () => {
  return (
    <div className="bg-white-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div
            className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0
         
          "
          >
            {shuffledProducts.map((product: any) => {
              <div></div>;
              return <ProductCard data={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collections;
