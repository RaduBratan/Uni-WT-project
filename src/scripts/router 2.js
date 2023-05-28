/* eslint-disable no-undef */
// SECTION --------------GLOBAL--------------

"use strict";

const routes = [
	{
		path: "/",
		// eslint-disable-next-line quotes
		data: home
	},
	{
		path: "/developer",
		// eslint-disable-next-line no-undef
		data: developer
	},
	{
		path: "/projects",
		// eslint-disable-next-line no-undef
		data: projects
	},
	{
		path: "/about",
		// eslint-disable-next-line no-undef
		data: about
	},
	{
		path: "/contact",
		// eslint-disable-next-line no-undef
		data: contact
	}
];

const colors = ["#4A5899", "#FFC100", "#DE4C3F", "#00A676"];
const colorsDark50 = ["#424E88", "#E6AE00", "#DA3829", "#008D64"];
const colorsExtra = ["#FFF1CE", "#222", "#FFF1CE", "#222"];
const optionsDesc = ["Hello!", "Est 15", "Skills", "E-mail"];
const optionsBgText = ["DeveloperDeveloperDeveloper", "ProjectsProjectsProjects", "AboutmeAboutmeAboutme", "ContactContactContact", "LanguageLanguageLanguage", "MenuMenuMenu"];
const optionsLinks = ["/developer", "/projects", "/about", "/contact"];
const timeChangeSlide = 640;
const timeToggleSlice = 640;
const timeTogglePage = 640;
const timeWaitForBgText = 160;

let j = 0;
let k = 0;
const historyArray = [];

const slideshowContainer = document.getElementById("slideshow-container");
const title = document.querySelectorAll(".title");
const chaptersContainer = document.getElementById("chapters-container");
const arrowBtnPrev = document.getElementById("arrow-btn-prev");
const arrowBtnNext = document.getElementById("arrow-btn-next");
const openBtn = document.querySelector(".open-btn");
const counterBtn = document.querySelector(".counter-btn");
const landingPage = document.getElementById("landing-page");
const routingPage = document.getElementById("routing-page");

const contentContainer = document.querySelector(".content-container");
/* const contentContainer = document.createElement("div");
contentContainer.className = "content-container"; */
// const contentTitle = document.createElement("h1");

const slicesContainer = document.querySelector(".slices-container");
const slice = document.querySelectorAll(".slice");

const logoBtnContainer = document.querySelector(".logo-btn-container");
const logoBtn = document.querySelector(".logo-btn");

const languageBtnContainer = document.querySelector(".language-btn-container");
const languageBtn = document.querySelector(".language-btn");
const languagePage = document.querySelector(".language-page");
const languageLink = document.querySelectorAll(".language-link");

const menuBtnContainer = document.querySelector(".menu-btn-container");
const menuBtn = document.querySelector(".menu-btn");
const menuPage = document.querySelector(".menu-page");
const menuLink = document.querySelectorAll(".menu-link");

const descriptionBtnContainer = document.querySelector(".description-btn-container");
//const descriptionBtn = document.querySelectorAll(".description-btn");
const descriptionBtnCurr = document.querySelector(".description-btn.curr");
const descriptionBtnNext = document.querySelector(".description-btn.next");
const descriptionBtnPrev = document.querySelector(".description-btn.prev");

const bgTextContainer = document.querySelector(".bg-text-container");
const bgText = document.querySelectorAll(".bg-text");

const cursorContainer = document.querySelector(".cursor-container");
const cursor = document.querySelector(".cursor");

// SECTION --------------TIME--------------

var startTime, endTime;

function start() {
	startTime = new Date();
}

function end() {
	endTime = new Date();
	var timeDiff = endTime - startTime;
	var milis = Math.round(timeDiff);
	console.log(milis + " miliseconds");
}

// SECTION --------------INTRO--------------

function revealPageElementsAlt() {
	title.forEach((title) => () => {
		(title.innerHTML = "<span><i>" + title.textContent.trim().split("").join("</i><i>").replace(/\s/g, "&nbsp;") + "</i></span>");
	});
	logoBtn.innerHTML = "<div><span>" + logoBtn.textContent.trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
	languageBtn.innerHTML = "<div><span>" + languageBtn.textContent.trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
	menuBtn.innerHTML = "<div><span>" + menuBtn.textContent.trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
	descriptionBtnCurr.innerHTML = "<h1><i>" + optionsDesc[k].trim().split("").join("</i><i>").replace(/\s/g, "&nbsp;") + "</i></h1>";

	setTimeout(() => {
		logoBtnContainer.style.display = "flex";
		languageBtnContainer.style.display = "flex";
		menuBtnContainer.style.display = "flex";
		descriptionBtnContainer.style.display = "flex";
		landingPage.style.visibility = "visible";
	}, 0);

	setTimeout(() => {
		title.forEach((title) => () => {
			title.style.visibility = "visible";
		});
	}, 0);
}

window.onload = function() {
	revealPageElementsAlt();
};

// SECTION --------------CAROUSEL--------------

const arrowColorOptions = [
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 203.44 301.26'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23FFF1CE;stroke:%23FFF1CE;stroke-miterlimit:10;stroke-width:32px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Earrow alt alt%3C/title%3E%3Cpath class='cls-1' d='M180.81,248.44l-75.18-75.18a32,32,0,0,1,0-45.26l75.18-75.19L150.63,22.63l-128,128,128,128Z'/%3E%3C/svg%3E",
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 203.44 301.26'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23222222;stroke:%23222222;stroke-miterlimit:10;stroke-width:32px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Earrow alt alt%3C/title%3E%3Cpath class='cls-1' d='M180.81,248.44l-75.18-75.18a32,32,0,0,1,0-45.26l75.18-75.19L150.63,22.63l-128,128,128,128Z'/%3E%3C/svg%3E",
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 203.44 301.26'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23FFF1CE;stroke:%23FFF1CE;stroke-miterlimit:10;stroke-width:32px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Earrow alt alt%3C/title%3E%3Cpath class='cls-1' d='M180.81,248.44l-75.18-75.18a32,32,0,0,1,0-45.26l75.18-75.19L150.63,22.63l-128,128,128,128Z'/%3E%3C/svg%3E",
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 203.44 301.26'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23222222;stroke:%23222222;stroke-miterlimit:10;stroke-width:32px;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Earrow alt alt%3C/title%3E%3Cpath class='cls-1' d='M180.81,248.44l-75.18-75.18a32,32,0,0,1,0-45.26l75.18-75.19L150.63,22.63l-128,128,128,128Z'/%3E%3C/svg%3E"
];

