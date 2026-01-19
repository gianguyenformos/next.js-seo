export const revalidate = 60; // ISR 60s

import { getProduct } from "@/app/lib/api";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let product;
  try {
    product = await getProduct(id);
    console.log("Product data:", JSON.stringify(product, null, 2));
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div>
        <h1>ISR Product #{id}</h1>
        <p>Error loading product: {error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    );
  }

  if (!product || !product.title) {
    console.error("Product data is empty or invalid:", product);
    return (
      <div>
        <h1>ISR Product #{id}</h1>
        <p>Product not found or data is invalid</p>
        <pre>{JSON.stringify(product, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>ISR Product #{id}</h1>
      <p>{product.title}</p>
      <p>Price: {product.price}$</p>
      <small>Generated at: {new Date().toISOString()}</small>
    </div>
  );
}
