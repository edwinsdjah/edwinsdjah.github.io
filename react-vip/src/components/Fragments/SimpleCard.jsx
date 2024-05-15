import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function SimpleCard({ id, image, title, description }) {
  return (
    <Card className="mt-6 w-96" key={id}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <div className="flex items-center justify-center">
        <span className="text-3xl font-bold text-blue-gray">Rp 1.000.000</span>
        <CardFooter>
          <Button>Add to Cart</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
