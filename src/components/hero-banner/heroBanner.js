const heroBannerTemplate = document.createElement('template');



heroBannerTemplate.innerHTML = `
    <link rel="stylesheet" href="../css/aem-grid-12.css"/>
    <link rel="stylesheet" href="../src/css/style.css">
    <link rel="stylesheet" href="./components/hero-banner/heroBanner.css">
    <article class="hero-banner-container">
        <div class="aem-Grid aem-Grid--12">
            <section class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 hero-banner-heading visible-lg">
                <div class="new-item-tag body-3-12pt">New!</div>
                <div class="headline-—-48pt">
                    All Natural Skin Remedies.
                </div>
                <div class="body-1-—-14pt">
                    A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best
                </div>
                <button aria-label="Shop Product" class="btn btn-default">Shop products</button>
            </section>
            
            <section class="aem-GridColumn aem-GridColumn--phone--12 visible-xs">
                <div class="hero-banner-product-image-xs"></div>
            </section>

            <section class="aem-GridColumn aem-GridColumn--phone--12 hero-banner-heading visible-xs">
                <div class="headline-—-48pt">
                    All Natural Skin Remedies.
                </div>
                <div class="body-1-—-14pt">
                    A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best
                </div>
                <div class="text-align-center">
                    <button aria-label="Shop Product" class="btn btn-default">Shop products</button>
                </div>                
            </section>
        </div>
    </article>
`;




class HeroBanner extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(heroBannerTemplate.content);
    } 
}


export default HeroBanner;