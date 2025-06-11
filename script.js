const names = ["Abdullah", "Abdur Rahman", "Yahya"];

document.getElementById("generate-btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    document.getElementById("name-display").textContent = randomName;
});