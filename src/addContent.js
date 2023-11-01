import image1 from "./kelvin-t-AcA8moIiD3g-unsplash.jpg";
import image2 from "./pablo-pacheco-D3Mag4BKqns-unsplash.jpg";
import image3 from "./ivan-torres-MQUqbmszGGM-unsplash.jpg";
import image4 from "./saahil-khatkhate-kfDsMDyX1K0-unsplash.jpg";
import image5 from "./saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg";
import githubLogo from "./github-mark/github-mark.png";
import { addMenu } from "./addMenu";
import { addJoin } from "./addJoin";

function addContent() {
  let body = document.querySelector("#content");
  let lastChild = body.lastElementChild;
  while (lastChild) {
    body.removeChild(lastChild);
    lastChild = body.lastElementChild;
  }

  let menu = document.createElement("div");

  menu.classList.add("menu");
  body.appendChild(menu);

  let formatMenuBar = document.createElement("div");
  formatMenuBar.classList.add("formatMenuBar");
  menu.appendChild(formatMenuBar);

  let logo = document.createElement("h5");
  logo.classList.add("logo");
  logo.textContent = "L's Restaurante";
  formatMenuBar.appendChild(logo);

  let home = document.createElement("h4");
  let menuList = document.createElement("h4");
  let join = document.createElement("h4");
  home.textContent = "Home";
  menuList.textContent = "Menu";
  join.textContent = "Join Our Team";

  home.classList.add("menuList");
  menuList.classList.add("menuList");
  join.classList.add("menuList");

  home.classList.add("homeTab");
  menuList.classList.add("menuTab");
  join.classList.add("joinTab");

  formatMenuBar.appendChild(home);
  formatMenuBar.appendChild(menuList);
  formatMenuBar.appendChild(join);

  let contact = document.createElement("button");
  contact.textContent = "Contact Us";
  contact.classList.add("contactBtn");
  formatMenuBar.appendChild(contact);

  let quote = document.createElement("h2");
  quote.textContent =
    "Welcome to L's Restaurante, home of some of the finest pizza and pasta dishes. Where there is love and passion for cooking, L's Restaurante presents to you mouth watering options.";
  quote.classList.add("quote");
  menu.appendChild(quote);

  let wolfgangPuck = document.createElement("h3");
  wolfgangPuck.textContent = "- Lina V.";
  wolfgangPuck.classList.add("wolfgangPuck");
  menu.appendChild(wolfgangPuck);

  let div2 = document.createElement("div");
  div2.classList.add("div2");
  let div2h1 = document.createElement("h1");
  div2h1.textContent = "Best Pizza in the Country";
  div2.appendChild(div2h1);
  div2h1.classList.add("div2h1");

  body.appendChild(div2);

  let pizzaDescription = document.createElement("div");
  pizzaDescription.textContent =
    "L's restaurant brings to you some of Los Angeles's most delicious pizza. We are a family owned business that prioritizes delectable taste and a fine dining experience.";
  pizzaDescription.classList.add("pizzaText");
  div2.appendChild(pizzaDescription);

  let pizzaContainer = document.createElement("div");
  pizzaContainer.classList.add("pizzaContainer");
  div2.appendChild(pizzaContainer);

  const column1 = document.createElement("div");
  const column2 = document.createElement("div");

  const imageOne = document.createElement("img");
  imageOne.src = image1;
  imageOne.classList.add("column");
  column1.appendChild(imageOne);

  const imageTwo = document.createElement("img");
  imageTwo.src = image2;
  imageTwo.classList.add("column");
  column1.appendChild(imageTwo);

  const imageThree = document.createElement("img");
  imageThree.src = image3;
  imageThree.classList.add("column");
  column1.appendChild(imageThree);

  const imageFour = document.createElement("img");
  imageFour.src = image4;
  imageFour.classList.add("column");
  column2.appendChild(imageFour);

  const imageFive = document.createElement("img");
  imageFive.src = image5;
  imageFive.classList.add("column");
  column2.appendChild(imageFive);

  column1.classList.add("column1");
  column2.classList.add("column2");

  pizzaContainer.appendChild(column1);
  pizzaContainer.appendChild(column2);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerLogo1 = document.createElement("div");
  const footerLogo2 = document.createElement("div");
  const githubPic = document.createElement("img");
  const footer2AndGitPic = document.createElement("div");
  const githubLink = document.createElement("a");

  githubLink.href = "https://github.com/linavo/ls-restaurante";
  githubLink.target = "_blank";
  footer2AndGitPic.classList.add("footerSpan");
  githubPic.src = githubLogo;
  githubPic.classList.add("github");
  footerLogo1.textContent = "L's Restaurante";
  footerLogo2.textContent = "Lina Vo © 2023";

  githubLink.appendChild(githubPic);
  footer2AndGitPic.appendChild(footerLogo2);
  footer2AndGitPic.appendChild(githubLink);
  footer.appendChild(footerLogo1);
  footer.appendChild(footer2AndGitPic);

  body.appendChild(footer);

  let menuTab = document.querySelector(".menuTab");
  menuTab.addEventListener("click", addMenu);

  let joinTab = document.querySelector(".joinTab");
  joinTab.addEventListener("click", addJoin);
}

export { addContent };
