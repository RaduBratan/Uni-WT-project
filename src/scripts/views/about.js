/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
/* const about = `
  <h1>About</h1>
`; */

const about = {
	generateContent: () => {
		contentTitle = document.createElement("h1");
		contentTitle.className = "content-title";
		contentTitle.innerHTML = "About";
		contentContainer.appendChild(contentTitle);
		return contentTitle;
	}
};