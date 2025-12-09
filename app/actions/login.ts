"use server";

import { db } from "@/db";
import { users, User } from "@/db/schema";
import { eq } from "drizzle-orm";
import { comparePassword, createSession } from "@/lib/auth";
import { ActionResponse } from "./types";
import { cookies } from "next/headers";

export async function loginAction(formData: FormData): Promise<ActionResponse> {
  const cookieStore = await cookies();
  const exists = cookieStore.get("session")?.value;

  // 🔒 Cegah user yang sudah login
  if (exists) {
    return {
      success: false,
      message: "Anda sudah login",
    };
  }

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { success: false, message: "Email dan password wajib diisi" };
  }

  // ✔ Query aman & type-safe
  const rows: User[] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  const user = rows[0];

  if (!user) {
    return { success: false, message: "Akun tidak ditemukan" };
  }

  const valid = await comparePassword(password, user.password);

  if (!valid) {
    return { success: false, message: "Password salah" };
  }

  // ✔ Buat session
  await createSession({
    userId: user.id,
    role: user.role as "admin" | "user",
  });

  return {
    success: true,
    message: "Login berhasil",
    role: user.role as "admin" | "user",
  };
}
