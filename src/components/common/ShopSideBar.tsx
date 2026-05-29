import { useState } from "react";
import { NavLink } from "react-router-dom";
import Star from "../ui/Star";

const ShopSideBar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="px-5 md:px-10 py-5 ">
      <h2 className="text-xl font-bold mb-5">Shop</h2>
      <div className="grid grid-cols-2 md:grid-cols-1">
        <div className="mb-3">
          <h2 className="font-medium mb-2">Categories</h2>
          <NavLink
            onClick={() => setActive(0)}
            className={`${active === 0 ? "text-orange-500" : ""} text-sm`}
            to="/shop"
          >
            All
          </NavLink>
          <br />
          <NavLink
            onClick={() => setActive(1)}
            className={`${active === 1 ? "text-orange-500" : ""} text-sm`}
            to="/shop"
          >
            Electronics
          </NavLink>
          <br />
          <NavLink
            onClick={() => setActive(2)}
            className={`${active === 2 ? "text-orange-500" : ""} text-sm`}
            to="/shop"
          >
            Fashion
          </NavLink>
          <br />
          <NavLink
            onClick={() => setActive(3)}
            className={`${active === 3 ? "text-orange-500" : ""} text-sm`}
            to="/shop"
          >
            Home & Living
          </NavLink>
          <br />
          <NavLink
            onClick={() => setActive(4)}
            className={`${active === 4 ? "text-orange-500" : ""} text-sm`}
            to="/shop"
          >
            Beauty
          </NavLink>
          <br />
          <NavLink
            onClick={() => setActive(5)}
            className={`${active === 5 ? "text-orange-500" : ""} text-sm`}
            to="/shop"
          >
            Sports
          </NavLink>
          <br />
          <NavLink
            onClick={() => setActive(6)}
            className={`${active === 6 ? "text-orange-500" : ""} text-sm`}
            to="/shop"
          >
            Toys
          </NavLink>
        </div>
        <div>
          <h2 className="font-medium mb-2">Rating</h2>
          <form>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" />
              <Star num={5} />
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" />
              <Star num={4} />
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" />
              <Star num={3} />
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" />
              <Star num={2} />
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" />
              <Star num={1} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopSideBar;
