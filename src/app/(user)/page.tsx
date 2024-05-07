"use client";
import CardComponet from "@/components/CardComponent/CardComponet";
import CategoryComponent from "@/components/CategoryComponent/CategoryComponent";
import { CartProductType } from "@/lib/definitions";
import { useGetProductsQuery } from "@/redux/service/e-commerce";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session } = useSession();
  console.log(session);
  const { data } = useGetProductsQuery({
    page: currentPage,
    pageSize: 10,
  });
  const products = data?.results ?? [];

  const totalPages = 10;
  return (
    <main>
      <div className="w-[90%] mx-auto font-medium text-primaryColor mt-[80px] text-4xl">
        Our Category
      </div>
      <section className="w-[90%] mx-auto ">
        <CategoryComponent />
      </section>
      <div className="w-[90%] mx-auto font-medium text-primaryColor mt-[80px] text-4xl">
        Our Collection
      </div>
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-[40px] ">
        {products.map((pro: CartProductType) => {
          return (
            <CardComponet
              seller={pro.seller}
              id={pro.id}
              key={pro.id}
              name={pro.name}
              image={pro.image}
              price={pro.price}
            />
          );
        })}
      </section>
      <section className="my-10">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </main>
  );
}
