const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <link rel="stylesheet" href="./components/header/header.css">   

    <header class="header body-1-—-14pt page-container">
        <div class="aem-Grid aem-Grid--12 header-menus visible-lg">
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 aem-Grid aem-Grid--12 body-3-12pt">
                <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--3 navigator-link">ABOUT</div>
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--3 navigator-link">CONSULTATION</div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--2 headline-3-32pt text-align-center">
                sooth
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 cart-login-menu body-3-12pt">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12px" height="12px">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                    </svg>
                </div>
                <div class="pointer-cursor">
                    CART
                </div>
                <div class="pointer-cursor">
                    LOGIN
                </div>
            </div>
        </div>
        <div class="aem-Grid aem-Grid--12 header-menus visible-xs">
            <div class="aem-GridColumn aem-GridColumn--phone--10 headline-3-32pt text-align-center">
                <span id="hamburger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="18px" fill="#354e57">
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                    </svg>&nbsp;&nbsp;
                </span>
                sooth
            </div>
            <div class="aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--phone--2 text-align-right body-3-12pt">
                <div class="aem-GridColumn aem-GridColumn--phone--12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12px" height="12px">
                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                    </svg>&nbsp; &nbsp;CART
                </div>
            </div> 
        </div>

        <div class="aem-Grid aem-Grid--12 visible-lg">
            <div class="header-submenu aem-Grid aem-Grid--10 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--10">
                <div id="acne" class="aem-GridColumn aem-GridColumn--default--2 text-align-center navigator-link">Acne</div>
                <div id="sun" class="aem-GridColumn aem-GridColumn--default--2 text-align-center navigator-link">Sun</div>
                <div id="ezcema" class="aem-GridColumn aem-GridColumn--default--2 text-align-center navigator-link">Ezcema</div>
                <div id="psoriasis" class="aem-GridColumn aem-GridColumn--default--2 text-align-center navigator-link">Psoriasis</div>
                <div id="vitiligio" class="aem-GridColumn aem-GridColumn--default--2 text-align-center navigator-link">Vitiligio</div>
            </div>
        </div>
    </div>
    <div id="mobile-menus" class="mobile-menus-container"> 
        <div class="menu-header-section">
            <div>
                <svg id="mobile-menu-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="28px" height="28px" fill="#354e57">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12px" height="12px">
                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                </svg>&nbsp;&nbsp;CART
            </div>
        </div>
        <div class="sub-menu-list">
            <div class="headline-5-18pt">Acne</div>
            <div class="headline-5-18pt">Sun</div>
            <div class="headline-5-18pt">Ezcema</div>
            <div class="headline-5-18pt">Psoriais</div>
            <div class="headline-5-18pt">Vitiligio</div>
        </div>
        <div class="menu-list">
            <div class="headline-6-14pt">ABOUT</div>
            <div class="headline-6-14pt">CONSULTATION</div>
        </div>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        this.selectedItem = '';
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(headerTemplate.content);

        this._hamburger = this.shadowRoot.getElementById("hamburger");
        this._mobileMenus = this.shadowRoot.getElementById("mobile-menus");
        this._mobileMenuPopoverClose = this.shadowRoot.getElementById("mobile-menu-close");

        this._acne = this.shadowRoot.getElementById("acne");
        this._sun = this.shadowRoot.getElementById("sun");
        this._ezcema = this.shadowRoot.getElementById("ezcema");
        this._psoriasis = this.shadowRoot.getElementById("psoriasis");
        this._vitiligio = this.shadowRoot.getElementById("vitiligio");
    }


    connectedCallback() {
        if (this._hamburger) {
            this._hamburger.addEventListener("click", (e) => this._onHamburgerClick(this._mobileMenus));
        }

        if(this._mobileMenuPopoverClose) {
            this._mobileMenuPopoverClose.addEventListener("click", (e) => this._onCloseClick(this._mobileMenus));
        }

        if(this._acne) {
            this._acne.addEventListener("click", (e) => {
                this._sun.style.borderBottom = "none";
                this._ezcema.style.borderBottom = "none";
                this._psoriasis.style.borderBottom = "none";
                this._vitiligio.style.borderBottom = "none";
                e.currentTarget.style.borderBottom = "4px solid #a67744";
            });
        }
        
        if(this._sun) {
            this._sun.addEventListener("click", (e) => {
                this._acne.style.borderBottom = "none";
                this._ezcema.style.borderBottom = "none";
                this._psoriasis.style.borderBottom = "none";
                this._vitiligio.style.borderBottom = "none";
                e.currentTarget.style.borderBottom = "4px solid #a67744";
            });
        }

        if(this._ezcema) {
            this._ezcema.addEventListener("click", (e) => {
                this._acne.style.borderBottom = "none";
                this._sun.style.borderBottom = "none";
                this._psoriasis.style.borderBottom = "none";
                this._vitiligio.style.borderBottom = "none";
                e.currentTarget.style.borderBottom = "4px solid #a67744";
            });
        }

        if(this._psoriasis) {
            this._psoriasis.addEventListener("click", (e) => {
                this._acne.style.borderBottom = "none";
                this._ezcema.style.borderBottom = "none";
                this._sun.style.borderBottom = "none";
                this._vitiligio.style.borderBottom = "none";
                e.currentTarget.style.borderBottom = "4px solid #a67744";
            });
        }

        if(this._vitiligio) {
            this._vitiligio.addEventListener("click", (e) => {
                this._acne.style.borderBottom = "none";
                this._ezcema.style.borderBottom = "none";
                this._psoriasis.style.borderBottom = "none";
                this._sun.style.borderBottom = "none";
                e.currentTarget.style.borderBottom = "4px solid #a67744";
            });
        }
    }

    _onHamburgerClick(mbMenu) {
        if(mbMenu) {
            mbMenu.style.visibility = "visible";
            document.body.style.overflowY = "hidden";
        }
    }

    _onCloseClick(mbMenu) {
        if(mbMenu) {
            mbMenu.style.visibility = "hidden";
            document.body.style.overflowY = "scroll";
        }
    }
}


export default Header;