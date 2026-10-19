
const toggleBtn = document.getElementById("toggleBtn");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");
const learnBtn = document.getElementById("learnBtn");
const learnInfo = document.getElementById("learnInfo");

const mobileScreen = window.matchMedia("(max-width: 768px)");

function updateButton() {
    const isMobile = mobileScreen.matches;
    const isOpen = isMobile
        ? document.body.classList.contains("mobile-open")
        : !document.body.classList.contains("collapsed");

    toggleBtn.setAttribute("aria-expanded", String(isOpen));
}

function toggleSidebar() {
    if (mobileScreen.matches) {
        document.body.classList.toggle("mobile-open");
    } else {
        document.body.classList.toggle("collapsed");
    }

    updateButton();
}

function closeMobileSidebar() {
    document.body.classList.remove("mobile-open");
    updateButton();
}

toggleBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeMobileSidebar);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");

        if (mobileScreen.matches) {
            closeMobileSidebar();
        }
    });
});

learnBtn.addEventListener("click", () => {
    const isHidden = learnInfo.hidden;

    learnInfo.hidden = !isHidden;
    learnBtn.textContent = isHidden ? "Show Less" : "Learn More";
});

mobileScreen.addEventListener("change", () => {
    document.body.classList.remove("mobile-open");
    updateButton();
});

updateButton();
