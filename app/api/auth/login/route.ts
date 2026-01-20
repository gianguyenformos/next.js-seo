import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const springRes = await fetch(`${process.env.BACKEND_URL}/api/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!springRes.ok) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // const { accessToken, refreshToken, expiresIn } = await springRes.json();
  const { id_token: accessToken } = await springRes.json();

  const res = NextResponse.json({ ok: true });

  res.cookies.set("access_token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    // maxAge: expiresIn,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  // res.cookies.set("refresh_token", refreshToken, {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "strict",
  //   maxAge: 60 * 60 * 24 * 7,
  //   path: "/api/auth/refresh",
  // });

  return res;
}
