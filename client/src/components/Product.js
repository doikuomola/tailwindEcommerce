import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { excerpt } from '../utils';

export default function Product({ product }) {
  return (
    <Card className="">
      <CardHeader color="blue" className="relative h-56">
        <Link to="/product">
          <img
            src={product.image}
            alt="img-blur-shadow"
            className="h-full w-full object-contain hover:object-cover transition duration-150 ease-out hover:ease-in"
          />
        </Link>
      </CardHeader>
      <CardBody className="text-center">
        <Link to="/product">
          <Typography variant="h5" className="mb-2">
            {excerpt(product.title, 30)}
          </Typography>
        </Link>

        <Typography>{product.description}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="" className="font-bold">
          &#8358;{product.price}
        </Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Add to Cart
        </Typography>
      </CardFooter>
    </Card>
  );
}
