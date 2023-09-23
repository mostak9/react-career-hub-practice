import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { RxCalendar } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import swal from 'sweetalert';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const [detailsJob, setDetailsJob] = useState({});
  useEffect(() => {
    const jobDetail = jobs.find((job) => job.id === idInt);
    setDetailsJob(jobDetail);
  }, [jobs, idInt]);

  const handleAppliedJobs = () => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs'));
    const newApplyJob = [];
    if(!storedJobs){
        newApplyJob.push(detailsJob);
        localStorage.setItem('jobs', JSON.stringify(newApplyJob));
        swal("Good job!", "You Applied for the job!", "success");
    }
    else {
        const isExists = storedJobs.find(job => job.id  === detailsJob.id);
        if(!isExists) {
            newApplyJob.push(...storedJobs, detailsJob);
        localStorage.setItem('jobs', JSON.stringify(newApplyJob));
        swal("Good job!", "You Applied for the job!", "success");
        } else {
            swal("Already applied!", "Duplicate not allowed!", "error");
        }
        
    }
  }
  return (
    <div>
      <div className="text-center h-60 bg-gradient-to-r from-[#7e90fe0d] to-[#9873FF0D] flex justify-center items-center">
        <h1 className="font-bold  text-3xl">Job Details</h1>
      </div>
      <div className="min-h-[80vh] max-w-7xl mx-auto flex justify-center items-center py-10">
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="space-y-6 px-5 lg:w-2/3">
          <p className="text-xl font-medium">
            <span className="font-bold">Job Description:</span>
            {detailsJob?.job_description}
          </p>
          <p className="text-xl font-medium">
            <span className="font-bold">Job Responsibility:</span>
            {detailsJob?.job_responsibility}
          </p>
          <p className="text-xl font-medium">
            <span className="font-bold">Educational Requirements:</span>
            <br />
            {detailsJob?.educational_requirements}
          </p>
          <p className="text-xl font-medium">
            <span className="font-bold">Educational Requirements:</span>
            <br />
            {detailsJob?.educational_requirements}
          </p>
          <p className="text-xl font-medium">
            <span className="font-bold">Experiences:</span>
            <br />
            {detailsJob?.experiences}
          </p>
        </div>
        <div className="p-7 rounded-lg  bg-gradient-to-r from-[#7e90fe0d] to-[#9873FF0D] border-2 lg:flex-1">
          <div className="p-6 border-b-2">
            <p className="font-extrabold text-xl">Job Details</p>
          </div>
          <div className="p-6 border-b-2">
            <p className="text-xl">
              <span className="font-bold">
                <PiCurrencyCircleDollarLight className="inline mr-2"></PiCurrencyCircleDollarLight>
                Salary:{" "}
              </span>
              {detailsJob?.salary}
            </p>
            <p className="text-xl mt-4">
              <span className="font-bold">
                <RxCalendar className="inline mr-2"></RxCalendar>Job Title :{" "}
              </span>
              {detailsJob?.job_title}
            </p>
          </div>
          <div className="p-6 border-b-2">
            <p className="font-extrabold text-xl">Contact Information</p>
          </div>
          <div className="p-6">
            <p className="text-xl">
              <span className="font-bold">
                <FiPhone className="inline mr-2"></FiPhone>Phone:{" "}
              </span>
              {detailsJob?.contact_information?.phone}
            </p>
            <p className="text-xl">
              <span className="font-bold">
                <MdOutlineEmail className="inline mr-2"></MdOutlineEmail>Email:{" "}
              </span>
              {detailsJob?.contact_information?.email}
            </p>
            <p className="text-xl">
              <span className="font-bold">
                <SlLocationPin className="inline mr-2"></SlLocationPin>Address:{" "}
              </span>
              {detailsJob?.contact_information?.address}
            </p>
          </div>
          <button onClick={handleAppliedJobs} className="btn w-full bg-[#9873FF]">Apply Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobDetails;
