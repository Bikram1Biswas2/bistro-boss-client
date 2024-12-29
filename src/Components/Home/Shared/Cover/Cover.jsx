import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[500px] "
       
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl bg-black p-20 bg-opacity-35 px-36">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