function moveSlider(slideshowContainer, chaptersContainer, arrowBtnPrev, arrowBtnNext) {
	const chapterDragThreshold = 10,
		chapters = chaptersContainer.getElementsByClassName("chapter"),
		chaptersLength = chapters.length,
		chapterSize = chaptersContainer.getElementsByClassName("chapter")[0].offsetWidth,
		firstChapter = chapters[0],
		lastChapter = chapters[chaptersLength - 1],
		cloneFirst = firstChapter.cloneNode(true),
		cloneLast = lastChapter.cloneNode(true);

	let chapterPosX1 = 0,
		chapterPosX2 = 0,
		chapterPosInitial,
		chapterPosFinal,
		chapterIndex = 0,
		allowShift = true;

	function changeColors() {
		arrowBtnPrev.style.backgroundImage = "url(\"" + arrowColorOptions[k] + "\")";
		arrowBtnNext.style.backgroundImage = "url(\"" + arrowColorOptions[k] + "\")";
		logoBtn.style.color = colorsExtra[k];
		languageBtn.style.color = colorsExtra[k];
		descriptionBtnCurr.style.color = colorsExtra[k];
		menuBtn.style.color = colorsExtra[k];
	}

	function hideOtherBoxes() {
		document.getElementById("box-left1").style.visibility = ("hidden");
		document.getElementById("box-right1").style.visibility = ("hidden");
		document.getElementById("box-left2").style.visibility = ("hidden");
		document.getElementById("box-right2").style.visibility = ("hidden");
		document.getElementById("box-left3").style.visibility = ("hidden");
		document.getElementById("box-right3").style.visibility = ("hidden");
		document.getElementById("box-left4").style.visibility = ("hidden");
		document.getElementById("box-right4").style.visibility = ("hidden");
	}

	function prevAll() {
		function prevColors() {
			if (k == 3)
				document.documentElement.classList.remove("theme0");
			else
				document.documentElement.classList.remove("theme" + (k + 1));
			document.documentElement.classList.add("theme" + k);
		}
		function prevBoxes() {
			const boxLeft = document.querySelectorAll("[id^=box-left]");
			const boxRight = document.querySelectorAll("[id^=box-right]");

			if (k == 3) {
				boxLeft[0].style.visibility = ("visible");
				boxRight[0].style.visibility = ("visible");
				boxLeft[0].classList.add("disappear-down");
				boxRight[0].classList.add("disappear-down");
				setTimeout(() => {
					boxLeft[0].classList.remove("disappear-down");
					boxRight[0].classList.remove("disappear-down");
					boxLeft[0].style.visibility = ("hidden");
					boxLeft[k].style.visibility = ("visible");
					boxRight[0].style.visibility = ("hidden");
					boxRight[k].style.visibility = ("visible");
				}, timeChangeSlide / 2);
			}
			else {
				boxLeft[k + 1].style.visibility = ("visible");
				boxRight[k + 1].style.visibility = ("visible");
				boxLeft[k + 1].classList.add("disappear-down");
				boxRight[k + 1].classList.add("disappear-down");
				setTimeout(() => {
					boxLeft[k + 1].classList.remove("disappear-down");
					boxRight[k + 1].classList.remove("disappear-down");
					boxLeft[k + 1].style.visibility = ("hidden");
					boxLeft[k].style.visibility = ("visible");
					boxRight[k + 1].style.visibility = ("hidden");
					boxRight[k].style.visibility = ("visible");
				}, timeChangeSlide / 2);
			}

			boxLeft[k].classList.add("uptomid");
			boxRight[k].classList.add("uptomid");
			setTimeout(() => {
				boxLeft[k].classList.add("appear-updown");
				boxRight[k].classList.add("appear-updown");
			}, timeChangeSlide / 4);
			setTimeout(() => {
				boxLeft[k].classList.remove("uptomid");
				boxRight[k].classList.remove("uptomid");
				boxLeft[k].classList.remove("appear-updown");
				boxRight[k].classList.remove("appear-updown");
			}, timeChangeSlide / 2);
		}
		function prevDesc() {
			descriptionBtnPrev.style.visibility = "visible";
			if ((k > 0) && (k < 3)) {
				descriptionBtnPrev.style.color = colorsExtra[k + 1];
				descriptionBtnPrev.innerHTML = "<h4><p>" + optionsDesc[k + 1].trim().split("").join("</p><p>").replace(/\s/g, "&nbsp;") + "</p></h4>";
			}
			else if (k == 0) {
				descriptionBtnPrev.style.color = colorsExtra[1];
				descriptionBtnPrev.innerHTML = "<h4><p>" + optionsDesc[1].trim().split("").join("</p><p>").replace(/\s/g, "&nbsp;") + "</p></h4>";
			}
			else {
				descriptionBtnPrev.style.color = colorsExtra[0];
				descriptionBtnPrev.innerHTML = "<h4><p>" + optionsDesc[0].trim().split("").join("</p><p>").replace(/\s/g, "&nbsp;") + "</p></h4>";
			}
			descriptionBtnPrev.classList.add("disappear");
			setTimeout(() => {
				descriptionBtnPrev.classList.remove("disappear");
			}, 0);

			descriptionBtnCurr.innerHTML = "<h2><p>" + optionsDesc[k].trim().split("").join("</p><p>").replace(/\s/g, "&nbsp;") + "</p></h2>";
			descriptionBtnCurr.classList.add("appear");
			setTimeout(() => {
				descriptionBtnCurr.classList.remove("appear");
			}, 0);
		}
		function nextSlideshow() {
			slideshowContainer.classList.add("next");
			//openBtn.classList.add("next");
			setTimeout(() => {
				slideshowContainer.classList.remove("next");
				//openBtn.classList.remove("next");
			}, timeChangeSlide);

			logoBtn.innerHTML = "<div><span>" + "Bratan".trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
			logoBtn.classList.remove("prev-div");
			logoBtn.classList.add("next-div");
			logoBtn.classList.add("next-span");
			setTimeout(() => {
				logoBtn.classList.remove("next-span");
			}, 0);

			languageBtn.innerHTML = "<div><span>" + "⚑ Lang".trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
			languageBtn.classList.remove("prev-div");
			languageBtn.classList.add("next-div");
			languageBtn.classList.add("next-span");
			setTimeout(() => {
				languageBtn.classList.remove("next-span");
			}, 0);

			menuBtn.innerHTML = "<div><span>" + "Menu ☰".trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
			menuBtn.classList.remove("prev-div");
			menuBtn.classList.add("next-div");
			menuBtn.classList.add("next-span");
			setTimeout(() => {
				menuBtn.classList.remove("next-span");
			}, 0);

			counterBtn.innerHTML = (k + 1) + " / 4";
		}

		if (k === 0) {
			k = colors.length;
		}
		k = k - 1;
		nextSlideshow();
		changeColors();
		prevDesc();
		hideOtherBoxes();
		prevBoxes();
		prevColors();
	}

	function nextAll() {
		function nextColors() {
			if (k == 0)
				document.documentElement.classList.remove("theme3");
			else
				document.documentElement.classList.remove("theme" + (k - 1));
			document.documentElement.classList.add("theme" + k);
		}
		function nextBoxes() {
			const boxLeft = document.querySelectorAll("[id^=box-left]");
			const boxRight = document.querySelectorAll("[id^=box-right]");

			if (k == 0) {
				boxLeft[3].style.visibility = ("visible");
				boxRight[3].style.visibility = ("visible");
				boxLeft[3].classList.add("disappear-up");
				boxRight[3].classList.add("disappear-up");
				setTimeout(() => {
					boxLeft[3].classList.remove("disappear-up");
					boxRight[3].classList.remove("disappear-up");
					boxLeft[3].style.visibility = ("hidden");
					boxLeft[k].style.visibility = ("visible");
					boxRight[3].style.visibility = ("hidden");
					boxRight[k].style.visibility = ("visible");
				}, timeChangeSlide / 2);
			}
			else {
				boxLeft[k - 1].style.visibility = ("visible");
				boxRight[k - 1].style.visibility = ("visible");
				boxLeft[k - 1].classList.add("disappear-up");
				boxRight[k - 1].classList.add("disappear-up");
				setTimeout(() => {
					boxLeft[k - 1].classList.remove("disappear-up");
					boxRight[k - 1].classList.remove("disappear-up");
					boxLeft[k - 1].style.visibility = ("hidden");
					boxLeft[k].style.visibility = ("visible");
					boxRight[k - 1].style.visibility = ("hidden");
					boxRight[k].style.visibility = ("visible");
				}, timeChangeSlide / 2);
			}

			boxLeft[k].classList.add("downtomid");
			boxRight[k].classList.add("downtomid");
			setTimeout(() => {
				boxLeft[k].classList.add("appear-updown");
				boxRight[k].classList.add("appear-updown");
			}, timeChangeSlide / 4);
			setTimeout(() => {
				boxLeft[k].classList.remove("downtomid");
				boxRight[k].classList.remove("downtomid");
				boxLeft[k].classList.remove("appear-updown");
				boxRight[k].classList.remove("appear-updown");
			}, timeChangeSlide / 2);
		}
		function nextDesc() {
			descriptionBtnNext.style.visibility = "visible";
			if ((k > 0) && (k < 4)) {
				descriptionBtnNext.style.color = colorsExtra[k - 1];
				descriptionBtnNext.innerHTML = "<h3><i>" + optionsDesc[k - 1].trim().split("").join("</i><i>").replace(/\s/g, "&nbsp;") + "</i></h3>";
			}
			else {
				descriptionBtnNext.style.color = colorsExtra[3];
				descriptionBtnNext.innerHTML = "<h3><i>" + optionsDesc[3].trim().split("").join("</i><i>").replace(/\s/g, "&nbsp;") + "</i></h3>";
			}
			descriptionBtnNext.classList.add("disappear");
			setTimeout(() => {
				descriptionBtnNext.classList.remove("disappear");
			}, 0);

			descriptionBtnCurr.innerHTML = "<h1><i>" + optionsDesc[k].trim().split("").join("</i><i>").replace(/\s/g, "&nbsp;") + "</i></h1>";
			descriptionBtnCurr.classList.add("appear");
			setTimeout(() => {
				descriptionBtnCurr.classList.remove("appear");
			}, 0);
		}
		function prevSlideshow() {
			slideshowContainer.classList.add("prev");
			//openBtn.classList.add("prev");
			setTimeout(() => {
				slideshowContainer.classList.remove("prev");
				//openBtn.classList.remove("prev");
			}, timeChangeSlide);

			logoBtn.innerHTML = "<div><span>" + "Bratan".trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
			logoBtn.classList.remove("next-div");
			logoBtn.classList.add("prev-div");
			logoBtn.classList.add("prev-span");
			setTimeout(() => {
				logoBtn.classList.remove("prev-span");
			}, 0);

			languageBtn.innerHTML = "<div><span>" + "⚑ Lang".trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
			languageBtn.classList.remove("next-div");
			languageBtn.classList.add("prev-div");
			languageBtn.classList.add("prev-span");
			setTimeout(() => {
				languageBtn.classList.remove("prev-span");
			}, 0);

			menuBtn.innerHTML = "<div><span>" + "Menu ☰".trim().split("").join("</span><span>").replace(/\s/g, "&nbsp;") + "</span></div>";
			menuBtn.classList.remove("next-div");
			menuBtn.classList.add("prev-div");
			menuBtn.classList.add("prev-span");
			setTimeout(() => {
				menuBtn.classList.remove("prev-span");
			}, 0);

			counterBtn.innerHTML = (k + 1) + " / 4";
		}

		k = k + 1;
		k = k % colors.length;
		prevSlideshow();
		changeColors();
		nextDesc();
		hideOtherBoxes();
		nextBoxes();
		nextColors();
	}

	chaptersContainer.appendChild(cloneFirst);
	chaptersContainer.insertBefore(cloneLast, firstChapter);
	slideshowContainer.classList.add("loaded");
	chaptersContainer.onmousedown = dragStart;
	chaptersContainer.addEventListener("touchstart", dragStart);
	chaptersContainer.addEventListener("touchend", dragEnd);
	chaptersContainer.addEventListener("touchmove", dragAction);

	changeColors();
	hideOtherBoxes();
	openBtn.href = optionsLinks[k];
	descriptionBtnContainer.href = optionsLinks[k];
	const boxLeft = document.querySelectorAll("[id^=box-left]");
	boxLeft[k].style.visibility = ("visible");
	const boxRight = document.querySelectorAll("[id^=box-right]");
	boxRight[k].style.visibility = ("visible");

	arrowBtnPrev.addEventListener("click", function() {
		shiftSlide(-1, "");
		prevAll();
		openBtn.href = optionsLinks[k];
		descriptionBtnContainer.href = optionsLinks[k];
	});

	arrowBtnNext.addEventListener("click", function() {
		shiftSlide(1, "");
		nextAll();
		openBtn.href = optionsLinks[k];
		descriptionBtnContainer.href = optionsLinks[k];
	});

	chaptersContainer.addEventListener("transitionend", checkIndex);

	function dragStart(e) {
		e = e || window.event;
		e.preventDefault();
		chapterPosInitial = chaptersContainer.offsetLeft;
		if (e.type == "touchstart") {
			chapterPosX1 = e.touches[0].clientX;
		} else {
			chapterPosX1 = e.clientX;
			document.onmouseup = dragEnd;
			document.onmousemove = dragAction;
		}
	}

	function dragAction(e) {
		e = e || window.event;
		if (e.type == "touchmove") {
			chapterPosX2 = chapterPosX1 - e.touches[0].clientX;
			chapterPosX1 = e.touches[0].clientX;
		} else {
			chapterPosX2 = chapterPosX1 - e.clientX;
			chapterPosX1 = e.clientX;
		}
		chaptersContainer.style.left = chaptersContainer.offsetLeft - chapterPosX2 + "px";
	}

	function dragEnd() {
		chapterPosFinal = chaptersContainer.offsetLeft;
		if (chapterPosFinal - chapterPosInitial < -chapterDragThreshold) {
			shiftSlide(1, "drag");
			nextAll();
			openBtn.href = optionsLinks[k];
			descriptionBtnContainer.href = optionsLinks[k];
		}
		else if (chapterPosFinal - chapterPosInitial > chapterDragThreshold) {
			shiftSlide(-1, "drag");
			prevAll();
			openBtn.href = optionsLinks[k];
			descriptionBtnContainer.href = optionsLinks[k];
		}
		else {
			chaptersContainer.style.left = chapterPosInitial + "px";
		}
		document.onmouseup = null;
		document.onmousemove = null;
	}

	function shiftSlide(shiftDirection, shiftAction) {
		chaptersContainer.classList.add("shifting");
		if (allowShift) {
			if (!shiftAction) {
				chapterPosInitial = chaptersContainer.offsetLeft;
			}
			if (shiftDirection == 1) {
				chaptersContainer.style.left = chapterPosInitial - chapterSize + "px";
				chapterIndex++;
			} else if (shiftDirection == -1) {
				chaptersContainer.style.left = chapterPosInitial + chapterSize + "px";
				chapterIndex--;
			}
		}
		allowShift = false;
	}

	function checkIndex() {
		chaptersContainer.classList.remove("shifting");
		if (chapterIndex == -1) {
			chaptersContainer.style.left = -(chaptersLength * chapterSize) + "px";
			chapterIndex = chaptersLength - 1;
		}
		if (chapterIndex == chaptersLength) {
			chaptersContainer.style.left = -(1 * chapterSize) + "px";
			chapterIndex = 0;
		}
		allowShift = true;
	}
}
moveSlider(slideshowContainer, chaptersContainer, arrowBtnPrev, arrowBtnNext);

