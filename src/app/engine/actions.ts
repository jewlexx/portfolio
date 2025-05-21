"use server";

export async function performSearch(formData: FormData) {
  // TODO
  console.log(formData.get("engine"));
  console.log(JSON.stringify(Object.fromEntries(formData.entries()), null, 2));
}
