export async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

export async function getProducts() {
  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store"
  });
  return res.json();
}