document.addEventListener("wheel", function(e) {
	e.preventDefault();
}, { passive: false });

// SECTION --------------PARALLAX--------------

let boxPosX = 0;
let boxPosY = 0;
let boxLastPosX = 0;
let boxLastPosY = 0;
let titlePosX = 0;
let titlePosY = 0;
let titleLastPosX = 0;
let titleLastPosY = 0;
let bgTextPosX = 0;
let bgTextPosY = 0;
let bgTextLastPosX = 0;
let bgTextLastPosY = 0;
const allRotSpeed = 0.1;

menuPage.addEventListener("mousemove", function(e) {
	bgTextPosX = -(window.innerWidth / 2 - e.pageX) / 3000;
	bgTextPosY = (window.innerHeight / 2 - e.pageY) / 3000;
});

menuPage.addEventListener("mouseleave", function() {
	bgTextPosX = 0;
	bgTextPosY = 0;
});

languagePage.addEventListener("mousemove", function(e) {
	bgTextPosX = -(window.innerWidth / 2 - e.pageX) / 3000;
	bgTextPosY = (window.innerHeight / 2 - e.pageY) / 3000;
});

languagePage.addEventListener("mouseleave", function() {
	bgTextPosX = 0;
	bgTextPosY = 0;
});

chaptersContainer.addEventListener("mousemove", function(e) {
	titlePosX = -(window.innerWidth / 2 - e.pageX) / 3000;
	titlePosY = (window.innerHeight / 2 - e.pageY) / 3000;
	boxPosX = -(window.innerWidth / 2 - e.pageX) / 3000;
	boxPosY = (window.innerHeight / 2 - e.pageY) / 3000;
});

