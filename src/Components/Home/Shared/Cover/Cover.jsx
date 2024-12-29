
const Cover = ({img,title,description}) => {
    return (
        <div
        className="hero h-[600px] "
        style={{
          backgroundImage: `url("${img}")`,
        }}>
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl bg-black p-20 bg-opacity-35 px-36">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">
             {description}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Cover;