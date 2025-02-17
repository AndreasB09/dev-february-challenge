
//cardtext
document.querySelectorAll(".card").forEach(card => {
    let dataLanguage = card.getAttribute("data-language");
    card.textContent = "";
})


//Light/Dark mode
const themeSwitch = document.getElementById("theme-switch");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeSwitch.textContent = "Dark";
}

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeSwitch.textContent = "Dark";
        localStorage.setItem("theme", "light")
    } else {
        themeSwitch.textContent = "Light";
        localStorage.removeItem("theme");
    }
})