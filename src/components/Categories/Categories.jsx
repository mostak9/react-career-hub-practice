import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import axios from "axios";
import Category from "../Category/Category";


const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('categories.json')
        .then(data => setCategories(data.data))
    }, )
    return (
        <div>
            <div className="mt-28 max-w-7xl mx-auto">
                <SectionTitle title={'Job Category List'} subTitle={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Categories;