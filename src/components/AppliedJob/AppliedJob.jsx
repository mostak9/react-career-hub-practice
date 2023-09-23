import {PiCurrencyCircleDollarLight} from 'react-icons/pi'
import {SlLocationPin} from 'react-icons/sl'
import { Link } from 'react-router-dom';

const AppliedJob = ({appliedJob}) => {
    const {
        id,
          logo,
         job_title, 
         company_name, 
         remote_or_onsite, 
         job_type,
         location,
         salary
    } = appliedJob;
    return (
        <div>
            <div className='max-w-4xl rounded-md p-10 border-2 lg:flex gap-8 justify-between items-center'>
            <div>
            <img src={logo} className='max-w-[150px] mb-8' alt="" />
            </div>
            <div>
            <h1 className="text-2xl font-bold mb-2">{job_title}</h1>
            <p className="text-xl font-medium mb-3">{company_name}</p>
            <div className='mb-6'>
                <button className='px-4 py-3 border-2 border-[#9873FF] text-[#9873FF] font-semibold mr-4'>{remote_or_onsite}</button>
                <button className='px-4 py-3 border-2 border-[#9873FF] text-[#9873FF] font-semibold'>{job_type}</button>
            </div>
            <div className="flex gap-8 justify-between items-center mb-6">
                <h1 className="text-xl font-semibold flex items-center gap-2"><SlLocationPin></SlLocationPin>{location}</h1>
                <h1 className="text-xl font-semibold flex gap-2 items-center"><PiCurrencyCircleDollarLight></PiCurrencyCircleDollarLight>{salary}</h1>
            </div>
            </div>
            <div>
            <Link to={`jobs/${id}`}><button className='text-xl font-semibold bg-[#9873FF] text-white px-4 py-3'>View Details</button></Link>
            </div>
        </div>
        </div>
    );
};

export default AppliedJob;