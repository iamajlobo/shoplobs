import { Star, Tag } from "lucide-react";
import AboutCard from "../../components/ui/AboutCard";

const About = () => {
  return (
    <>
      {/**
       * ABout us Banner
       */}
      <section className="about-banner h-100 bg-cover bg-center">
        <div className="container mx-auto px-5 md:p-10 h-full flex flex-col justify-center">
          <h2 className="text-6xl text-orange-500 font-semibold mb-2">
            About Us
          </h2>
          <p className="w-full lg:w-[50%] text-white text-sm leading-8 tracking-widest lg:pr-20">
            We are dedicated to delivering a seamless and enjoyable shopping
            experience tailored to your needs. Our platform is built with a
            commitment to quality, convenience, and customer satisfaction,
            ensuring that every interaction is simple, reliable, and rewarding.
          </p>
        </div>
      </section>
      {/**
       * Our Story
       */}
      <section className="container mx-auto px-5 md:px-12">
        <div className="py-15 text-center mb-5">
          <h3 className="text-lg md:text-2xl font-medium mb-5">Our Story</h3>
          <p className="lg:mx-30 text-center">
            Shoplobs was founded with a simple goal to make online shopping
            easy, affordable, and enjoyable for everyone. We carefully select
            quality products and offer excellent customer service. We are
            committed to continuously improving our platform to meet the
            evolving needs of our customers. With every purchase, we aim to
            build trust and create a shopping experience that keeps you coming
            back.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-15">
          <AboutCard
            Icon={Star}
            title="Quality Products"
            text="Carefully Selected"
          />
          <AboutCard Icon={Tag} title="Best Prices" text="Affordable for all" />
          <AboutCard
            Icon={Star}
            title="Fast Delivery"
            text="Quick and reliable"
          />
          <AboutCard Icon={Star} title="Customer First" text="24/7 support" />
        </div>
      </section>
    </>
  );
};

export default About;
