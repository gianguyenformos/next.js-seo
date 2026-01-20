import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // const refresh = (await cookies()).get("refresh_token")?.value;

  // if (refresh) {
  //   await fetch(`${process.env.BACKEND_URL}/auth/logout`, {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${refresh}` },
  //   });
  // }

  const res = NextResponse.json({ ok: true });

  res.cookies.delete("access_token");
  // res.cookies.delete("refresh_token");

  return res;
}
