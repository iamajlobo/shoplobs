import { StarIcon } from "lucide-react";

const Star = ({num}:{num:number}) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_,i) =>
                <StarIcon 
                    size={18}
                    key={i} 
                    className={i < num ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-300'}
                />
            )}
        </div>
    );
}

export default Star;