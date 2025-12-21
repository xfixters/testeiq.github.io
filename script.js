document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");

    // cargar ramos aprobados desde el navegador
    const approved = JSON.parse(localStorage.getItem("approvedCourses")) || [];

    for (let sem = 1; sem <= 11; sem++) {
        semesters[sem].forEach(course => {
            const div = document.createElement("div");
            div.className = "course";
            div.innerHTML = `<strong>${course.code}</strong><br>${course.name}`;

            // si ya estaba aprobado, marcarlo
            if (approved.includes(course.code)) {
                div.classList.add("approved");
            }

            // click para marcar / desmarcar
            div.addEventListener("click", () => {
                div.classList.toggle("approved");

                const index = approved.indexOf(course.code);
                if (index === -1) {
                    approved.push(course.code);
                } else {
                    approved.splice(index, 1);
                }

                localStorage.setItem(
                    "approvedCourses",
                    JSON.stringify(approved)
                );
            });

            grid.appendChild(div);
        });
    }
});
