function generatePlan() {
    const subjectsInput = document.getElementById("subjects").value;
    const timeInput = parseInt(document.getElementById("time").value);
    const studyPlanDiv = document.getElementById("studyPlan");

    // Clear previous results
    studyPlanDiv.innerHTML = "";

    if (!subjectsInput || isNaN(timeInput) || timeInput <= 0) {
        alert("Please enter valid subjects and study time.");
        return;
    }

    const subjects = subjectsInput.split(",").map(s => s.trim());
    const weeks = 4;
    const topicsPerSubject = [
        ["Algebra – Linear Equations", "Geometry – Basics of Angles and Triangles", "Quadratic Equations", "Circles and Polygons"],
        ["Physics – Motion and Forces", "Biology – Cell Structure and Functions", "Chemistry – Atomic Structure", "Earth Science – Plate Tectonics"],
        ["Ancient Civilizations – Mesopotamia", "Renaissance and Reformation", "Age of Enlightenment", "World War I and II"]
    ];

    let studyTimePerWeek = timeInput / weeks;
    let studyPlanHTML = "";

    for (let week = 1; week <= weeks; week++) {
        studyPlanHTML += `<div class="study-week"><h3>📅 Week ${week}</h3>`;

        subjects.forEach((subject, index) => {
            let topicIndex = (week - 1) % topicsPerSubject[index].length;
            studyPlanHTML += `
                <div class="study-topic">
                    <strong>${subject}:</strong> ${topicsPerSubject[index][topicIndex]}  
                    <br>⏳ Study Time: ${studyTimePerWeek.toFixed(1)} hours
                </div>
            `;
        });

        studyPlanHTML += `</div>`;
    }

    studyPlanDiv.innerHTML = studyPlanHTML;
}
