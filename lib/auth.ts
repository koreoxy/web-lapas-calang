import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export interface SessionData {
  userId: string;
  role: "admin" | "user";
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function createSession(data: SessionData) {
  const cookieStore = await cookies(); // ⬅ FIX PENTING

  cookieStore.set("session", JSON.stringify(data), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
  });
}

export async function destroySession() {
  const cookieStore = await cookies(); // ⬅ sama

  cookieStore.delete("session");
}
