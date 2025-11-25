import axios from "axios";

export type User = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  company?: { name: string };
  address?: { city: string };
};

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  return (await axios.get<User[]>(BASE_URL)).data;
}

export async function getUser(id: number) {
  return (await axios.get<User>(`${BASE_URL}/${id}`)).data;
}
