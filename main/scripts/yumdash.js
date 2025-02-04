const wcdoMenu = [{
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}, {
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}, {
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}, {
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}, {
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}, {
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}, {
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}, {
  logo: '/main/images/logo/wcdonalds-logo.png',
  image: '/main/images/menu/wcdonalds/chicken/1pc-chicken-with-rice.png',
  name: '1-pc. Chicken WcDo w/ Rice Small Meal',
  priceCents: 11900
}];

let wcdoMenuHTML = '';

wcdoMenu.forEach((menu) => {
  wcdoMenuHTML += `
        <div class="food-menu-container">
          
          <div class="restaurant-logo-container">
            <img class="restaurant-logo" src="${menu.logo}">
          </div>
          
          <div class="food-image-container">
            <img class="food-image" src="${menu.image}">
          </div>
          
          <div class="food-name limit-text-to-2-lines">
            ${menu.name}
          </div>
          
          <div class="horizontal-line"></div>
          
          <div class="food-price">
            &#8369; ${(menu.priceCents / 100).toFixed(2)}
          </div>
          
          <div class="food-quantity-container">
            <button class="button-quantity">-</button>
            <span>1</span>
            <button class="button-quantity">+</button>
          </div>
          
          <div class="added-to-bag">
            <img src="/main/images/icons/checkmark.png">
            Added
          </div>
          
          <button class="add-to-my-bag-button button-primary">
            Add to My Bag
          </button>
        </div>
  `;
});

document.querySelector('.js-menu-grid').innerHTML = wcdoMenuHTML;