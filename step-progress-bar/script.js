const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front");
const stepEl = document.querySelectorAll(".step");

let currentChecked = 1;
console.log(stepEl.length);

nextEl.addEventListener("click", () => {
    currentChecked++;
    if (currentChecked > stepEl.length) {
        currentChecked = stepEl.length;
    }
    updateStepProgress();
});

prevEl.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateStepProgress();
});

const updateStepProgress = () => {
    stepEl.forEach((step, idx) => {
        if (idx < currentChecked) {
            step.classList.add("checked");
            console.log(idx);
            step.innerHTML = `
            <i class="fas fa-check"></i>
            <small>
            ${idx === 0 ? "Start" : idx === stepEl.length - 1 ? "Final" : "Step " + idx}
            </small>`;
        } else {
            step.classList.remove("checked");
            step.innerHTML = `<i class="fas fa-times"></i>`;
        }
    });

    const checkedNumber = document.querySelectorAll(".checked").length;

    progressEl.style.width = ((checkedNumber - 1) / (stepEl.length - 1)) * 100 + "%";

    if (currentChecked === 1) {
        prevEl.disabled = true;
    } else if (currentChecked === stepEl.length) {
        nextEl.disabled = true;
    } else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
};

// Initial call to disable the "Previous" button if on the first step
updateStepProgress();
