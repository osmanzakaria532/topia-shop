import { Link } from "react-router";

const PopularProducts = ({ products }) => {
  // console.log(products);
  // const items = products.slice(0, 4);
  // console.log(items);

  return (
    <div className="p-6">
      <h2 className="bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] bg-clip-text p-6 text-2xl font-bold text-transparent">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body">
              <div className="border border-[rgb(2,178,144)] flex items-center justify-center">
                <img
                  src={product.pictureURL}
                  alt=""
                  className="h-64 object-contain"
                />
              </div>
              <h2>{product.ProductName}</h2>
              <p className="text-gray-600 text-sm">
                {product.shortDescription}
              </p>
              <div className="flex justify-between items-center">
                <p>Price ${product.price}</p>
                <p className="text-right">
                  Quantity {product.availableQuantity}
                </p>
              </div>
              <div className="flex justify-between">
                <span>Rating</span>
                <span> {product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          to="/products"
          className="btn border border-[rgb(2,178,144)]"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;
