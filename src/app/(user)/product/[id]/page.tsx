"use client";
import DetailCardComponent from "@/components/DetailCardComponet/DetailCardComponent";
import { productType } from "@/lib/definitions";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "@/redux/service/e-commerce";
export type Params = {
  params: {
    id: number;
  };
};

export default function Product({ params }: Params) {
  const id = params.id;
  const { data } = useGetProductByIdQuery(id);
  const product = data as productType;
  if (!product) {
    // Handle the case where product is undefined
    return <div>Loading...</div>;
  }
  return (
    <DetailCardComponent
      category={product.category}
      desc={product.desc}
      image={product.image}
      price={product.price}
      name={product.name}
    />
  );
}
