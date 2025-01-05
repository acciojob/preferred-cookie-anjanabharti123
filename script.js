//your JS code here. If required.
// Get a cookie by name
function getCookie(name) {
  let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

// Set a cookie
function setCookie(name, value, days) {
  let expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Apply preferences from cookies
(function applyPreferences() {
  const fontSize = getCookie("fontSize");
  const fontColor = getCookie("fontColor");

  if (fontSize) {
    document.body.style.fontSize = fontSize + "px";
    document.getElementById("fontsize").value = fontSize;
  }
  if (fontColor) {
    document.body.style.color = fontColor;
    document.getElementById("fontcolor").value = fontColor;
  }
})();

// Save preferences when the form is submitted
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  setCookie("fontSize", fontSize, 30);
  setCookie("fontColor", fontColor, 30);

  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;
});
