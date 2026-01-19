export const dynamic = "force-static"; // đảm bảo SSG

import { getProducts } from "@/app/lib/api";

export default async function HomePage() {
  const { products } = await getProducts();

  return (
    <div>
      <h1>SSG Product List</h1>
      <ul>
        {products.slice(0, 5).map((p: any) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}