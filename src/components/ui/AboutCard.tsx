
type AboutCardProps = {
    Icon: React.ElementType;
    title: string;
    text: string;
}


const AboutCard = ({Icon, title, text}:AboutCardProps) => {
    return(
        <div className="flex flex-col justify-center items-center">
            <Icon className="mb-3   " color="orange" size={40}/>
            <h2 className="font-medium">{title}</h2>
            <p className="text-sm">{text}</p>
        </div>
    );
}

export default AboutCard;