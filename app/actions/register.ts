"use server";

import { db } from "@/db";
import { users, NewUser } from "@/db/schema";
import { hashPassword, createSession } from "@/lib/auth";
import { randomUUID } from "crypto";
import { ActionResponse } from "./types";

export async function registerAction(formData: FormData): Promise<ActionResponse> {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !password) {
    return { success: false, message: "Semua field wajib diisi" };
  }

  const hashed = await hashPassword(password);

  const newUser: NewUser = {
    id: randomUUID(),
    name,
    email,
    password: hashed,
    role: "user",
  };

  try {
    await db.insert(users).values(newUser);

    createSession({ userId: newUser.id, role: "user" });

    return { success: true, message: "Registrasi berhasil" };
  } catch (error: unknown) {   // ⬅ FIX: gunakan unknown
    // Optional: safe error parsing
    let message = "Terjadi kesalahan server";

    if (error instanceof Error) {
      if (error.message.toLowerCase().includes("duplicate")) {
        message = "Email sudah digunakan";
      }
    }

    return { success: false, message };
  }
}
