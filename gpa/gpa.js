const courseInput = document.getElementById("courseInput");
const gradeInput = document.getElementById("gradeInput");
const courseDisplay = document.getElementById("courseDisplay");

gradePointList = {
	"A+": 10,
	A: 9,
	B: 8,
	C: 7,
	D: 6,
	E: 5,
	F: 0,
};

let gpaNum = 0;
let gpaDen = 0;

fetch("courses.json")
	.then((resp) => resp.json())
	.then((courseData) => {
		document.getElementById("courseButton").addEventListener("click", () => {
			let courseValue = courseInput.value;
			let gradeValue = gradeInput.value;

			let courseName = document.getElementById("courseName");
			let courseGrade = document.getElementById("grade");
			let courseGP = document.getElementById("gradePoint");

			let gpa = 0;

			if (
				courseValue in courseData &&
				courseData[courseValue]["added"] == false
			) {
				if (gradeValue in gradePointList) {
					courseData[courseValue]["added"] = true;
					courseName.innerHTML += `<p>${courseData[courseValue]["name"]}</p>`;
					courseGrade.innerHTML += `<p>${gradeValue}</p>`;
					courseGP.innerHTML += `<p>${gradePointList[gradeValue]}</p>`;

					gpaNum +=
						gradePointList[gradeValue] *
						courseData[courseValue]["credits"];
					gpaDen += courseData[courseValue]["credits"];
					gpa = gpaNum / gpaDen;

					const gpaDisplay = document.querySelector("#gpa");
					gpaDisplay.innerHTML = `GPA: ${gpa.toFixed(2)}`;
					gpaDisplay.style.display = "block";
				} else {
					alert("Invalid grade");
				}
			} else {
				alert("Course invalid or already added.");
			}
			courseValue = "";
			gradeValue = "";
		});
	});
