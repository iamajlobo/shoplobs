
type FeatureCardProps = {
    Icon: React.ElementType;
    title: string;
    description: string;
}

const FeatureCard = ({Icon,title,description}:FeatureCardProps) => {
    return(
        <div className="flex items-center gap-3">
            <Icon size={40}/>
            <div>
                <h3 className="font-medium mb-1">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;