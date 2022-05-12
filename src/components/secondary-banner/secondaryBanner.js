const secondaryBannerTemplate = document.createElement('template');



secondaryBannerTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/secondary-banner/secondaryBanner.css">
    <div class="secondary-banner-container">
        <div class="headline-4-28pt"> Solutions for all skin health</div>
        <div class="body-2-14pt"> Explore our innovative skincare products</div>
    </div>
`;



class SecondaryBanner extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(secondaryBannerTemplate.content);
    } 
}


export default SecondaryBanner;