import ShopCard from "../../components/ui/ShopCard";

import electronics from "../../assets/images/electronics.jpg";
import clothes from "../../assets/images/clothes.jpg";
import sofa from "../../assets/images/sofa.jpg";
import beauty from "../../assets/images/beauty.jpg";
import ball from "../../assets/images/ball.jpg";
import bear from "../../assets/images/bear.jpg";

const Deals = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-20 py-10 space-y-10">
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-r from-orange-500 to-orange-600 text-white p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Hot Deals 🔥
          </h1>
          <p className="text-orange-100 max-w-md">
            Grab the best discounts on your favorite items. Limited time offers you don’t want to miss.
          </p>
        </div>

        <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Today’s Deals
          </h2>
          <span className="text-sm text-orange-500 font-medium cursor-pointer hover:underline">
            View All
          </span>
        </div>

        <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <ShopCard img={electronics} productName="Wireless Headphone" price={10.56} ratings={4} />
          <ShopCard img={clothes} productName="Red Hoody" price={200.56} ratings={3} />
          <ShopCard img={sofa} productName="Modern Sofa" price={2034.56} ratings={4} />
          <ShopCard img={beauty} productName="Make Up Kit" price={1002.56} ratings={4} />
          <ShopCard img={ball} productName="Soccer Ball" price={500.26} ratings={5} />
          <ShopCard img={bear} productName="Teddy Bear" price={203.16} ratings={4} />
        </div>
      </div>

      {/* LIMITED OFFER */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Limited Time Offer ⏳
          </h3>
          <p className="text-sm text-gray-500">
            Get up to 50% off on selected items before the deal expires.
          </p>
        </div>

        <div className="flex gap-3 text-center">
          {["12", "34", "56"].map((t, i) => (
            <div key={i} className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold">
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* MORE DEALS */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          More Discounts
        </h2>

        <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <ShopCard img={electronics} productName="Wireless Headphone" price={10.56} ratings={4} />
          <ShopCard img={clothes} productName="Red Hoody" price={200.56} ratings={3} />
          <ShopCard img={sofa} productName="Modern Sofa" price={2034.56} ratings={4} />
          <ShopCard img={beauty} productName="Make Up Kit" price={1002.56} ratings={4} />
        </div>
      </div>

    </section>
  );
};

export default Deals;