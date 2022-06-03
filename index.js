import FeatureBanner from './components/feature-banner/featureBanner.js';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import HeroBanner from './components/hero-banner/heroBanner.js';
import ImageTiles from './components/image-tiles/imageTiles.js';
import NewsLetter from './components/newsletter/newsLetter.js';
import OfferBanner from './components/offer-banner/offerBanner.js';
import ProductTeaserPopular from './components/product-teaser/productTeaserPopular.js';
import ProductTeaserRecommended from './components/product-teaser/productTeaserRecommended.js';
import ProductTeaserTopRated from './components/product-teaser/productTeaserTop.js';
import SecondaryBanner from './components/secondary-banner/secondaryBanner.js';
import CleanProductTeaser from './components/teaser/cleanProductTeaser.js';
import NaturalIngredientsTeaser from './components/teaser/naturalIngredientsTeaser.js';



customElements.define('offer-banner', OfferBanner);
customElements.define('header-banner', Header);
customElements.define('hero-banner', HeroBanner);
customElements.define('secondary-banner', SecondaryBanner);
customElements.define('footer-section', Footer);
customElements.define('product-teaser-popular', ProductTeaserPopular)
customElements.define('product-teaser-top-rated', ProductTeaserTopRated);
customElements.define('product-teaser-recommended', ProductTeaserRecommended);
customElements.define('clean-product-teaser', CleanProductTeaser);
customElements.define('natural-ingredients-teaser', NaturalIngredientsTeaser);
customElements.define('image-tiles', ImageTiles);
customElements.define('feature-banner', FeatureBanner)
customElements.define('news-letter', NewsLetter);