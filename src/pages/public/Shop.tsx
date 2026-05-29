import ShopSideBar from "../../components/common/ShopSideBar";
import ShopCard from "../../components/ui/ShopCard";

import electronics from "../../assets/images/electronics.jpg";
import clothes from "../../assets/images/clothes.jpg";
import sofa from "../../assets/images/sofa.jpg";
import beauty from "../../assets/images/beauty.jpg";
import ball from "../../assets/images/ball.jpg";
import bear from "../../assets/images/bear.jpg";

const Shop = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      
      <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200">
        <ShopSideBar />
      </aside>

      <section className="flex-1 p-4 sm:p-5 max-h-screen overflow-auto">
        
        <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-3 mb-5">
          <label className="text-sm">
            Sort By:{" "}
            <select className="outline-none py-1 px-4 border border-gray-200 rounded-sm shadow-sm">
              <option value="newest">Newest</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          <ShopCard img={electronics} productName="Wireless Headphone" price={10.56} ratings={4} />
          <ShopCard img={clothes} productName="Red Hoody" price={200.56} ratings={3} />
          <ShopCard img={sofa} productName="Modern Sofa" price={2034.56} ratings={4} />
          <ShopCard img={beauty} productName="Make Up" price={1002.56} ratings={4} />
          <ShopCard img={ball} productName="Soccer Ball" price={500.26} ratings={5} />
          <ShopCard img={bear} productName="Teddy Bear" price={203.16} ratings={4} />
          <ShopCard img={electronics} productName="Wireless Headphone" price={10.56} ratings={4} />
          <ShopCard img={clothes} productName="Red Hoody" price={200.56} ratings={3} />
          <ShopCard img={sofa} productName="Modern Sofa" price={2034.56} ratings={4} />
          <ShopCard img={beauty} productName="Make Up" price={1002.56} ratings={4} />
          <ShopCard img={ball} productName="Soccer Ball" price={500.26} ratings={5} />
          <ShopCard img={bear} productName="Teddy Bear" price={203.16} ratings={4} />
          <ShopCard img={electronics} productName="Wireless Headphone" price={10.56} ratings={4} />
          <ShopCard img={clothes} productName="Red Hoody" price={200.56} ratings={3} />
          <ShopCard img={sofa} productName="Modern Sofa" price={2034.56} ratings={4} />
          <ShopCard img={beauty} productName="Make Up" price={1002.56} ratings={4} />
          <ShopCard img={ball} productName="Soccer Ball" price={500.26} ratings={5} />
          <ShopCard img={bear} productName="Teddy Bear" price={203.16} ratings={4} />
          <ShopCard img={electronics} productName="Wireless Headphone" price={10.56} ratings={4} />
          <ShopCard img={clothes} productName="Red Hoody" price={200.56} ratings={3} />
          <ShopCard img={sofa} productName="Modern Sofa" price={2034.56} ratings={4} />
          <ShopCard img={beauty} productName="Make Up" price={1002.56} ratings={4} />
          <ShopCard img={ball} productName="Soccer Ball" price={500.26} ratings={5} />
          <ShopCard img={bear} productName="Teddy Bear" price={203.16} ratings={4} />
        </div>

      </section>
    </section>
  );
};

export default Shop;