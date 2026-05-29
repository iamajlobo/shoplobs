import { Heart } from "lucide-react";
import Star from "./Star";

type ShopCardProps = {
  img: string;
  productName: string;
  price: number;
  ratings: number;
};

const ShopCard = ({ img, productName, price, ratings }: ShopCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={img}
          alt={productName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />


        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:bg-white transition">
          <Heart size={18} className="text-gray-600 hover:text-red-500 transition" />
        </button>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {productName}
        </h2>

        <div className="flex items-center justify-between">
          <Star num={ratings} />
          <span className="text-lg font-bold text-orange-500">
            ₱{price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;