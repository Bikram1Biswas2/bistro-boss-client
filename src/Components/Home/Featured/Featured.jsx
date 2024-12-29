import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <section className="bgImg p-8 mt-10 opacity-90 bg-fixed">
            <SectionTitle subHeading="Check It Out" heading='Our Featured Item'></SectionTitle>

            <div className="flex items-center gap-10 p-14 w-3/4 mx-auto">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="text-white">
                    <h2 className="font-bold">December 20,2024</h2>
                    <h4 className="uppercase">Where Can I get Some?</h4>
                    <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio recusandae ut atque consequatur obcaecati numquam, quis odio nemo esse laborum voluptatum, totam dolor, beatae hic nostrum nisi eveniet. Fugit incidunt quaerat consectetur hic nemo.</p>
                    <button className='btn border-b-4 border-black mt-4 border-t-0'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;