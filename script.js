document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");

    for (let sem = 1; sem <= 11; sem++) {
        semesters[sem].forEach(course => {
            const div = document.createElement("div");
            div.className = "course";
            div.innerHTML = `<strong>${course.code}</strong><br>${course.name}`;
            grid.appendChild(div);
        });
    }
});
