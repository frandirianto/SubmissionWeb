class CardMovie extends HTMLElement {
    connectedCallback() {
        this.id = this.getAttribute("id");
        this.title = this.getAttribute("title") || "Title";
        this.overview = this.getAttribute("overview") || "Overview";
        this.pic = this.getAttribute("pic") || "";
        this.rating = this.getAttribute("rating") || "";

        this.innerHTML = `<div class="card">
            <div class="card-image">
                <img src="${this.pic}" alt="${this.title}Image"/>
            </div>
            <div class="card-info">
                <div class="card-title">
                    <h3>${this.title}</h3> 
                </div>
                <div class="card-rating">
                    <p>Rating: ${this.rating}</p> 
                </div>     
                <div class="card-desc">
                    <p>${this.overview}</p>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("card-movie", CardMovie);
