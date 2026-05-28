


const About = () => {
    return (
        <>
            {/**
             * ABout us Banner
             */}
            <section className="about-banner h-100 bg-cover bg-center">
                <div className="container mx-auto px-5 md:p-10 h-full flex flex-col justify-center">
                    <h2 className="text-6xl font-semibold mb-2">About Us</h2>
                    <p className="w-full lg:w-[50%] leading-8 tracking-widest pr-20 md:pr-60 lg:pr-80 text-gray-900 ">
                        We're here to provide the best shopping experience for you.
                    </p>
                </div>
            </section>
            {/**
             * Our Story
             */}
            <section className="container mx-auto px-5 md:px-12">
                <div className="py-15 text-center">
                    <h3 className="text-lg md:text-2xl font-medium mb-5">Our Story</h3>
                    <p className="lg:px-70 text-center">
                        Shoplobs was founded with a simple goal to make online shopping easy, affordable, and enjoyable for everyone. We carefully select quality products and offer excellent customer service. 
                    </p>
                </div>
            </section> 
        </>
    );
}

export default About;