import { NavLink } from "react-router-dom";
import CategoryCard from "../../components/ui/CategoryCard";

import electronic from "../../assets/images/electronics.jpg";
import clothes from "../../assets/images/clothes.jpg";
import sofa from "../../assets/images/sofa.jpg";
import beauty from "../../assets/images/beauty.jpg";
import ball from "../../assets/images/ball.jpg";
import bear from "../../assets/images/bear.jpg";

const Categories = () => {
  return (
    <>
      <section className="container mx-auto px-5 md:px-10 py-5 mb-5">
        <div className="mb-10">
          <h1 className="text-base md:text-xl font-bold">
            Shop By Category
          </h1>
          <p className="text-sm text-gray-600">
            Browse through our wide selection of products curated just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 md:mb-15">
          <CategoryCard img={electronic} title="Electronics" />
          <CategoryCard img={clothes} title="Fashion" />
          <CategoryCard img={sofa} title="Home & Living" />
          <CategoryCard img={beauty} title="Beauty" />
          <CategoryCard img={ball} title="Sports" />
          <CategoryCard img={bear} title="Toys" />
        </div>
      </section>
    </>
  );
};

export default Categories;
