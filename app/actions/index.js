"use server";

import { signIn } from "../../auth";

export async function login(formData) {
  try {
    // eta k bolte hbe eta ki type signIn
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, // jode ei page a kno error ase tbuo o ei page a thakbo onno page a jawa hbe na
    });

    return response; // ei response ta send na korar jnno error khaitecilam
  } catch (err) {
    throw new Error(err);
  }
}
