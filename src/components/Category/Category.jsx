
const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="p-10 rounded-lg bg-gradient-to-r from-[#7e90fe0d] to-[#9873FF0D]">
            <img src={logo} alt="" />
            <h1 className="text-xl font-bold mt-8 ">{category_name}</h1>
            <p className="font-medium">{availability}</p>
        </div>
    );
};

export default Category;