import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const user = null;
    const activeLink = ({isActive} : {isActive: boolean}) => isActive ? 'border-b-2 border-orange-500 text-orange-500 py-2':'py-2';

    const mobileLink = ({isActive} : {isActive: boolean}) => isActive ? 'border-l-2 border-orange-500 bg-orange-500/10 text-orange-500 pl-2 py-2':'pl-2  py-2';


    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <header className="container mx-auto px-5 md:px-10 py-5 bg-white border-b border-gray-200 sticky top-0 z-100">
            <div className="flex justify-between items-center mb-0 md:mb-5">
                <h1 className="font-bold text-2xl">Shop 
                    <span className="text-orange-500">
                        lobs
                    </span>
                </h1>
                <div className="hidden md:block">
                    <form>
                        <label className="md:w-90 lg:w-120 h-10 flex items-center">
                            <input className="w-full h-full border border-gray-200 outline-none pl-1 rounded-l-sm" type="text" name="product" placeholder="Search for products..." />
                            <div className="h-full bg-black py-2 px-2 rounded-r-sm">
                                <Search color="white" size={20}/>
                            </div>
                        </label>
                    </form>
                </div>
                {(!user)?(
                    <div className="hidden md:block space-x-5 font-medium">
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink className='text-orange-500' to='/register'>Sign Up</NavLink>
                    </div>
                ):(
                    <div className="hidden md:flex gap-5">
                        <Heart className="hover:cursor-pointer"/>
                        <ShoppingCart className="hover:cursor-pointer"/>
                        <User className="hover:cursor-pointer"/>
                    </div>
                )}
                
                <div className="flex items-center gap-2 md:hidden">
                    {user && <div className=" md:hidden flex gap-2">
                        <Heart className="hover:cursor-pointer"/>
                        <ShoppingCart className="hover:cursor-pointer"/>
                        <User className="hover:cursor-pointer"/>
                    </div>}
                    <Menu className="block md:hidden" size={30} onClick={() => setOpen(true)}/>
                </div>
                
                
            </div>
            <div className="hidden md:block text-center font-medium">
                <nav className="space-x-10">
                    <NavLink className={activeLink} to='/'>Home</NavLink>
                    <NavLink className={activeLink} to='/shop'>Shop</NavLink>
                    <NavLink className={activeLink} to='/categories'>Categories</NavLink>
                    <NavLink className={activeLink} to='/deals'>Deals</NavLink>
                    <NavLink className={activeLink} to='/about'>About Us</NavLink>
                    <NavLink className={activeLink} to='/contact'>Contact</NavLink>
                </nav>
            </div>
            
            {/* Backdrop */}
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                    open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            />

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white w-70 min-h-screen py-5 border-l border-gray-200 fixed top-0 right-0 z-50
                transition-transform duration-300 ease-in-out
                ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center mb-5 mx-2">
                    <h1 className="font-bold text-2xl">Shop 
                        <span className="text-orange-500">
                            lobs
                        </span>
                    </h1>
                    <X className="cursor-pointer" onClick={() => setOpen(false)}/>
                </div>
                <div className="mb-5 mx-2">
                    <form>
                        <label className="h-8 flex items-center">
                            <input className="w-full h-full border-2 border-gray-200 outline-none pl-1 rounded-l-sm" type="text" name="product" placeholder="Search for products..." />
                            <div className="h-full bg-black p-1.5 px-2 rounded-r-sm">
                                <Search color="white" size={20}/>
                            </div>
                        </label>
                    </form>
                </div>
                <div className="font-medium">
                    <nav className="flex flex-col">
                        <NavLink className={mobileLink} to='/' onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink className={mobileLink} to='/shop' onClick={() => setOpen(false)}>Shop</NavLink>
                        <NavLink className={mobileLink} to='/categories' onClick={() => setOpen(false)}>Categories</NavLink>
                        <NavLink className={mobileLink} to='/deals' onClick={() => setOpen(false)}>Deals</NavLink>
                        <NavLink className={mobileLink} to='/about' onClick={() => setOpen(false)}>About Us</NavLink>
                        <NavLink className={mobileLink} to='/contact' onClick={() => setOpen(false)}>Contact</NavLink>
                    </nav>
                </div>
                <div className="mx-2 mt-5 flex flex-col gap-3">
                    <NavLink className='border-2 text-center py-2 rounded' to='/login' onClick={() => setOpen(false)}>Login</NavLink>
                    <NavLink className='border-2 border-orange-500 bg-orange-500 text-white text-center py-2 rounded' to='/register' onClick={() => setOpen(false)}>Sign Up</NavLink>
                </div>
            </div>    
        </header>
    );
}

export default NavBar;