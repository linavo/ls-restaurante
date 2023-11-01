import { addContent } from "./addContent";
import { addMenu } from "./addMenu";
import githubLogo from "./github-mark/github-mark.png";

function addJoin() {
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
  topMenuDiv.classList.add("topMenuDiv1");
  body.appendChild(topMenuDiv);

  let joinDiv = document.createElement("div");
  let joinH1 = document.createElement("h1");
  let joinH3 = document.createElement("h3");
  joinDiv.classList.add("joinDiv");
  joinH1.textContent = "join our team";
  joinH3.textContent =
    "Here at L's Restaurante, we value team members from all different kinds of positions. Each member has an important mission to provide our customers with not only the best food, but the best experience. Upholding our restaurant's standards to provide the finest service may include welcoming both customers and fellow team members with open arms. Our mission is to not only extend our hospitality to the public, but to our fellow employees as well.";

  joinDiv.appendChild(joinH1);
  joinDiv.appendChild(joinH3);
  body.appendChild(joinDiv);

  // below here is to control tabs

  let homeTab = document.querySelector(".homeTab");
  homeTab.addEventListener("click", addContent);

  let menuTab = document.querySelector(".menuTab");
  menuTab.addEventListener("click", addMenu);

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

export { addJoin };
