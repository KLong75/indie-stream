"use server";

import { z } from "zod";
import postgres from "postgres";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import AuthError from "next-auth";
import bcrypt from "bcrypt";
// import { sign } from "crypto";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const userSignUpFormSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string(),
  user_name: z.string().min(2),
});

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const CreateUser = userSignUpFormSchema.omit({ passwordConfirmation: true });

export async function createUser(prevState: State, formData: FormData) {
  // Convert FormData to an object for parsing
  // const data = {
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  //   passwordConfirmation: formData.get("passwordConfirmation"),
  //   user_name: formData.get("userName"),
  //   id: crypto.randomUUID(),
  // };

  const validatedFields = CreateUser.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    user_name: formData.get("userName"),
    id: crypto.randomUUID(),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid input. Login failed.",
    }
  }

  const { email, password, user_name, id } = validatedFields.data;

  // Hash the password (recommended before storing)
  const hashedPassword = await bcrypt.hash(password, 10);


  // // Validate input
  // const parsed = userSignUpFormSchema.parse(data);

  // // Check passwords match
  // if (parsed.password !== parsed.passwordConfirmation) {
  //   throw new Error("Passwords do not match.");
  // }

  // // Hash the password (recommended before storing)
  // const hashedPassword = await bcrypt.hash(parsed.password, 10);

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      user_name TEXT NOT NULL
    );
  `;
  await sql`
    INSERT INTO users (id, email, password, user_name)
    VALUES (${id}, ${email}, ${hashedPassword}, ${user_name})
  `;

  const result = await signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
  });

  console.log("sign in - result:", result);

  return id;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
