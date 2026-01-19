// Shared data function that can be used during build and runtime
export async function getData() {
  return {
    time: new Date().toISOString(),
    price: Math.floor(Math.random() * 1000),
    message: "Data from API route"
  }
}
