

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mb-8 mt-10 md:w-1/4 mx-auto text-center">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;