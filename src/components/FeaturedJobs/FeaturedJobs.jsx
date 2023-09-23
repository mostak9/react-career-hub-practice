import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import axios from "axios";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([])
    const [seeMoreClick, setSeeMoreClick] = useState(false);
    useState(() => {
        axios.get('jobs.json')
        .then(data => setFeaturedJobs(data.data))
    }, [])
    return (
        <div className="my-28 max-w-7xl mx-auto">
            <SectionTitle title={'Featured Jobs'} subTitle={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {
                    seeMoreClick ? featuredJobs.map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>):
                    featuredJobs.slice(0, 4).map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
                }
            </div>
            <div className={`text-center mt-8`}><button onClick={() => setSeeMoreClick(!seeMoreClick)} className='text-xl font-semibold bg-[#9873FF] text-white px-4 py-3 rounded-md'>
                {seeMoreClick ? 'See Less': 'See more'}
            </button></div>
        </div>
    );
};

export default FeaturedJobs;