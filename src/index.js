import "./style.css";
import { addContent } from "./addContent";
import { addMenu } from "./addMenu";
import { addJoin } from "./addJoin";

// window.addEventListener("load", addContent);

// addContent();
addJoin();

let homeTab = document.querySelector(".homeTab");
homeTab.addEventListener("click", addContent);

let menuTab = document.querySelector(".menuTab");
menuTab.addEventListener("click", addMenu);

let joinTab = document.querySelector(".joinTab");
joinTab.addEventListener("click", addJoin);
