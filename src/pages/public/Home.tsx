import { ClockFading, MapPin, ShieldBan, Truck } from "lucide-react";
import Button from "../../components/ui/Button";
import FeatureCard from "../../components/ui/FeatureCard";
import { NavLink } from "react-router-dom";
import CategoryCard from "../../components/ui/CategoryCard";

import electronic from "../../assets/images/electronics.jpg";
import clothes from "../../assets/images/clothes.jpg";
import sofa from "../../assets/images/sofa.jpg";
import beauty from "../../assets/images/beauty.jpg";
import ball from "../../assets/images/ball.jpg";
import bear from "../../assets/images/bear.jpg";


const Home = () => {
    return (
        <>
            {/**
             * Hero Section
             */}
            <section className="h-screen hero-bg bg-cover bg-center mb-5">
                <div className="container mx-auto px-5 md:px-10 h-screen flex flex-col justify-center">
                    <h3 className="text-sm sm:text-base text-orange-500 font-medium mb-1">
                        Discover the best products for you
                    </h3>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3">
                        Shop Smart, <br />Live Better.
                    </h1>
                    <p className="text-sm sm:text-base font-medium text-gray-800 mb-5">
                        Find quality products at the best prices. <br />Fast delivery and easy returns.
                    </p>
                    <div className="space-x-3 sm:space-x-5">
                        <Button color="bg-orange-500" text="Shop Now" path="/shop" />
                        <Button text="Explore Deals" path="/deals" />
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-5 md:px-10 py-5 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard Icon={Truck} title="Free Shipping" description="On orders over $10"/>
                    <FeatureCard Icon={ShieldBan} title="Secure Payment" description="100% secure payment"/>
                    <FeatureCard Icon={ClockFading} title="30-Day Returns" description="Hassle Free Returns"/>
                    <FeatureCard Icon={MapPin} title="24/7 Support" description="We're here to help"/>
                </div>
            </section>    
            <section className="container mx-auto px-5 md:px-10 py-5 mb-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-base md:text-xl font-bold mb-3">
                        Shop By Category
                    </h1>
                    <NavLink className='text-blue-500 font-medium' to='/categories'>View All</NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10 md:mb-15">
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
}

export default Home;