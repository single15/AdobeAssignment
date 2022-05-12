const productTeaserTemplate = document.createElement('template');


const popularProduct = [
    {
        id: 1,
        label: 'Psoriasis Cream',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'psoriasis_treatment@2x'
    },
    {
        id: 2,
        label: 'Ezcema Cream',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'ezcema@2x'
    },
    {
        id: 3,
        label: 'Sunburn Ointment',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'suburn1@3x'
    },
    {
        id: 4,
        label: 'Vitiligio Balm',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'vitiligio_Balm@2x'
    },
    {
        id: 5,
        label: 'Vitiligio Solution',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'vitiligio@2x'
    },
    {
        id: 6,
        label: 'Acne Cream',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'Cream1@2x'
    },
    {
        id: 7,
        label: 'Acne Cream',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'acne_Cream@2x'
    },
    {
        id: 8,
        label: 'Ezcema Oil',
        details: 'All Natural Ingredients.',
        price: '$24.99',
        imgSrc: 'ezema_dropper@2x'
    }
]


productTeaserTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/product-teaser/productTeaserPopular.css">

    <div class="product-teaser-container">
        <div class="aem-Grid aem-Grid--12 visible-lg">
            <div class="aem-GridColumn aem-GridColumn--default--6  headline-6-14pt">Top Rated</div>
            <div class="aem-GridColumn aem-GridColumn--default--6  headline-6-14pt text-align-right">Shop all Products</div>
        </div>
        <div class="aem-Grid aem-Grid--12">
            ${popularProduct.map(element => 
                    `<div key="${element.id}" class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6 aem-GridColumn--tablet--4 product-section">
                        <div class="image-section">
                            ${element.new ? '<div class="product-tag">New!</div>' : ''}
                            ${element.discountOff ? `<div class="product-tag offer">${element.discountOff} off</div>` : ''}
                            <img src="../src/assets/img/${element.imgSrc}.png" alt="${element.label}" height="300px" width="100%" />
                        </div>
                        <div class="product-details-section">
                            <div class="headline-6-14pt">${element.label}</div>
                            <div class="body-2-14pt">${element.details}</div>
                            <div class="product-price">
                                <span class="discounted-price">${element?.discountPrice || ''}</span>
                                <span class="${element?.discountPrice ? 'invalid-price' : ''}">${element.price}</span>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-default"> 
                                <span class="visible-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16px" height="12px" fill="#000000">
                                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                                    </svg>&nbsp;&nbsp;
                                </span>
                                Add to Cart 
                            </button>
                        </div>
                    </div>`
                ).join('')
            }
        </div>
    </div>
`;



class ProductTeaserTopRated extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(productTeaserTemplate.content);
    } 
}


export default ProductTeaserTopRated;