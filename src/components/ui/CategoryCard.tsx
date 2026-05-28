
type CategoryCardProps = {
    img: string;
    title:string;
}

const CategoryCard = ({img,title}:CategoryCardProps) => {
    return (
        <div className="border border-gray-200 rounded-md shadow-md text-center space-y-5 overflow-hidden hover:scale-x-103 flex flex-col justify-between">
            <div className="object-fit w-full h-[80%] p-5 flex justify-center items-center">
                <img src={img} alt="Category Image" />
            </div>
            <h2 className="font-bold mb-3">{title}</h2>
        </div>
    );
}

export default CategoryCard;