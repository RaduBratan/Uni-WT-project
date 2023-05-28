/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
/* const projects = `
  <h1>Projects</h1>
`; */

const projects = {
	generateContent: () => {
		contentTitle = document.createElement("h1");
		contentTitle.className = "content-title";
		contentTitle.innerHTML = "Projects";
		contentContainer.appendChild(contentTitle);
		return contentTitle;
	}
};