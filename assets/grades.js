var clear = document.querySelector("#clear")
clear.addEventListener("click", function() {
    window.localStorage.removeItem("grades");
    window.location.reload();
})

function appendGrades() {
    var grades = JSON.parse(window.localStorage.getItem("grades")) || [];
    grades.forEach(function(grade) {
        var scoreListItem = document.createElement("li");
        scoreListItem.textContent = grade.user + " " + grade.grade;
        var scoreList = document.querySelector("#grades");
        scoreList.appendChild(scoreListItem);
    })
}

appendGrades();