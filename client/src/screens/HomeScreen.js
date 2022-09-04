import React from 'react';
import { Product } from '../components';
import data from '../data';

export default function HomeScreen() {
  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {data.products.map((product) => (
        <div className="w-[300px] mb-8" key={product._id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
