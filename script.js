document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const progressText = document.getElementById("progress-text");
    const progressFill = document.getElementById("progress-fill");
    const creditsText = document.getElementById("credits-text");

    let approved = [];
    try {
        approved = JSON.parse(localStorage.getItem("approvedCourses")) || [];
    } catch {
        approved = [];
    }

    function isUnlocked(course) {
        return course.prereq.every(p => approved.includes(p));
    }

    function calculateCredits() {
        let totalCredits = 0;

        for (let sem in semesters) {
            semesters[sem].forEach(course => {
                if (approved.includes(course.code)) {
                    totalCredits += course.credits || 0;
                }
            });
        }

        return totalCredits;
    }

    function updateProgress() {
        let totalCourses = 0;
        for (let sem in semesters) {
            totalCourses += semesters[sem].length;
        }

        const done = approved.length;
        const percent = totalCourses === 0 ? 0 : Math.round((done / totalCourses) * 100);

        progressFill.style.width = percent + "%";
        progressText.textContent = `Progreso: ${percent}% (${done}/${totalCourses})`;
        creditsText.textContent = `Créditos aprobados: ${calculateCredits()}`;
    }

    function render() {
        grid.innerHTML = "";

        for (let sem = 1; sem <= 11; sem++) {
            if (!semesters[sem]) continue;

            const semDiv = document.createElement("div");
            semDiv.className = "semester";

            const title = document.createElement("h2");
            title.textContent = `S${sem}`;
            semDiv.appendChild(title);

            semesters[sem].forEach(course => {
                const div = document.createElement("div");
                div.classList.add("course");

                // colores por sigla
                if (course.code.startsWith("MAT")) div.classList.add("mat");
                if (course.code.startsWith("EIQ")) div.classList.add("eiq");
                if (course.code.startsWith("ING")) div.classList.add("ing");
                if (course.code.startsWith("QUI")) div.classList.add("qui");
                if (course.code.startsWith("FIS")) div.classList.add("fis");
                if (course.code.startsWith("FIN")) div.classList.add("fin");
                if (course.code.startsWith("ICA")) div.classList.add("ica");
                if (
                    course.code.startsWith("ICR") ||
                    course.code.startsWith("IER") ||
                    course.code.startsWith("FOFU")
                ) div.classList.add("rosado");

                if (
                    course.code.startsWith("OPT1") ||
                    course.code.startsWith("OPT2") ||
                    course.code.startsWith("OPT3")
                ) div.classList.add("opt");

                div.innerHTML = `
                    <strong>${course.code}</strong><br>
                    ${course.name}<br>
                    <small>${course.credits ?? 0} créditos</small>
                `;

                const unlocked = isUnlocked(course);

                if (approved.includes(course.code)) {
                    div.classList.add("approved");
                } else if (unlocked) {
                    div.classList.add("available");
                } else {
                    div.classList.add("locked");
                }

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

                        render();
                    });
                }

                semDiv.appendChild(div);
            });

            grid.appendChild(semDiv);
        }

        updateProgress();
    }

    render();
});
