window.onload = function () {
  //   setHomeHtml();
  document.getElementById("home-link").onclick = setHomeHtml;
};

function setHomeHtml() {
  fetch("home.html")
    .then((response) => response.text())
    .then(
      (text) => (document.getElementById("template-holder").innerHTML = text)
    );
}
