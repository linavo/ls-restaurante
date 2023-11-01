import { addContent } from "./addContent";
import { addJoin } from "./addJoin";
import githubLogo from "./github-mark/github-mark.png";

function addMenu() {
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

  let topMenuDiv = document.createElement("div");
  topMenuDiv.classList.add("topMenuDiv");
  body.appendChild(topMenuDiv);

  let secondMenuDiv = document.createElement("div");
  secondMenuDiv.classList.add("secondMenuDiv");
  let secondMenuDivH1 = document.createElement("h1");
  secondMenuDivH1.classList.add("secondDivH1");
  secondMenuDivH1.textContent = "Menu";
  secondMenuDiv.appendChild(secondMenuDivH1);

  // menu items + container

  let menuContainer = document.createElement("div");
  let mainLogoContainer = document.createElement("div");
  let mainMenuLogo = document.createElement("h2");
  let mainMenuGrid = document.createElement("div");

  let item1 = createItem(
    "Bbq Chicken Pizza",
    "24.75",
    "BBQ Sauce, BBQ chicken, sliced red onions & crispy bacon"
  );
  let item2 = createItem(
    "Combination Pizza",
    "20.25",
    "Pepperoni, sausage, black olives, red peppers and onion slices"
  );
  let item3 = createItem(
    "Spicy Chipotle Cream Pizza",
    "23.50",
    "Southern Chipotle sauce, chipotle chicken, crispy bacon, red onions and fresh cilantro"
  );
  let item4 = createItem(
    "Garlic Cream Pizza",
    "22.75",
    "Creamy garlic sauce, grilled chicken, red peppers, red onions and heirloom tomatoes"
  );
  let item5 = createItem(
    "Pesto Prima Pizza",
    "19.75",
    "Pesto sauce, chicken, sliced red onions and fresh tomatoes"
  );
  let item6 = createItem(
    "Vegetarian Pizza",
    "20.50",
    "iced bell peppers, white onions, fresh tomatoes, black olives & mushrooms"
  );

  mainMenuGrid.classList.add("mainMenuGrid");
  menuContainer.classList.add("menuContainer");
  mainLogoContainer.classList.add("mainLogoContainer");
  mainMenuLogo.classList.add("mainMenuLogo");
  mainMenuLogo.textContent = "main";

  mainMenuGrid.appendChild(item1);
  mainMenuGrid.appendChild(item2);
  mainMenuGrid.appendChild(item3);
  mainMenuGrid.appendChild(item4);
  mainMenuGrid.appendChild(item5);
  mainMenuGrid.appendChild(item6);
  mainLogoContainer.appendChild(mainMenuLogo);
  menuContainer.appendChild(mainLogoContainer);
  menuContainer.appendChild(mainMenuGrid);
  secondMenuDiv.appendChild(menuContainer);
  body.appendChild(secondMenuDiv);
  // below here is to control tabs

  let homeTab = document.querySelector(".homeTab");
  homeTab.addEventListener("click", addContent);

  let joinTab = document.querySelector(".joinTab");
  joinTab.addEventListener("click", addJoin);

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
}

function createItem(name, price, description) {
  let item = document.createElement("div");
  let itemSpan = document.createElement("div");
  let itemName = document.createElement("h3");
  let itemPrice = document.createElement("h3");
  let itemDescription = document.createElement("h4");

  itemName.textContent = name;
  itemPrice.textContent = price;
  itemDescription.textContent = description;

  item.classList.add("menuItem");
  itemSpan.classList.add("menuItemSpan");

  itemSpan.appendChild(itemName);
  itemSpan.appendChild(itemPrice);
  item.appendChild(itemSpan);
  item.appendChild(itemDescription);

  return item;
}

export { addMenu };