chaptersContainer.addEventListener("mouseleave", function() {
	titlePosX = 0;
	titlePosY = 0;
	boxPosX = 0;
	boxPosY = 0;
});

function moveAndRotateElements() {
	const boxLeft = document.querySelectorAll("[id^=box-left]");
	const boxRight = document.querySelectorAll("[id^=box-right]");

	boxLastPosX = boxLastPosX + (boxPosX * -20 - boxLastPosX) * allRotSpeed;
	boxLastPosY = boxLastPosY + (boxPosY * -20 - boxLastPosY) * allRotSpeed;
	titleLastPosX = titleLastPosX + (titlePosX * -20 - titleLastPosX) * allRotSpeed;
	titleLastPosY = titleLastPosY + (titlePosY * -20 - titleLastPosY) * allRotSpeed;
	bgTextLastPosX = bgTextLastPosX + (bgTextPosX * -20 - bgTextLastPosX) * allRotSpeed;
	bgTextLastPosY = bgTextLastPosY + (bgTextPosY * -20 - bgTextLastPosY) * allRotSpeed;

	// FIX: pe undeva pe aici trebuie sa fie un 32 in loc de 30, ca cica asa am calculat eu in Illustrator
	boxLeft[k].style.transform = `
	translateX(-25vw) translateY(0vw) translateZ(0vw) 
	rotateX(${-boxLastPosY + 30}deg) rotateY(${-boxLastPosX + 30}deg) rotateZ(-29deg) 
	scale3d(1, 1, 1)
	`;
	boxRight[k].style.transform = `
	translateX(25vw) translateY(0vw) translateZ(0vw) 
	rotateX(${-boxLastPosY + 30}deg) rotateY(${-boxLastPosX - 30}deg) rotateZ(29deg) 
	scale3d(1, 1, 1)
	`;
	title[k].style.transform = `translateX(${-titleLastPosX / 10 + 0}vw) translateY(${titleLastPosY / 10 + 0}vw)`;
	bgTextContainer.style.transform = `translateX(${bgTextLastPosX / 5}vw) translateY(${-bgTextLastPosY / 5}vw)`;
	//boxRight[k].style.transform = `translateX(25vw) translateY(0vw) translateZ(0vw) rotateX(${-boxLastPosY + 30}deg) rotateY(${-boxLastPosX - 30}deg) rotateZ(29.36deg) scale3d(0.8, 0.8, 0.8)`;
	//boxLeft[k].style.transform = `translateX(-25vw) translateY(0vw) translateZ(0vw) rotateX(${-boxLastPosY + 30}deg) rotateY(${-boxLastPosX + 30}deg) rotateZ(-29.36deg) scale3d(0.8, 0.8, 0.8)`;
}
setInterval(moveAndRotateElements, 30);

