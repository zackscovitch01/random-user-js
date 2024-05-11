import get from "./utils/getElement.js";
const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];

const getUser = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();
  // Destructure
  const person = data.results[0];
  console.log(person);
};

const showUser = () => {
  getUser();
  console.log("hello world");
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
