import { cookies } from "next/headers";
import LogoutButton from "./logout-button";

export default async function DashboardPage() {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) return <div>Not authenticated</div>;

  // Call backend directly since we're server-side
  const res = await fetch(`${process.env.BACKEND_URL}/api/account`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (res.status === 401) return <div>Session expired. Please login.</div>;
  if (!res.ok) return <div>Error loading user data.</div>;

  const user = await res.json();

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <LogoutButton />
    </div>
  );
}
