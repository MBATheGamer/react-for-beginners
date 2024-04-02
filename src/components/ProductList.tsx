import { useEffect } from "react";

export default function ProductList({ category }: { category: string }) {
  useEffect(() => {
    console.log("Fetching products in ", category);
  }, [category]);

  return <div>ProductList</div>;
}
