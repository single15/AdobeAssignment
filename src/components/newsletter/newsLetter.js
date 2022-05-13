const newsLetterTemplate = document.createElement('template');



newsLetterTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/newsletter/newsLetter.css">
    <article class="news-letter-container">
        <div class="aem-Grid aem-Grid--12 news-letter-section">
            <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <div class="headline-4-28pt">Join the Sooth family</div>
                <div class="body-2-14pt">
                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</div>
                </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <div class="form-input-section">
                    <input class="form-input" type="text" />
                    <button class="btn-subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    </article>
`;



class NewsLetter extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(newsLetterTemplate.content);
    } 
}


export default NewsLetter;