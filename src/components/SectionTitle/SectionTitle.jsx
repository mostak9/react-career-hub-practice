

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center space-y-2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="font-medium">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;