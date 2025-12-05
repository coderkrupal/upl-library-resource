import { api } from "./api.js";

const token = localStorage.getItem("token");

async function loadBooks() {
  const books = await api("/books", "GET", null, token);
  console.log(books);
}

document.addEventListener("DOMContentLoaded", loadBooks);
