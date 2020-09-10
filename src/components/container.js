class PageContainer extends HTMLElement {
    connectedCallback() {
        this.page = this.getAttribute("page") || "Page";

        this.innerHTML = `<div id="container">
        <div id="title">
            <h1>${this.page}</h1>
        </div>
        <div id="movies-container"></div>
    </div>`;
    }
}

customElements.define("page-container", PageContainer);
