import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const appliedJobs = JSON.parse(localStorage.getItem("jobs"));

  return (
    <div>
      {!appliedJobs ? (
        <div className="text-center min-h-[70vh] flex items-center justify-center">
          <h1 className="text-4xl font-bold">No applied Job</h1>
        </div>
      ) : (
        <div>
          <div className="text-center h-60 bg-gradient-to-r from-[#7e90fe0d] to-[#9873FF0D] flex justify-center items-center">
            <h1 className="font-bold  text-3xl">Applied Jobs</h1>
          </div>
          <div className="flex justify-center items-center min-h-fit my-10">
            <div>
              {appliedJobs.map((appliedJob) => (
                <AppliedJob
                  key={appliedJob.id}
                  appliedJob={appliedJob}
                ></AppliedJob>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
