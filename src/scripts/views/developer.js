/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
/* const developer = `
  <h1>Developer</h1>
`; */

const developer = {
	generateContent: () => {
		contentTitle = document.createElement("h1");
		contentTitle.className = "content-title";
		contentTitle.innerHTML = "Developer";
		contentContainer.appendChild(contentTitle);
		return contentTitle;
	}
};