// SECTION --------------ROUTING--------------

function detectPathName() {
	if (window.location.pathname == "/developer")
		j = 0;
	else if (window.location.pathname == "/projects")
		j = 1;
	else if (window.location.pathname == "/about")
		j = 2;
	else if (window.location.pathname == "/contact")
		j = 3;
}

function detectHistory() {
	if (historyArray[0] == "/developer")
		j = 0;
	else if (historyArray[0] == "/projects")
		j = 1;
	else if (historyArray[0] == "/about")
		j = 2;
	else if (historyArray[0] == "/contact")
		j = 3;
}

function detectRoute() {
	let route = routes.find(route => route.path == window.location.pathname);
	if (route.path == "/developer")
		j = 0;
	else if (route.path == "/projects")
		j = 1;
	else if (route.path == "/about")
		j = 2;
	else if (route.path == "/contact")
		j = 3;
}

function hideLanguagePage() {
	Array.from(languageLink).forEach(languageLink => {
		languageLink.classList.remove("appear");
	});
	Array.from(bgText).forEach(bgText => {
		bgText.classList.remove("appear");
	});
	setTimeout(() => {
		languagePage.classList.remove("appear");
		bgTextContainer.classList.remove("appear");
	}, timeToggleSlice / 2);
}

function hideMenuPage() {
	Array.from(menuLink).forEach(menuLink => {
		menuLink.classList.remove("appear");
	});
	Array.from(bgText).forEach(bgText => {
		bgText.classList.remove("appear");
	});
	setTimeout(() => {
		menuPage.classList.remove("appear");
		bgTextContainer.classList.remove("appear");
	}, timeToggleSlice / 2);
}

function setColorsK() {
	Array.from(slice).forEach(slice => {
		slice.style.backgroundColor = colorsDark50[k];
	});
	contentContainer.style.backgroundColor = colorsDark50[k];
	contentContainer.style.color = colorsExtra[k];
	logoBtn.style.color = colorsExtra[k];
	languageBtn.style.color = colorsExtra[k];
	descriptionBtnCurr.style.color = colorsExtra[k];
	menuBtn.style.color = colorsExtra[k];
	cursor.style.backgroundColor = colorsExtra[k];
	cursor.style.borderColor = colorsExtra[k];
	Array.from(bgText).forEach(bgText => {
		bgText.style.color = colorsExtra[k];
	});
	Array.from(menuLink).forEach(menuLink => {
		menuLink.style.color = colorsExtra[k];
	});
}

function setColorsJ() {
	Array.from(slice).forEach(slice => {
		slice.style.backgroundColor = colorsDark50[j];
	});
	contentContainer.style.backgroundColor = colorsDark50[j];
	contentContainer.style.color = colorsExtra[j];
	logoBtn.style.color = colorsExtra[j];
	languageBtn.style.color = colorsExtra[j];
	descriptionBtnCurr.style.color = colorsExtra[j];
	menuBtn.style.color = colorsExtra[j];
	cursor.style.backgroundColor = colorsExtra[j];
	cursor.style.borderColor = colorsExtra[j];
	Array.from(bgText).forEach(bgText => {
		bgText.style.color = colorsExtra[j];
	});
	Array.from(menuLink).forEach(menuLink => {
		menuLink.style.color = colorsExtra[j];
	});
}

function addAltTrans() {
	logoBtn.classList.add("alt");
	languageBtn.classList.add("alt");
	menuBtn.classList.add("alt");
	descriptionBtnCurr.classList.add("alt");
}

function removeAltTrans() {
	logoBtn.classList.remove("alt");
	languageBtn.classList.remove("alt");
	menuBtn.classList.remove("alt");
	descriptionBtnCurr.classList.remove("alt");
}

var openChapterIsRunning = false;
var goBackHomeIsRunning = false;
var openNavIsRunning = false;
var switchChapterIsRunning = false;
var switchChapterAfterNavIsRunning = false;

var contentTitle;
// contentTitle.parentNode.removeChild(contentTitle);

function insideOpenChapter() {
	setColorsJ();
	addMiddleSlice();
	slicesContainer.classList.add("appear");
	setTimeout(() => {
		routingPage.classList.add("appear");
		contentContainer.classList.add("appear");
		contentTitle.classList.add("appear");
		openChapterIsRunning = false;
	}, timeToggleSlice);
}
function openChapter() {
	if (!openChapterIsRunning) {
		openChapterIsRunning = true;
		if (!goBackHomeIsRunning) {
			insideOpenChapter();
		}
		else {
			setTimeout(() => {
				setTimeout(() => {
					insideOpenChapter();
				}, timeTogglePage);
			}, timeToggleSlice);
		}
	}
}

function insideGoBackHome() {
	let route = routes.find(route => route.path == window.location.pathname);
	contentTitle.classList.remove("appear");
	contentContainer.classList.remove("appear");
	setTimeout(() => {
		contentTitle.parentNode.removeChild(contentTitle);
		route.data.generateContent();
		slicesContainer.classList.remove("appear");
		routingPage.classList.remove("appear");
		logoBtn.style.color = colorsExtra[k];
		languageBtn.style.color = colorsExtra[k];
		descriptionBtnCurr.style.color = colorsExtra[k];
		menuBtn.style.color = colorsExtra[k];
		setTimeout(() => {
			setColorsK();
			removeMiddleSlice();
			removeAltTrans();
			Array.from(slice).forEach(slice => {
				slice.style.backgroundColor = colorsDark50[k];
			});
			goBackHomeIsRunning = false;
		}, timeToggleSlice);
	}, timeTogglePage);
}
function goBackHome() {
	if (!goBackHomeIsRunning) {
		goBackHomeIsRunning = true;
		if (!openChapterIsRunning) {
			insideGoBackHome();
		}
		else {
			setTimeout(() => {
				insideGoBackHome();
			}, timeToggleSlice);
		}
	}
}

