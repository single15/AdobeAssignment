const footerTemplate = document.createElement('template');



footerTemplate.innerHTML = `
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="./components/footer/footer.css">
    
    <footer class="footer-container">
        <div class="aem-Grid aem-Grid--12 subscribe-section">
            <div class="aem-GridColumn aem-GridColumn--default--6 visible-lg">
                <div class="headline-—-48pt">sooth</div>
                <div class="body-1-—-14pt">Explore our innovative skincare products</div>
                <div class="form-input-section">
                    <label for="subscribe"></label>
                    <input class="form-input" name="subscribe" type="text" placeholder="Your email...." />
                    <button aria-label="Shop Product" class="btn-subscribe pointer-cursor">Subscribe</button>
                </div>
            </div>
            <div class="aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 aem-GridColumn--phone--6">
                    <div>SHOP</div>
                    <ul>
                        <li>Lorem ipsum al</li>
                        <li>Dolar at</li>
                        <li>Veraotio</li>
                        <li>Chauloe</li>
                    </ul>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 aem-GridColumn--phone--6">
                    <div>ABOUT</div>
                    <ul>
                        <li>About Us</li>
                        <li>Sooth Stories (Blog)</li>
                        <li>Contact Us</li>
                        <li>Learn More</li>
                        <li>Stores</li>
                    </ul>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--2">
                    <div>MORE</div>
                    <ul>
                        <li>Dolar at</li>
                        <li>Chauloe</li>
                        <li>Veraotio</li>
                    </ul>
                </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--phone--12 visible-xs">
                <div class="headline-—-48pt">sooth</div>
                <div class="body-1-—-14pt">Explore our innovative skincare products</div>
                <div class="form-input-section">
                    <label for="subscribe"></label>
                    <input class="form-input" name="subscribe" type="text" placeholder="Your email...." />
                    <button aria-label="Shop Product" class="btn-subscribe pointer-cursor">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="aem-Grid aem-Grid--12 social-contact-section">
            <div class="aem-Grid aem-Grid--12 section-heading">SOOTH ALL RIGHT RESERVED</div>
            <div class="aem-Grid aem-Grid--12">
                <div class="aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12 aem-GridColumn--tablet--9">
                    <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--4 aem-GridColumn--tablet--3 navigation-link">
                        Privacy Policy
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--4 aem-GridColumn--tablet--3 navigation-link">
                        Terms of Use
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--4 aem-GridColumn--tablet--3 navigation-link">
                        Contact Us
                    </div>
                </div>

                <div class="aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--8 aem-GridColumn--tablet--3">
                    <div class="aem-GridColumn aem-GridColumn--default--3 pointer-cursor">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" height="25px" fill="#ffffff">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                    </svg>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3 pointer-cursor">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25px" height="25px" fill="#ffffff">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3 pointer-cursor">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" height="25px" fill="#ffffff">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                        </svg>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3 pointer-cursor">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="25px" height="25px" fill="#ffffff">
                            <path d="M 7.4140625 3 L 9.1894531 9.4121094 L 9.1894531 12.488281 L 10.726562 12.488281 L 10.726562 9.4121094 L 12.525391 3 L 10.976562 3 L 10.332031 5.9179688 C 10.151031 6.7699687 10.035422 7.3753281 9.9824219 7.7363281 L 9.9355469 7.7363281 C 9.8605469 7.2313281 9.7439375 6.62125 9.5859375 5.90625 L 8.9648438 3 L 7.4140625 3 z M 14.318359 5.4199219 C 13.797359 5.4199219 13.376641 5.5224687 13.056641 5.7304688 C 12.735641 5.9374688 12.500609 6.2687031 12.349609 6.7207031 C 12.199609 7.1737031 12.123047 7.7715781 12.123047 8.5175781 L 12.123047 9.5234375 C 12.123047 10.261437 12.190266 10.853828 12.322266 11.298828 C 12.454266 11.743828 12.675281 12.072203 12.988281 12.283203 C 13.301281 12.494203 13.733203 12.600562 14.283203 12.601562 C 14.818203 12.601562 15.244641 12.497063 15.556641 12.289062 C 15.868641 12.081063 16.095375 11.755641 16.234375 11.306641 C 16.373375 10.857641 16.443359 10.264391 16.443359 9.5253906 L 16.443359 8.5175781 C 16.443359 7.7715781 16.371516 7.1755625 16.228516 6.7265625 C 16.085516 6.2785625 15.860781 5.9473281 15.550781 5.7363281 C 15.241781 5.5253281 14.830359 5.4199219 14.318359 5.4199219 z M 17.251953 5.5566406 L 17.251953 10.734375 C 17.251953 11.375375 17.362078 11.847437 17.580078 12.148438 C 17.799078 12.449437 18.137656 12.599609 18.597656 12.599609 C 19.260656 12.599609 19.758844 12.279672 20.089844 11.638672 L 20.123047 11.638672 L 20.259766 12.486328 L 21.480469 12.486328 L 21.480469 5.5566406 L 19.921875 5.5566406 L 19.921875 11.060547 C 19.861875 11.189547 19.769531 11.295906 19.644531 11.378906 C 19.519531 11.462906 19.389906 11.503906 19.253906 11.503906 C 19.094906 11.503906 18.982063 11.436687 18.914062 11.304688 C 18.846063 11.172688 18.8125 10.954531 18.8125 10.644531 L 18.8125 5.5566406 L 17.251953 5.5566406 z M 14.283203 6.4941406 C 14.501203 6.4941406 14.656187 6.6098437 14.742188 6.8398438 C 14.829188 7.0688437 14.871094 7.4316875 14.871094 7.9296875 L 14.871094 10.089844 C 14.871094 10.602844 14.828188 10.971266 14.742188 11.197266 C 14.656188 11.423266 14.502156 11.536109 14.285156 11.537109 C 14.067156 11.537109 13.915031 11.423266 13.832031 11.197266 C 13.748031 10.971266 13.707031 10.601844 13.707031 10.089844 L 13.707031 7.9296875 C 13.707031 7.4326875 13.751891 7.0698438 13.837891 6.8398438 C 13.923891 6.6108438 14.072203 6.4941406 14.283203 6.4941406 z M 6.5 13.900391 C 5.119 13.900391 4 15.019391 4 16.400391 L 4 24.400391 C 4 25.781391 5.119 26.900391 6.5 26.900391 L 23.5 26.900391 C 24.881 26.900391 26 25.781391 26 24.400391 L 26 16.400391 C 26 15.019391 24.881 13.900391 23.5 13.900391 L 6.5 13.900391 z M 15.058594 16.199219 L 16.328125 16.199219 L 16.328125 19.283203 L 16.337891 19.283203 C 16.451891 19.060203 16.614219 18.881141 16.824219 18.744141 C 17.034219 18.607141 17.261906 18.539062 17.503906 18.539062 C 17.815906 18.539062 18.059328 18.622109 18.236328 18.787109 C 18.413328 18.952109 18.544047 19.220844 18.623047 19.589844 C 18.702047 19.959844 18.742188 20.471953 18.742188 21.126953 L 18.742188 22.050781 C 18.742187 22.922781 18.637734 23.563609 18.427734 23.974609 C 18.217734 24.385609 17.888359 24.591797 17.443359 24.591797 C 17.195359 24.591797 16.969625 24.533922 16.765625 24.419922 C 16.561625 24.305922 16.410594 24.149172 16.308594 23.951172 L 16.279297 23.951172 L 16.146484 24.503906 L 15.058594 24.503906 L 15.058594 16.199219 z M 7.1835938 16.496094 L 11.087891 16.496094 L 11.087891 17.556641 L 9.7792969 17.556641 L 9.7792969 24.503906 L 8.4902344 24.503906 L 8.4902344 17.556641 L 7.1835938 17.556641 L 7.1835938 16.496094 z M 21.117188 18.542969 C 21.568188 18.542969 21.916203 18.624063 22.158203 18.789062 C 22.399203 18.955063 22.570922 19.2135 22.669922 19.5625 C 22.767922 19.9125 22.816406 20.396672 22.816406 21.013672 L 22.816406 22.017578 L 20.613281 22.017578 L 20.613281 22.314453 C 20.613281 22.690453 20.623484 22.971203 20.646484 23.158203 C 20.669484 23.345203 20.715156 23.483359 20.785156 23.568359 C 20.855156 23.654359 20.963375 23.697266 21.109375 23.697266 C 21.306375 23.697266 21.441625 23.62075 21.515625 23.46875 C 21.588625 23.31675 21.628766 23.061078 21.634766 22.705078 L 22.769531 22.771484 C 22.775531 22.821484 22.779297 22.893422 22.779297 22.982422 C 22.779297 23.523422 22.631937 23.927359 22.335938 24.193359 C 22.039938 24.461359 21.621078 24.595703 21.080078 24.595703 C 20.431078 24.595703 19.976844 24.391375 19.714844 23.984375 C 19.452844 23.577375 19.324219 22.94675 19.324219 22.09375 L 19.324219 21.072266 C 19.324219 20.194266 19.460469 19.553437 19.730469 19.148438 C 20.000469 18.743437 20.462188 18.542969 21.117188 18.542969 z M 12.949219 18.650391 L 14.267578 18.650391 L 14.267578 24.501953 L 14.263672 24.501953 L 14.263672 24.503906 L 13.232422 24.503906 L 13.119141 23.787109 L 13.089844 23.787109 C 12.809844 24.329109 12.390078 24.599609 11.830078 24.599609 C 11.441078 24.599609 11.155703 24.47375 10.970703 24.21875 C 10.785703 23.96475 10.693359 23.565391 10.693359 23.025391 L 10.693359 18.652344 L 12.013672 18.652344 L 12.013672 22.949219 C 12.013672 23.209219 12.042609 23.397813 12.099609 23.507812 C 12.157609 23.619812 12.251719 23.673828 12.386719 23.673828 C 12.500719 23.673828 12.609844 23.639359 12.714844 23.568359 C 12.820844 23.498359 12.897219 23.408781 12.949219 23.300781 L 12.949219 18.650391 z M 21.089844 19.431641 C 20.949844 19.431641 20.844344 19.472687 20.777344 19.554688 C 20.710344 19.637687 20.665531 19.772938 20.644531 19.960938 C 20.621531 20.147938 20.611328 20.433453 20.611328 20.814453 L 20.611328 21.234375 L 21.574219 21.234375 L 21.574219 20.814453 C 21.574219 20.438453 21.562109 20.154937 21.537109 19.960938 C 21.512109 19.765937 21.467391 19.630781 21.400391 19.550781 C 21.333391 19.471781 21.230844 19.431641 21.089844 19.431641 z M 16.910156 19.474609 C 16.783156 19.474609 16.664641 19.524953 16.556641 19.626953 C 16.448641 19.728953 16.372125 19.859578 16.328125 20.017578 L 16.328125 23.339844 C 16.386125 23.441844 16.460734 23.517359 16.552734 23.568359 C 16.644734 23.618359 16.744516 23.646484 16.853516 23.646484 C 16.993516 23.646484 17.1045 23.596141 17.1875 23.494141 C 17.2705 23.392141 17.329281 23.220516 17.363281 22.978516 C 17.398281 22.737516 17.416016 22.402562 17.416016 21.976562 L 17.416016 21.222656 C 17.416016 20.764656 17.402047 20.411109 17.373047 20.162109 C 17.345047 19.914109 17.292703 19.736812 17.220703 19.632812 C 17.147703 19.528813 17.045156 19.474609 16.910156 19.474609 z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </footer>   
`;



class Footer extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    } 
}


export default Footer;