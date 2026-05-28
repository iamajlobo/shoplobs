import { NavLink } from "react-router-dom";

type ButtonProps = {
    color?: string;
    text: string;
    path:string;
}

const Button =  ({color,text,path}:ButtonProps) => {
    return (
        <NavLink className={`${color} ${(!color)?'text-black border':'text-white border border-orange-500'} inline-block w-30 md:w-40 font-medium py-2 rounded-sm shadow-sm text-center hover:opacity-90 hover:scale-x-103 transition duration-75 ease-in`} to={path}>
            {text}
        </NavLink>
    );
}

export default Button;