function openChapterAfterNav() {
	if (!slice[0].classList.contains("middle")) {
		setTimeout(() => {
			addAltTrans();
			setColorsJ();
		}, timeToggleSlice / 2 + timeTogglePage);
		setTimeout(() => {
			addMiddleSlice();
		}, timeToggleSlice);
		setTimeout(() => {
			routingPage.classList.add("appear");
		}, timeToggleSlice * 2);
		setTimeout(() => {
			contentContainer.classList.add("appear");
			/* addAltTrans();
			setColorsJ(); */
		}, timeToggleSlice * 2 + timeTogglePage);
	}
	else {
		addAltTrans();
		setColorsJ();
		contentContainer.classList.remove("appear");
		detectRoute();
		setTimeout(() => {
			contentContainer.classList.add("appear");
		}, timeTogglePage * 3);
	}
} // FIX: add functionality for opening a new chapter after one has already been opened + function checks

function goBackHomeAfterNav() {
	setTimeout(() => {
		setColorsK();
	}, timeTogglePage);
} // FIX: incomplete

function switchChapter() {
	let route = routes.find(route => route.path == window.location.pathname);
	if (!switchChapterIsRunning) {
		switchChapterIsRunning = true;
		contentTitle.classList.remove("appear");
		setTimeout(() => {
			detectRoute();
			setColorsJ();
			contentTitle.parentNode.removeChild(contentTitle);
			route.data.generateContent();
		}, timeTogglePage);
		setTimeout(() => {
			contentTitle.classList.add("appear");
			switchChapterIsRunning = false;
		}, timeTogglePage * 2);
	}
	else {
		console.log("add logic here");
	}
} // FIX: incomplete logic + animation timing

function switchChapterAfterNav() {
	if (!switchChapterAfterNavIsRunning) {
		switchChapterAfterNavIsRunning = true;
		detectPathName();
		contentContainer.classList.remove("appear");
		setTimeout(() => {
			setColorsJ();
			contentContainer.classList.add("appear");
			switchChapterAfterNavIsRunning = false;
		}, timeToggleSlice);
	}
} // FIX: incomplete

function router(event) {
	event.preventDefault();
	history.pushState({}, "newUrl", event.target.href);
	let route = routes.find(route => route.path == window.location.pathname);
	contentTitle.parentNode.removeChild(contentTitle); // CHECK: add in openChapter
	route.data.generateContent(); // CHECK: add in openChapter
	historyArray[0] = route.path;
	detectRoute();
	if (slice[0].classList.contains("right")) {
		hideMenuPage();
		openChapterAfterNav();
	}
	else if (!slice[0].classList.contains("left") && !slice[0].classList.contains("right") && !slice[0].classList.contains("middle")) {
		setColorsK();
		openChapter();
		removeAltTrans();
	}
}

window.addEventListener("popstate", function() {
	let route = routes.find(route => route.path == window.location.pathname);
	if (!slicesContainer.classList.contains("appear")) {
		contentTitle.parentNode.removeChild(contentTitle); // CHECK: add in openChapter
		route.data.generateContent(); // CHECK: add in openChapter
		detectPathName();
		if (k == j)
			setColorsK();
		else if (k != j)
			setColorsJ();
		openChapter();
	}
	else {
		detectPathName();
		if (slice[0].classList.contains("left")) {
			hideLanguagePage();
			addMiddleSlice();
			if (route.path == "/") {
				setTimeout(() => {
					setColorsK();
				}, timeTogglePage);
				goBackHomeAfterNav();
			}
			else
				switchChapterAfterNav();
		}
		else if (slice[0].classList.contains("right")) {
			// hideMenuPage(); // DO: nu mai dau hide la meniu, ci doar pun o clasa de "active" si schimb instant chapterul; daca userul vrea sa vada chapterul schimbat, va trebui el sa inchida meniul
			addMiddleSlice();
			if (route.path == "/")
				goBackHomeAfterNav();
			else
				switchChapterAfterNav();
		} // FIX: add functionisrunning checks
		else if (slice[0].classList.contains("middle")) {
			if (route.path == "/")
				goBackHome();
			else
				switchChapter();
		}
	}
});

window.addEventListener("DOMContentLoaded", function() {
	openBtn.href = optionsLinks[k];
	let route = routes.find(route => route.path == window.location.pathname);
	route.data.generateContent();
	detectPathName();
	if (!slicesContainer.classList.contains("appear") && window.location.pathname != "/") {
		slicesContainer.setAttribute("class", "slices-container appear");
		routingPage.classList.add("appear");
		contentContainer.classList.add("appear");
		contentTitle.classList.add("appear");
		addMiddleSlice();
		if (k == j) {
			setColorsK();
			routingPage.style.backgroundColor = colorsDark50[j];
		}
		else if (k != j) {
			setColorsJ();
			routingPage.style.backgroundColor = "transparent";
		}
	}
}); // FIX: when route is different than /developer, the loading transitions are visible instead of instant

// SECTION --------------CLICKING--------------

menuBtnContainer.addEventListener("click", function() {
	disablePointerEvents();
	if (slice[0].classList.contains("left")) {
		addLeftSlice();
		toggleLanguageContent();
		setTimeout(() => {
			addRightSlice();
			toggleMenuContent();
		}, timeToggleSlice / 2);
	}
	else {
		if (window.location.pathname != "/") {
			if (slice[0].classList.contains("middle")) {
				Array.from(slice).forEach(slice => {
					slice.classList.remove("middle");
					slice.classList.add("right");
				});
			}
			else {
				Array.from(slice).forEach(slice => {
					slice.classList.remove("right");
					slice.classList.add("middle");
				});
			}
		}
		else {
			addRightSlice();
			toggleSlices();
		}
		toggleMenuContent();
	}
}); // FIX: cand sunt pe un path diferit de "/" si dau switch intre left si right, culorile nu se schimba cu setColorsJ

languageBtnContainer.addEventListener("click", function() {
	disablePointerEvents();
	if (slice[0].classList.contains("right")) {
		addRightSlice();
		toggleMenuContent();
		setTimeout(() => {
			addLeftSlice();
			toggleLanguageContent();
		}, timeToggleSlice / 2);
	}
	else {
		if (window.location.pathname != "/") {
			if (slice[0].classList.contains("middle")) {
				Array.from(slice).forEach(slice => {
					slice.classList.remove("middle");
					slice.classList.add("left");
				});
			}
			else {
				Array.from(slice).forEach(slice => {
					slice.classList.remove("left");
					slice.classList.add("middle");
				});
			}
		}
		else {
			addLeftSlice();
			toggleSlices();
		}
		toggleLanguageContent();
	}
}); // FIX: cand sunt pe un path diferit de "/" si dau switch intre left si right, culorile nu se schimba cu setColorsJ

