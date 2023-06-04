type EndpointsType = "users" | "app";

export async function fetchData(endpoint: EndpointsType) {
  const res = await fetch(`http://localhost:3000/api/${endpoint}`, {
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
