import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-black text-white px-5 md:px-10 py-10">
            <div className="grid grid-col-1 md:grid-cols-3">
                <div className="mb-3">
                    <h1 className="font-bold text-2xl mb-3">Shop 
                        <span className="text-orange-500">
                            lobs
                        </span>
                    </h1>
                    <p className="text-sm md:pr-40 mb-3 leading-7">
                        Your one-stop shop for high-quality products at the best prices, all in one convenient place.
                    </p>
                </div>
                <div className="text-sm mb-3">
                    <h1 className="font-bold text-xl mb-3">Links</h1>
                    <div className="grid grid-cols-2">
                        <div>
                            <NavLink className='inline-block py-1' to='/'>Home</NavLink><br />
                            <NavLink className='inline-block py-1' to='/shop'>Shop</NavLink><br />
                            <NavLink className='inline-block py-1' to='/categories'>Categories</NavLink><br />
                        </div>
                        <div>
                            <NavLink className='inline-block py-1' to='/deals'>Deals</NavLink><br />
                            <NavLink className='inline-block py-1' to='/about'>About</NavLink><br />
                            <NavLink className='inline-block py-1' to='/contact'>contact</NavLink><br />
                        </div>    
                    </div>                    
                </div>
                <div className="text-sm mb-3">
                    <h1 className="font-bold text-xl mb-3">Customer Service</h1>
                    <NavLink className='inline-block py-1' to='#'>Help Center</NavLink><br />
                    <NavLink className='inline-block py-1' to='#'>Shipping & Delivery</NavLink><br />
                    <NavLink className='inline-block py-1' to='#'>Returns & Refunds</NavLink><br />
                    <NavLink className='inline-block py-1' to='#'>FAQs</NavLink><br />                
                </div>
            </div>
        </footer>
    );
}

export default Footer;