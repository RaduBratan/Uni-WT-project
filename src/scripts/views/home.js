/* eslint-disable no-undef */

const home = {
	generateContent: () => {
		contentTitle = document.createElement("h1");
		contentTitle.className = "content-title";
		contentTitle.innerHTML = "";
		contentContainer.appendChild(contentTitle);
		return contentTitle;
	}
};