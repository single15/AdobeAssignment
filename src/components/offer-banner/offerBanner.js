const offerBannerTemplate = document.createElement('template');



offerBannerTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/offer-banner/offerBanner.css">
    <div class="offer-banner-container">
        <div class="offer-banner">Free Standard Shipping on orders over $99.99</div>
    </div>
`;



class OfferBanner extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(offerBannerTemplate.content);
    } 
}


export default OfferBanner;