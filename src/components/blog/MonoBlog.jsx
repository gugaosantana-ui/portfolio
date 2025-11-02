const MonoBlog = ({ data, onOpen }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-gray-300 transition-all duration-300">
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onOpen();
        }}
      >
        <img
          src={data.image}
          alt="Blog"
          className="w-full h-full object-cover"
        />
        {/* <div className="m-6">
          {/* <p className="text-[10px] xs:text-[14px] font-normal text-gray-400 ">
            {data?.date} / {data?.comments} Comments
          </p> 
           <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
            {data?.title.length > 40
              ? `${data?.title.slice(0, 40)}...`
              : data?.title}
          </p> 
        </div> */}
      </a>
    </div>
  );
};

export default MonoBlog;




