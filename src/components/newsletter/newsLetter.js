const newsLetterTemplate = document.createElement('template');



newsLetterTemplate.innerHTML = `
    <link rel="stylesheet" href="../css/aem-grid-12.css"/>
    <link rel="stylesheet" href="../src/css/style.css">
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
                    <label for="subscribe-email">A...</label>
                    <input class="form-input" id="subscribe-email" name="subscribe-email" type="text" />
                    <button aria-label="Subscribe" class="btn-subscribe pointer-cursor">Subscribe</button>
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