'use client';

import { Products } from '@/components/Products';
import { getProducts } from '@/services/getProducts';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>

      {loading ? <h3>loading</h3> : <Products products={products} />}
    </>
  );
}