function changeColorsAlt1() {
	Array.from(slice).forEach(slice => {
		slice.style.backgroundColor = colorsDark50[k];
	});
	contentContainer.style.backgroundColor = colorsDark50[k];
	contentContainer.style.color = colorsExtra[k];
}

function changeColorsAlt2() {
	Array.from(slice).forEach(slice => {
		slice.style.backgroundColor = colorsDark50[j];
	});
	if (k == j)
		routingPage.style.backgroundColor = colorsDark50[j];
	else {
		routingPage.style.backgroundColor = "transparent";
	}
	contentContainer.style.backgroundColor = colorsDark50[j];
	contentContainer.style.color = colorsExtra[j];
	logoBtn.style.color = colorsExtra[j];
	languageBtn.style.color = colorsExtra[j];
	descriptionBtnCurr.style.color = colorsExtra[j];
	menuBtn.style.color = colorsExtra[j];
	logoBtn.classList.add("alt");
	languageBtn.classList.add("alt");
	menuBtn.classList.add("alt");
	descriptionBtnCurr.classList.add("alt");
}

function disablePointerEvents() {
	languageBtnContainer.style.pointerEvents = "none";
	setTimeout(() => {
		languageBtnContainer.style.pointerEvents = "auto";
	}, timeToggleSlice);

	menuBtnContainer.style.pointerEvents = "none";
	setTimeout(() => {
		menuBtnContainer.style.pointerEvents = "auto";
	}, timeToggleSlice);

	openBtn.style.pointerEvents = "none";
	setTimeout(() => {
		openBtn.style.pointerEvents = "auto";
	}, timeToggleSlice);
}

function addRightSlice() {
	Array.from(slice).forEach(slice => {
		slice.style.backgroundColor = colorsDark50[k];
		if (!slice.classList.contains("right"))
			slice.classList.add("right");
		else {
			setTimeout(() => {
				slice.classList.remove("right");
			}, timeToggleSlice);
		}
		slice.classList.remove("left");
		slice.classList.remove("middle");
	});
}

function addLeftSlice() {
	Array.from(slice).forEach(slice => {
		slice.style.backgroundColor = colorsDark50[k];
		if (!slice.classList.contains("left"))
			slice.classList.add("left");
		else {
			setTimeout(() => {
				slice.classList.remove("left");
			}, timeToggleSlice);
		}
		slice.classList.remove("right");
		slice.classList.remove("middle");
	});
}

function addMiddleSlice() {
	Array.from(slice).forEach(slice => {
		slice.classList.add("middle");
		slice.classList.remove("right");
		slice.classList.remove("left");
	});
}

function forceMiddleSlice() {
	Array.from(slice).forEach(slice => {
		slice.setAttribute("class", "slice middle");
	});
}

function removeMiddleSlice() {
	Array.from(slice).forEach(slice => {
		slice.classList.remove("middle");
		slice.classList.remove("right");
		slice.classList.remove("left");
	});
}

function toggleSlices() {
	if (!slicesContainer.classList.contains("appear"))
		slicesContainer.classList.add("appear");
	else {
		setTimeout(() => {
			slicesContainer.classList.remove("appear");
		}, timeWaitForBgText);
	}
}

function toggleSlicesAlt() {
	if (!slicesContainer.classList.contains("appear"))
		slicesContainer.setAttribute("class", "slices-container appear");
	else {
		setTimeout(() => {
			slicesContainer.classList.remove("appear");
		}, timeWaitForBgText);
	}
}

function toggleMenuContent() {
	Array.from(bgText).forEach(bgText => {
		bgText.textContent = optionsBgText[5];
		if (k == j)
			bgText.style.color = colorsExtra[k];
		else if (k != j)
			bgText.style.color = colorsExtra[j];
	});
	Array.from(menuLink).forEach(menuLink => {
		if (k == j)
			menuLink.style.color = colorsExtra[k];
		else if (k != j)
			menuLink.style.color = colorsExtra[j];
		if (!menuLink.classList.contains("appear")) {
			setTimeout(() => {
				menuLink.classList.add("appear");
				Array.from(bgText).forEach(bgText => {
					bgText.classList.add("appear");
				});
			}, timeToggleSlice / 2);
		}
		else {
			menuLink.classList.remove("appear");
			Array.from(bgText).forEach(bgText => {
				bgText.classList.remove("appear");
			});
		}
	});

	if (!menuPage.classList.contains("appear")) {
		setTimeout(() => {
			menuPage.classList.add("appear");
		}, timeToggleSlice / 2);
		setTimeout(() => {
			bgTextContainer.classList.add("appear");
		}, timeToggleSlice / 2 + timeWaitForBgText);
	}
	else {
		setTimeout(() => {
			menuPage.classList.remove("appear");
		}, timeToggleSlice / 2);
		setTimeout(() => {
			bgTextContainer.classList.remove("appear");
		}, timeToggleSlice / 2 + timeWaitForBgText);
	}
} // FIX: add modifications

function toggleLanguageContent() {
	Array.from(bgText).forEach(bgText => {
		bgText.textContent = optionsBgText[5];
	});
	Array.from(languageLink).forEach(languageLink => {
		languageLink.style.color = colorsExtra[k];
		if (!languageLink.classList.contains("appear")) {
			setTimeout(() => {
				languageLink.classList.add("appear");
				Array.from(bgText).forEach(bgText => {
					bgText.classList.add("appear");
				});
			}, timeToggleSlice / 2);
		}
		else {
			languageLink.classList.remove("appear");
			Array.from(bgText).forEach(bgText => {
				bgText.classList.remove("appear");
			});
		}
	});

	if (!languagePage.classList.contains("appear")) {
		setTimeout(() => {
			languagePage.classList.add("appear");
		}, timeToggleSlice / 2);
		setTimeout(() => {
			bgTextContainer.classList.add("appear");
		}, timeToggleSlice / 2 + timeWaitForBgText);
	}
	else {
		setTimeout(() => {
			languagePage.classList.remove("appear");
		}, timeToggleSlice / 2);
		setTimeout(() => {
			bgTextContainer.classList.remove("appear");
		}, timeToggleSlice / 2 + timeWaitForBgText);
	}
} // FIX: add modifications

