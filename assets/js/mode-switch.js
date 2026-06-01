const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

let cooldown = false;

toggle.addEventListener("change", () => {
    if (cooldown) {
        toggle.checked = !toggle.checked;
        return;
    }

    cooldown = true;

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );

    setTimeout(() => {
        cooldown = false;
    }, 1000); // 1 second cooldown
});
