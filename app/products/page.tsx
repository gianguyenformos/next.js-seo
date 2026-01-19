export const dynamic = "force-dynamic"; // đảm bảo SSR

import { getProducts } from "@/app/lib/api";

export default async function ProductsPage() {
  const { products } = await getProducts();

  return (
    <div>
      <h1>SSR Product List</h1>
      <ul>
        {products.slice(0, 5).map((p: any) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
