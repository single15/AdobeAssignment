const teaserTemplate = document.createElement('template');



teaserTemplate.innerHTML = `
<link rel="stylesheet" href="../css/aem-grid-12.css">
<link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="./components/teaser/teaser.css">
    <article class="teaser-container">
        <div class="aem-Grid aem-Grid--12">
            <section class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 details-section">
                <div class="text-container">
                    <div class="headline-4-28pt">Clean products that deliver better solutions</div>
                    <div class="body-3-12pt">A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</div>
                    <button aria-label="Add to Cart" class="btn btn-default">Shop More</button>
                </div>
            </section>
            <section class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 image-section">
                <img aria-hidden="true"  src="../assets/img/man-in-blue-top-2830332@3x.png" alt="Man in blue top" width="100%" height="70%" />
            </section>
        </div>
    </article>
`;



class CleanProductTeaser extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(teaserTemplate.content);
    } 
}


export default CleanProductTeaser;