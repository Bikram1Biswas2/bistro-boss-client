

const MenuItem = ({item}) => {
    const {name,recipe,image,price}= item
    return (
        <div className="flex gap-6">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="uppercase font-bold text-gray-500">{name}---------</h2>
                <p className="text-gray-400">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;