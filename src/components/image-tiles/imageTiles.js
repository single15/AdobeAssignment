const imageTilesTemplate = document.createElement('template');

const ingredients = [
    {
        id: 1,
        label: 'Cacao',
        details: 'Lorem ipsum dolar et al',
        imgSrc: 'cacao-1'
    },
    {
        id: 2,
        label: 'Honey',
        details: 'Lorem ipsum dolar et al',
        imgSrc: 'honey'
    },
    {
        id: 3,
        label: 'Mint',
        details: 'Lorem ipsum dolar et al',
        imgSrc: 'mint'
    },
    {
        id: 4,
        label: 'Coconut root',
        details: 'Lorem ipsum dolar et al',
        imgSrc: 'coconut-root'
    },
    {
        id: 5,
        label: 'Flour',
        details: 'Lorem ipsum dolar et al',
        imgSrc: 'flour'
    },
    {
        id: 6,
        label: 'Cacao',
        details: 'Lorem ipsum dolar et al',
        imgSrc: 'cacao-2'
    }
]

imageTilesTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/image-tiles/imageTiles.css">
    <article class="image-tiles-container">
        <div class="aem-Grid aem-Grid--12 section">
            <div class="aem-GridColumn aem-GridColumn--default--12 section-header">
                <div class="headline-5-18pt">We use the best ingredients</div>
                <div class="body-2-14pt">Explore our innovative skincare products</div>
            </div>
            <div role="grid" aria-label="Ingredients" class="aem-Grid aem-Grid--12">
                ${ingredients.map(element => 
                    `<div aria-label="Ingredients Details" key="${element.id}" class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--4 image-tiles-section">
                        <div class="image-section">
                            <img aria-hidden="true"  src="../src/assets/img/${element.imgSrc}.png"  alt="Ingredients ${element.label}" height="180px" width="100%" />
                        </div>
                        <div class="product-details-section">
                            <div class="headline-6-14pt">${element.label}</div>
                            <div class="body-2-14pt">${element.details}</div>                            
                        </div>
                    </div>`
                ).join('')}
        </div>
        </div>    
    </article>
`;



class ImageTiles extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(imageTilesTemplate.content);
    } 
}


export default ImageTiles;