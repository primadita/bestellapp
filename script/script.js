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
const basketRef = document.getElementById("shopping-cart");

let selectedArr = [];
let selectedMenu = [];

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
    renderRestaurantLogo(restId);
    renderRestaurantInfo(restId);
    renderCategoryBar(categories);
    renderMenu();
}

function renderRestaurantLogo(restId){
    const restHeaderRef = document.getElementById("restaurant-header-logo");
    restHeaderRef.innerHTML = "";
    restHeaderRef.innerHTML += getRestaurantLogo(restId);
}

function renderRestaurantInfo(restId){
    const restInfoRef = document.getElementById("general-info");
    restInfoRef.innerHTML = "";
    restInfoRef.innerHTML += getRestaurantInfoTemplate(restId);
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
        menuRef.innerHTML += getFoodTitleTemplate(categoryId);
        for (let foodIdx = 0; foodIdx < takumiMenu.length; foodIdx++){
            if (categories[categoryId] == takumiMenu[foodIdx].category){
                menuRef.innerHTML += getMenuTemplate(foodIdx);
            }
        }
    }
}

function renderOrder(){
    const orderListRef = document.getElementById("orderlist");
    orderListRef.innerHTML = "";
    
    for (i = 0; i < selectedArr.length; i++){
        orderListRef.innerHTML += getOrderTemplate(i);
    }
}
// #endregion


// #region Main Site
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

function showShoppingCart(){
    basketRef.classList.remove('d-none');
    basketRef.classList.add('d-flex');
}

function switchToShoppingCart(){
    const mainRef = document.getElementById("mainpage");
    mainRef.classList.add("d-none");

    basketRef.classList.remove("basket-wrapper");
    basketRef.classList.remove("d-none");
    basketRef.classList.add("basket-wrapper-only");
    
}
// #endregion

// #region Shopping Cart
function addToCart(index){
    showShoppingCart();
  
    if (!selectedMenu.includes(takumiMenu[index].name)){
        const selected = new Order({menuname: takumiMenu[index].name, foodprice: takumiMenu[index].price});
        selectedArr.push(selected);
        selectedMenu.push(takumiMenu[index].name);
    } else {
        newIndex = selectedMenu.indexOf(takumiMenu[index].name);
        selectedArr[newIndex].counter += 1;
        selectedArr[newIndex].calculateNewPrice();
    }
    calculateTotalPrice();
    renderOrder();
}

function increaseQuantity(index){
    selectedArr[index].counter += 1;
    selectedArr[index].calculateNewPrice();
    calculateTotalPrice();
    renderOrder();
}

function decreaseQuantity(index){
    selectedArr[index].counter -= 1;

    if (selectedArr[index].counter < 0){
        selectedArr[index].counter = 0;
    }

    selectedArr[index].calculateNewPrice();
    calculateTotalPrice();
    renderOrder();
}

function calculateTotalPrice(){
    let foodprice = 0;
   
    for (let idx = 0; idx < selectedArr.length; idx++){
        foodprice += selectedArr[idx].totalprice;
    }
    let totalprice = foodprice + restaurant[0].deliveryCost;

    const foodPriceRef = document.getElementById("sumfoodprice");
    const deliveryCostRef = document.getElementById("deliverycost");
    const totalPriceRef = document.getElementById("totalcost");

    foodPriceRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(foodprice);
    deliveryCostRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(restaurant[0].deliveryCost);
    totalPriceRef.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(totalprice);
}

function deleteItem(index){
    document.getElementById("order" + index).remove();
    // price[index] = 0;
    calculateTotalPrice();
    renderOrder();
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
    
    document.getElementById("mainpage").classList.remove("d-none");

    document.getElementById("shopping-cart").classList.add("d-none");
    document.getElementById("shopping-cart"). classList.add("basket-wrapper");
    document.getElementById("shopping-cart").classList.remove("basket-wrapper-only");
    init(0);
}
// #endregion

// #region Testing
init(0);

// renderRestaurantMainPage(0);
// renderCategoryBar(categories);
// renderMenu();
// #endregion
