const main = document.querySelector(".main")
const container = document.querySelector(".container")
const nav = document.querySelector(".nav");
const timerBox = document.querySelector(".timer-box");
const promodoro = document.querySelector(".promodoro");
const promodoroBtn = document.querySelector(".btn-promodoro")
const shortBreak = document.querySelector(".short_break");
const shortBreakBtn = document.querySelector(".btn-shortBreak")
const longBreak = document.querySelector(".long_break");
const longBreakBtn = document.querySelector(".btn-longBreak")

document.title = "25:00 - Time To Focus!"

let navLinks = nav.getElementsByClassName("nav-link")
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        let active = document.getElementsByClassName("active")
        active[0].classList.remove("active")
        this.classList.add("active")

        let text = active[0].textContent;
        if (text.toLocaleLowerCase().trim() === "promodoro") {
            document.title = "25:00 - Time To Focus!"

            promodoro.style.display = "block";
            shortBreak.style.display = "none";
            longBreak.style.display = "none";

            main.style.backgroundColor = "rgb(217, 85, 80)";
            container.style.backgroundColor = "rgb(221, 102, 98)";
            promodoroBtn.style.color = "rgb(217, 85, 80)";
        } else if (text.toLocaleLowerCase().trim() == "short break") {
            document.title = "5:00 - Time For A Break!";

            promodoro.style.display = "none";
            shortBreak.style.display = "block";
            longBreak.style.display = "none";

            main.style.backgroundColor = "rgb(76,145,149)";
            container.style.backgroundColor = "rgb(94,156,160)";
            shortBreakBtn.style.color = "rgb(76,145,149)";
        } else {
            document.title = "15:00 - Time For A  Break!";

            promodoro.style.display = "none";
            shortBreak.style.display = "none";
            longBreak.style.display = "block";

            main.style.backgroundColor = "rgb(69,124,163)";
            container.style.backgroundColor = "rgb(88,137,172)";
            longBreakBtn.style.color = "rgb(69,124,163)";
        }
    })
}



// btns
promodoroBtn.addEventListener("click", () => timer("promodoro_time", 25, "Time To Focus!"));
shortBreakBtn.addEventListener("click", () => timer("shortBreak_time", 5, "Time For A Break!"));
longBreakBtn.addEventListener("click", () => timer("longBreak_time", 15, "Time For A Break!"));


function timer(name, time, title) {
    let timerText = document.querySelector(`.${name}`)
    let min = time - 1;
    let sec = 60;

    const startTime = setInterval(() => {
        sec--;

        if (min == 0 && sec == 0) {
            sec = 0
            alert("Congresss!")
            clearInterval(startTime)
        } else if (sec == 0) {
            min--;
            sec = 60;
        }


        timerText.innerHTML = min + ":" + sec;
        document.title = `${min + ":" + sec} - ${title}`;
    }, 1000)
}