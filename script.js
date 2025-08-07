/*Add your JavaScript here*/
var vaporeon = 0;
var jolteon = 0;
var flareon = 0;

var questionCount = 0;
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

q1a1.addEventListener("click", addJolt);
q1a2.addEventListener("click", addVap);
q1a3.addEventListener("click", addFlar);
q2a1.addEventListener("click", addVap);
q2a2.addEventListener("click", addFlar);
q2a3.addEventListener("click", addJolt);
q3a1.addEventListener("click", addFlar);
q3a2.addEventListener("click", addVap);
q3a3.addEventListener("click", addJolt);
q4a1.addEventListener("click", addFlar);
q4a2.addEventListener("click", addJolt);
q4a3.addEventListener("click", addVap);

q1a1.addEventListener("click", disable1);
q1a2.addEventListener("click", disable1);
q1a3.addEventListener("click", disable1);
q2a1.addEventListener("click", disable2);
q2a2.addEventListener("click", disable2);
q2a3.addEventListener("click", disable2);
q3a1.addEventListener("click", disable3);
q3a2.addEventListener("click", disable3);
q3a3.addEventListener("click", disable3);
q4a1.addEventListener("click", disable4);
q4a2.addEventListener("click", disable4);
q4a3.addEventListener("click", disable4);

restart.addEventListener("click", restartQuiz);

function addVap() {
	vaporeon += 1;
	questionCount += 1;
	console.log("questionCount = " + questionCount + "; vaporeon = " + vaporeon);

	if (questionCount == 4) {
		console.log("quiz is done!");
		updateResult();
	}
}

function addFlar() {
	flareon += 1;
	questionCount += 1;
	console.log("questionCount = " + questionCount + "; flareon = " + flareon);

	if (questionCount == 4) {
		console.log("quiz is done!");
		updateResult();
	}
}

function addJolt() {
	jolteon += 1;
	questionCount += 1;
	console.log("questionCount = " + questionCount + "; jolteon = " + jolteon);
	if (questionCount == 4) {
		console.log("quiz is done!");
		updateResult();
	}
}

function updateResult() {
	if (vaporeon >= 2) {
		console.log("you are a vaporeon!")
		document.getElementById("result").innerHTML = "Your eeveelution is... vaporeon!";
		updateVap();
	} else if (jolteon >= 2) {
		console.log("you are a jolteon!")
		document.getElementById("result").innerHTML = "Your eeveelution is... jolteon!";
		updateJolt();
	} else {
		console.log("you are a flareon!")
		document.getElementById("result").innerHTML = "Your eeveelution is... flareon!";
		updateFlar();
	}
}

function updateVap() {
	document.body.style.backgroundColor = "#c2f0ff";
	document.getElementById("eeveePic").src = "assets/vaporeon.avif";
	document.getElementById("description").innerHTML = "Vaporeon is the water evolution of eevee! You are free spritied and like to go with the flow. You are very gentle and peace loving.";
}

function updateJolt() {
	document.body.style.backgroundColor = "#fff7a3";
	document.getElementById("eeveePic").src = "assets/jolteon.avif";
	document.getElementById("description").innerHTML = "Jolteon is the electric evolution of eevee! You are energetic and love to be around people.";
}

function updateFlar() {
	document.body.style.backgroundColor = "#ffa3a3";
	document.getElementById("eeveePic").src = "assets/flareon.webp";
	document.getElementById("description").innerHTML = "Flareon is the fire evolution of eevee! You are brave and have a firey personality, and you strongly love those around you.";
}

function restartQuiz() {
	vaporeon = 0;
	flareon = 0;
	jolteon = 0;
	questionCount = 0;
	document.getElementById("result").innerHTML = "Your eeveelution is...";

	document.body.style.backgroundColor = "#f7f7f7";
	document.getElementById("eeveePic").src = "assets/eevee.webp";
	document.getElementById("description").innerHTML = "";
	inable();
}

function disable1() {
	q1a1.disabled = true;
	q1a2.disabled = true;
	q1a3.disabled = true;
}

function disable2() {
	q2a1.disabled = true;
	q2a2.disabled = true;
	q2a3.disabled = true;
}

function disable3() {
	q3a1.disabled = true;
	q3a2.disabled = true;
	q3a3.disabled = true;
}

function disable4() {
	q4a1.disabled = true;
	q4a2.disabled = true;
	q4a3.disabled = true;
}

function inable() { // assumes the user answers in order
	q1a1.disabled = false;
	q1a2.disabled = false;
	q1a3.disabled = false;
	q2a1.disabled = false;
	q2a2.disabled = false;
	q2a3.disabled = false;
	q3a1.disabled = false;
	q3a2.disabled = false;
	q3a3.disabled = false;
	q4a1.disabled = false;
	q4a2.disabled = false;
	q4a3.disabled = false;
}