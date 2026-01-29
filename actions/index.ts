"use server";

type CreateUserInput = {
  name: string;
  email: string;
  message: string;
};

export async function createUser({ name, email, message }: CreateUserInput) {
  console.log("User Data Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Example:
  // await db.user.create({ data: { name, email, message } });

  return { success: true };
}
