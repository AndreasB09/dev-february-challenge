
//cardtext
document.querySelectorAll(".card").forEach(card => {
    let dataLanguage = card.getAttribute("data-language");
    card.textContent = "";
})

//quiz and results
const startBtn = document.getElementById("start-quiz");
const optionsContainer = document.getElementById("options-container");
const questionDisplay = document.getElementById("question-display");
const bars = document.querySelectorAll(".bar");

startBtn.addEventListener("click", () => {
    questionDisplay.textContent = "Pick an option";
    optionsContainer.style.display = "block";
    startBtn.style.display ="none";
});

optionsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("option")) {
        questionDisplay.textContent = "Your Love Language Distribution:";
        optionsContainer.style.display = "none";

        bars.forEach(bar => {
            let randomHeight = Math.floor(Math.random() * 100) + "%";
            bar.style.height = randomHeight;
        })
    }
});

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

//stories
const stories = document.querySelectorAll(".story-card");
const prevBtn = document.getElementById("prev-story");
const nextBtn = document.getElementById("next-story");

let activeIndex = 0;

function updateActiveStory() {
    stories.forEach((story, index) => {
        story.classList.toggle("active", index === activeIndex);
    });
}

updateActiveStory();

nextBtn.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % stories.length;
    updateActiveStory();
});

prevBtn.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + stories.length) % stories.length;
    updateActiveStory();
});

stories.forEach((story, index) => {
    story.addEventListener("click", () => {
        activeIndex = index;
        updateActiveStory();
    });
});