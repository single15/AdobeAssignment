const featureBannerTemplate = document.createElement('template');



featureBannerTemplate.innerHTML = `
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="./components/feature-banner/featureBanner.css">
    <article class="feature-banner-container">
        <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 feature">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24px" height="24px" fill="#c6b9b6">
                        <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
                    </svg>
                </div>
                <div class="headline-6-14pt">
                    <span>We’re offering new</span>
                    <span>ways to shop.</span>
                </div>
                <div class="navigation-link">Store locator</div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 feature">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24px" height="24px" fill="#c6b9b6">
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                    </svg>
                </div>
                <div class="headline-6-14pt">
                    <span>Buy online,</span>
                    <span>pickup in store</span>
                </div>
                <div class="navigation-link">Learn more</div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 feature">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px" height="24px" fill="#c6b9b6">
                        <path d="M284.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406C242.4 195.6 243.9 210.7 254.2 219.1c11.31 9.25 17.81 22.69 17.81 36.87c0 14.19-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406c22.53-18.44 35.44-45.4 35.44-74.05S307.1 200.4 284.6 181.9zM345.1 107.1c-10.22-8.344-25.34-6.907-33.78 3.343c-8.406 10.25-6.906 25.37 3.344 33.78c33.88 27.78 53.31 68.18 53.31 110.9s-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C390.2 367.1 416 313.1 416 255.1S390.2 144.9 345.1 107.1zM406.4 33.15c-10.22-8.344-25.34-6.875-33.78 3.344c-8.406 10.25-6.906 25.37 3.344 33.78C431.9 116.1 464 183.8 464 255.1s-32.09 139.9-88.06 185.7c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C473.5 423.8 512 342.6 512 255.1S473.5 88.15 406.4 33.15zM151.3 174.6C161.1 175.6 172.1 169.5 176 159.6l33.75-84.38C214 64.35 209.1 51.1 200.2 45.86l-67.47-42.17C123.2-2.289 110.9-.8945 102.9 7.08C-34.32 144.3-34.31 367.7 102.9 504.9c7.982 7.984 20.22 9.379 29.75 3.402l67.48-42.19c9.775-6.104 13.9-18.47 9.598-29.3L176 352.5c-3.945-9.963-14.14-16.11-24.73-14.97l-53.24 5.314C78.89 286.7 78.89 225.4 98.06 169.3L151.3 174.6z"/>
                    </svg>
                </div>
                <div class="headline-6-14pt">
                    <span>Curbside</span>
                    <span>pickup</span>
                </div>
                <div class="navigation-link">Learn more</div>
            </div>
        </div>
    </article>
`;



class FeatureBanner extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(featureBannerTemplate.content);
    } 
}


export default FeatureBanner;