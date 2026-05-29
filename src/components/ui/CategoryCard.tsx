type CategoryCardProps = {
  img: string;
  title: string;
};

const CategoryCard = ({ img, title }: CategoryCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
      
      <div className="relative h-40 flex items-center justify-center overflow-hidden bg-gray-50">
        <img
          src={img}
          alt={title}
          className="h-24 object-contain group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white text-sm font-medium tracking-wide">
            Explore
          </span>
        </div>
      </div>

      <div className="p-4 text-center">
        <h2 className="font-semibold text-gray-800 group-hover:text-orange-500 transition">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;