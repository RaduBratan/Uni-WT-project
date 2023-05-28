/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
/* const contact = `
  <h1>Contact</h1>
`; */

const contact = {
	generateContent: () => {
		contentTitle = document.createElement("h1");
		contentTitle.className = "content-title";
		contentTitle.innerHTML = "Contact";
		contentContainer.appendChild(contentTitle);
		return contentTitle;
	}
};