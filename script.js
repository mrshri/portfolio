var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");

const openTab = (tabName) => {
  for (let tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

var sideMenu = document.querySelector("#sideMenu");
const openMenu = () => {
  sideMenu.style.right = "0";
};

const closeMenu = () => {
  sideMenu.style.right = "-200px";
};

// for contact form data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxu_g_UDGAkl92e3AvlDklUq2V8voTDtz6EabG9pOqWlhSb72X85gwT63LbAYUBJKIZOw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message set successfully!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
