import { Category } from "@/types";

const URL = `http://localhost:3000/api/4b415ec1-297d-4d9e-b87e-bfaf2ae713cd/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;
