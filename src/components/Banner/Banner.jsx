import user from '../../assets/images/user.png'

const Banner = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#7e90fe0d] to-[#9873FF0D] py-7">
        <div className='max-w-7xl mx-auto'>
        <div className="flex flex-col lg:flex-row-reverse items-center ">
          <img
            src={user}
            className="max-w-sm rounded-lg flex-1"
          />
          <div className='lg:w-2/3'>
            <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-[#9873FF]'>Dream Job</span></h1>
            <p className="py-6 max-w-lg">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn">Get Started</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
