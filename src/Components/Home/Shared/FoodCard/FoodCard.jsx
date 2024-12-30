const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-2 rounded">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn text-yellow-700 border-b-4 border border-current border-t-0 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
