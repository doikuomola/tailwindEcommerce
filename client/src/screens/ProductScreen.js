import React from 'react';
import { Product } from '../components';

export default function ProductScreen() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <img src={Product.image} alt={Product.title} />
        </div>
        <div className="col-span-2">2</div>
        <div className="col-span-2">3</div>
      </div>
    </div>
  );
}
