const heroBannerTemplate = document.createElement('template');



heroBannerTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/hero-banner/heroBanner.css">
    <div class="hero-banner-container">
        <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 hero-banner-heading visible-lg">
                <div class="new-item-tag body-3-12pt">New!</div>
                <div class="headline-—-48pt">
                    All Natural Skin Remedies.
                </div>
                <div class="body-1-—-14pt">
                    A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best
                </div>
                <button class="btn btn-default">Shop products</button>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 visible-lg">
                <div class="hero-banner-product-image">
                    <div>
                        <img src="../src/assets/img/plant.png" alt="Plant" />
                    </div>
                    <div>
                        <img src="../src/assets/img/plant-1.png" alt="Plant" />
                    </div>
                    <div class="visible-lg hide-lg">
                        <img src="../src/assets/img/ezcema-1@3x.png" alt="Product Cream" />
                    </div>
                    <div class="visible-sm">
                        <img src="../src/assets/img/ezcema-1@2x.png" alt="Product Cream" />
                    </div>
                </div>                    
            </div>

            <div class="aem-GridColumn aem-GridColumn--phone--12 visible-xs">
                <div class="hero-banner-product-image-xs">
                    <div>
                        <img src="../src/assets/img/plant.png" alt="Plant" />
                    </div>
                    <div>
                        <img src="../src/assets/img/plant-1.png" alt="Plant" />
                    </div>
                    <div>
                        <img src="../src/assets/img/ezcema-1@2x.png" alt="Product Cream" />
                    </div>
                </div>                    
            </div>

            <div class="aem-GridColumn aem-GridColumn--phone--12 hero-banner-heading visible-xs">
                <div class="headline-—-48pt">
                    All Natural Skin Remedies.
                </div>
                <div class="body-1-—-14pt">
                    A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best
                </div>
                <button class="btn btn-default">Shop products</button>
            </div>
        </div>
    </div>
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