import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProductsProps = {
  products: any[];
};

const Products = ({ products }: ProductsProps) => {
  console.log('products', products);
  return (
    <ul className="max-w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products &&
        [...products.filter((item) => item.card_article === 0)].map(
          (product, index) => (
            <div key={index}>
              <h2>{product.title}</h2>{' '}
              {product.img_new !== 'default' ? (
                <picture className="block w-full h-full">
                  <source
                    srcSet={`https://files.dobropizza.ru/images/products/${400}x${400}/${
                      product.img_new
                    }.avif`}
                    type="image/avif"
                  />
                  <source
                    srcSet={`https://files.dobropizza.ru/images/products/${400}x${400}/${
                      product.img_new
                    }.webp`}
                    type="image/webp"
                  />
                  <Image
                    className="w-full h-full object-contain transition-all duration-300"
                    src={`https://files.dobropizza.ru/images/products/${400}x${400}/${
                      product.img_new
                    }.png`}
                    width={300}
                    height={300}
                    alt={product.name}
                  />
                </picture>
              ) : (
                <Image
                  src={`https://dobropizza.ru/upload/products/${product.img}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain transition-all duration-300"
                  alt={product.name}
                />
              )}
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Article: {product.card_article}</p>
            </div>
          )
        )}
    </ul>
  );
};

export { Products };
