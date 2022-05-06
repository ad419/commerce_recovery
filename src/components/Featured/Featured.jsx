import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import { SpinnerCircularSplit } from "spinners-react";

const Featured = () => {
  const [product, setProduct] = useState({});
  const productId = "prod_VPvL5z3P4NlAQk";

  const fetchProduct = async () => {
    const response = await commerce.products.retrieve(productId);
    const { name, price, image, quantity, description, sku } = response;
    setProduct({
      name,
      sku,
      quantity,
      description,
      src: image.url,
      price: price.formatted_with_symbol,
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product.name) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinnerCircularSplit />
      </div>
    );
  }

  return (
    <>
      <div className="xl:mx-auto xl:container">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full lg:w-1/2 md:py-9 py-6">
              <img
                src={product.src}
                alt="bag"
                className="lg:w-full h-full object-cover object-center w-full"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
              <p className="text-sm leading-none text-gray-600 pb-2">
                Featured
              </p>
              <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">
                {product.name}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="text-sm leading-5 text-gray-600 md:pb-10 pb-8"
              ></p>
              <p className="text-sm leading-none text-gray-600 pb-2">
                SKU : {product.sku}
              </p>
              <div className="md:block flex items-center justify-center">
                <a href="/product-details/prod_VPvL5z3P4NlAQk">
                  <button className="lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-800">
                    Shop best sellers
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