function toggleChapterContent() {
	if (!routingPage.classList.contains("appear")) {
		routingPage.classList.add("appear");
		setTimeout(() => {
			contentContainer.classList.add("appear");
		}, timeToggleSlice + timeTogglePage);
	}
	else {
		routingPage.classList.remove("appear");
		contentContainer.classList.remove("appear");
	}
}

// SECTION --------------CURSOR--------------

const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const cursorSpeed = 0.2;

document.addEventListener("mousedown", function() {
	if (cursor.classList.contains("hover")) {
		cursor.style.width = "3.5rem";
		cursor.style.height = "3.5rem";
	}
	else {
		cursor.style.width = "1.2rem";
		cursor.style.height = "1.2rem";
	}
});

document.addEventListener("mouseup", function() {
	if (cursor.classList.contains("hover")) {
		cursor.style.width = "4rem";
		cursor.style.height = "4rem";
	}
	else {
		cursor.style.width = "1.5rem";
		cursor.style.height = "1.5rem";
	}
});

document.addEventListener("mousemove", function(e) {
	mousePos.x = e.clientX;
	mousePos.y = e.clientY;
	cursorContainer.style.opacity = 1;
});

document.addEventListener("mouseenter", function() {
	cursorContainer.style.opacity = 1;
});

document.addEventListener("mouseleave", function() {
	cursorContainer.style.opacity = 0;
});

function calcCursorAngle(diffPosX, diffPosY) {
	return (Math.atan2(diffPosY, diffPosX) * 180) / Math.PI;
}

function calcCursorSqueeze(diffPosX, diffPosY) {
	const slideDist = Math.sqrt(Math.pow(diffPosX, 2) + Math.pow(diffPosY, 2));
	const slideAccel = 1500;
	const maxSqueeze = 0.15;
	return Math.min(slideDist / slideAccel, maxSqueeze);
}

const animateCursor = () => {
	const diffPosX = Math.round(mousePos.x - cursorPos.x);
	const diffPosY = Math.round(mousePos.y - cursorPos.y);
	cursorPos.x += diffPosX * cursorSpeed;
	cursorPos.y += diffPosY * cursorSpeed;
	const angle = calcCursorAngle(diffPosX, diffPosY);
	const squeeze = calcCursorSqueeze(diffPosX, diffPosY);
	cursorContainer.style.transform = `translate3d(calc(${cursorPos.x}px - 50%), calc(${cursorPos.y}px - 50%), 0)`;
	cursor.style.transform = `rotate(${angle}deg) scale(calc(1 + ${squeeze}), calc(1 - ${squeeze}))`;
};

[logoBtnContainer, descriptionBtnContainer, languageBtnContainer, menuBtnContainer, openBtn, arrowBtnNext, arrowBtnPrev].forEach(item => {
	item.addEventListener("mouseover", function() {
		cursor.classList.add("hover");
		cursor.style.width = "4rem";
		cursor.style.height = "4rem";
	});
});

[logoBtnContainer, descriptionBtnContainer, languageBtnContainer, menuBtnContainer, openBtn, arrowBtnNext, arrowBtnPrev].forEach(item => {
	item.addEventListener("mouseleave", function() {
		cursor.classList.remove("hover");
		cursor.style.width = "1.5rem";
		cursor.style.height = "1.5rem";
	});
});

function loopCursorMovement() {
	animateCursor();
	requestAnimationFrame(loopCursorMovement);
}
requestAnimationFrame(loopCursorMovement);

// SECTION --------------CODE GRAVEYARD - TURN BACK!!!--------------

// contentContainer.innerHTML = route.data;
// routingPage.appendChild(contentContainer);

/* setTimeout(() => {
	// route.data.generateContent();
}, timeToggleSlice + timeTogglePage);
disablePointerEvents();
addMiddleSlice();
toggleSlices();
toggleChapterContent();
if (window.location.pathname === openBtn.pathname)
	changeColorsAlt1();
else if (window.location.pathname === history[0])
	changeColorsAlt2();
else if (window.location.pathname == "") {
	logoBtn.style.color = colorsExtra[k];
	languageBtn.style.color = colorsExtra[k];
	descriptionBtnCurr.style.color = colorsExtra[k];
	menuBtn.style.color = colorsExtra[k];
	setTimeout(() => {
		logoBtn.classList.remove("alt");
		languageBtn.classList.remove("alt");
		menuBtn.classList.remove("alt");
		descriptionBtnCurr.classList.remove("alt");
	}, timeToggleSlice + timeTogglePage);
} */

/* setTimeout(() => {
	// route.data.generateContent();
}, timeToggleSlice + timeTogglePage);
if (!slicesContainer.classList.contains("appear")) {
	toggleSlices();
	addMiddleSlice();
	changeColorsAlt2();
	setTimeout(() => {
		contentContainer.innerHTML = data.data;
		toggleChapterContent();
		disablePointerEvents();
		detectPathName();
		detectHistory();
	}, timeToggleSlice + timeTogglePage);
}
else {
	contentContainer.innerHTML = data.data;
	disablePointerEvents();
	addMiddleSlice();
	toggleSlices();
	toggleChapterContent();
	detectPathName();
	detectHistory();
	logoBtn.style.color = colorsExtra[k];
	languageBtn.style.color = colorsExtra[k];
	descriptionBtnCurr.style.color = colorsExtra[k];
	menuBtn.style.color = colorsExtra[k];
	setTimeout(() => {
		logoBtn.classList.remove("alt");
		languageBtn.classList.remove("alt");
		menuBtn.classList.remove("alt");
		descriptionBtnCurr.classList.remove("alt");
	}, timeToggleSlice + timeTogglePage);
} */

/* window.addEventListener("locationchange", function() {
	disablePointerEvents();
	addMiddleSlice();
	toggleSlices();
	toggleChapterContent();
	if (window.location.pathname === openBtn.pathname)
		changeColorsAlt1();
	else if (window.location.pathname === history[0])
		changeColorsAlt2();
	else if (window.location.pathname == "") {
		logoBtn.style.color = colorsExtra[k];
		languageBtn.style.color = colorsExtra[k];
		descriptionBtnCurr.style.color = colorsExtra[k];
		menuBtn.style.color = colorsExtra[k];
		setTimeout(() => {
			logoBtn.classList.remove("alt");
			languageBtn.classList.remove("alt");
			menuBtn.classList.remove("alt");
			descriptionBtnCurr.classList.remove("alt");
		}, timeToggleSlice + timeTogglePage);
	}
}); */