document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");

    let approved = [];
    try {
        approved = JSON.parse(localStorage.getItem("approvedCourses")) || [];
    } catch {
        approved = [];
    }

    // función para verificar si un ramo está desbloqueado
    function isUnlocked(course) {
        return course.prereq.every(p => approved.includes(p));
    }

    function render() {
        grid.innerHTML = "";

        for (let sem = 1; sem <= 11; sem++) {
            if (!semesters[sem]) continue;

            semesters[sem].forEach(course => {
                const div = document.createElement("div");
                div.classList.add("course");
                div.innerHTML = `<strong>${course.code}</strong><br>${course.name}`;

                const unlocked = isUnlocked(course);

                if (approved.includes(course.code)) {
                    div.classList.add("approved");
                } else if (unlocked) {
                    div.classList.add("available");
                } else {
                    div.classList.add("locked");
                }

                // solo permitir click si está disponible o aprobado
                if (unlocked || approved.includes(course.code)) {
                    div.addEventListener("click", () => {
                        if (approved.includes(course.code)) {
                            approved = approved.filter(c => c !== course.code);
                        } else {
                            approved.push(course.code);
                        }

                        localStorage.setItem(
                            "approvedCourses",
                            JSON.stringify(approved)
                        );

                        render(); // volver a dibujar todo
                    });
                }

                grid.appendChild(div);
            });
        }
    }

    render();
});

