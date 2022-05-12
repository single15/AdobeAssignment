const teaserTemplate = document.createElement('template');



teaserTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/teaser/teaser.css">
    <div class="teaser-container natural-ingredients-container">
        <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 image-section">
                <img src="../src/assets/img/hand-with-tatoo.png" alt="Hand with tatoo"  width="100%" />
            </div>    
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 details-section">
                <div class="text-container">
                    <div class="headline-4-28pt">All Natural Ingredients.</div>
                    <div class="body-3-12pt">A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</div>
                    <button class="btn btn-default">Shop More</button>
                </div>
            </div>
        </div>
    </div>
`;



class NaturalIngredientsTeaser extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(teaserTemplate.content);
    } 
}


export default NaturalIngredientsTeaser;