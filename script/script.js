// #region Global Definition
const restaurant = [new Restaurant("Takumi Tonkotsu Ramen", "japanisch", "Neusser Str. 336-338,50733 Köln", "montags-freitags 12:00 - 22:00; samstags - sonntags 11:00 - 24:00", 4.8, 2.99, "takumi-banner.jpg", "takumi-logo.png")];

const takumiMenu = [
    new Menu(restaurant[0], "Ramen", "Tonkotsu Ramen", "Suppenbruhe mit Schweineknochen, Schweinekopf und Gemüse für 8 Stunden gekocht und Nudeln aus Japan", 12.5, true, "tonkotsu-ramen.jpg"),
    new Menu(restaurant[0], "Ramen", "Spesial Tonkotsu Ramen","Tonkotsu-Ramen mit Schweinebauchbraten, frittierten Hähnchenstücken und Garnelen", 19.8, true, "special-tonkotsu.jpg"),
    new Menu(restaurant[0], "Ramen", "Surf and Turn Tonkotsu", "Tonkotsu-Ramen mit gebratenem Lachs", 20.8, true, "surf-and-turf-tonkotsu.jpg"),
    new Menu(restaurant[0], "Ramen", "Mala Spicy", "Tonkotsu mit scharfem Gewürz und echtem Koriander", 14.8, false, "mala-spicy.jpg"),
    new Menu(restaurant[0], "Gyoza", "Gyoza", "Mit Miso und Sesam. Es wird mit Gemüse und Hähnchenfleisch gefüllt und in einer Größe deiner Wahl serviert.", 5.8, true, "gyoza.jpg"),
    new Menu(restaurant[0], "Gyoza", "Vegan Gyoza", "Mit Miso und Sesam. Es wird mit Gemüse gefüllt und in einer Größe deiner Wahl serviert.", 7.6, false, "vegan-gyoza.jpg"),
    new Menu(restaurant[0], "Reis", "Mini Donburi", "Auf Reis. Wird mit einer Zutat deiner Wahl zubereitet.", 15.8, false, "mini-donburi.jpg")
];

const categories = searchCategory(takumiMenu);
const categoryBarRef = document.getElementById("category-bar");
const menuRef = document.getElementById("menu");
const basketRef = document.getElementById("basket-sect");

let price = [];
initPrice();

function initPrice(){
    for (i = 0; i < takumiMenu.length; i++){
        price[i] = 0;
    }
    return price;
}
// #endregion

// #region Rendering
function init(restId){
    renderRestaurantMainPage(restId);
    renderCategoryBar(categories);
    renderMenu();
}
function renderRestaurantMainPage(restId){
    const restHeaderRef = document.getElementById("content");
    restHeaderRef.innerHTML = "";
    restHeaderRef.innerHTML += getRestaurantMainPageTemplate(restId);
}

function renderCategoryBar(array){
    categoryBarRef.innerHTML = "";
    for (id = 0; id < array.length; id++){
        categoryBarRef.innerHTML += getCategoryBar(id);
    }
}

function renderMenu(){
    menuRef.innerHTML = "";
    
    for (let categoryId = 0; categoryId < categories.length; categoryId++){
        menuRef.innerHTML += `
            <img src="./assets/img/category_${categories[categoryId]}.jpg" alt="separator image for the next section" class="separator"></img>
            <h2 id="${categories[categoryId]}">${categories[categoryId]}</h2>
            `
        for (let foodIdx = 0; foodIdx < takumiMenu.length; foodIdx++){
            if (categories[categoryId] == takumiMenu[foodIdx].category){
                menuRef.innerHTML += getMenuTemplate(foodIdx);
            }
        }
        
    }
}
// #endregion


// #region Main Site
function showShoppingCart(){
    // const shoppingCartRef = document.getElementById("shopping-cart");
    // const shoppingCart = shoppingCartRef.innerHTML;
    
    basketRef.classList.remove('d-none');
    basketRef.classList.add('d-flex');
}

function searchCategory(array){
    let categoryList =[];
    for (let i = 0; i < array.length; i++){
        takumiMenu[i].category;
        if (!categoryList.includes(takumiMenu[i].category)){
            categoryList.push(takumiMenu[i].category);
        }
    }
    return categoryList;
}

function switchToShoppingCart(){
    const mainRef = document.getElementById("mainpage");
    mainRef.classList.add("d-none");

    basketRef.classList.remove("basket-wrapper");
    basketRef.classList.remove("d-none");
    basketRef.classList.add("basket-wrapper-alone");
    
}


// #endregion

// #region Shopping Cart
function addToCart(index){
    showShoppingCart();
    const buttonRef = document.getElementById("add" + index);
    const orderRef = document.getElementById("shopping-cart");
    orderRef.innerHTML += getOrderTemplate(index);
    price[index] = takumiMenu[index].price;
    calculatePrice();
}

function increaseQuantity(index){
    const counterRef = document.getElementById("counter" + index);
    const priceRef = document.getElementById("price" + index);
    
    let counter = Number(counterRef.innerHTML);
    counter = counter + 1;
    counterRef.innerHTML = counter;
    
    price[index] = counter * takumiMenu[index].price;
    priceRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price[index]);
    calculatePrice();
}

function decreaseQuantity(index){
    const counterRef = document.getElementById("counter" + index);
    const priceRef = document.getElementById("price" + index);
    
    let counter = Number(counterRef.innerHTML);
    counter = counter - 1;
    if (counter < 0){
        counter = 0;
    }
    counterRef.innerHTML = counter;
    
    price[index] = counter * takumiMenu[index].price;
    priceRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price[index]);
    calculatePrice();
}

function calculatePrice(){
    let foodprice = 0;
    let totalprice;
    for (i = 0; i < price.length; i++){
        foodprice += price[i];
    }
    totalprice = foodprice + restaurant[0].deliveryCost;

    const foodPriceRef = document.getElementById("sumfoodprice");
    const deliveryCostRef = document.getElementById("deliverycost");
    const totalPriceRef = document.getElementById("totalcost");

    foodPriceRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(foodprice);
    deliveryCostRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(restaurant[0].deliveryCost);
    totalPriceRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(totalprice);
}

function deleteItem(index){
    document.getElementById("order" + index).remove();
    price[index] = 0;
    calculatePrice();
}

function purchase(){
    document.getElementById("main-wrapper").classList.remove("d-flex");
    document.getElementById("main-wrapper").classList.add("d-none");
    document.getElementById("receipt-wrapper").classList.remove("d-none");
}
// #endregion

// #region Receipt
function backToHome(){
    document.getElementById("receipt-wrapper").classList.add("d-none");
    document.getElementById("main-wrapper").classList.remove("d-none");
    document.getElementById("main-wrapper").classList.add("d-flex");
    // init(0);
}
// #endregion

// #region Testing
init(0);

// renderRestaurantMainPage(0);
// renderCategoryBar(categories);
// renderMenu();
// #endregion
