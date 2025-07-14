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

// #endregion

// #region Rendering
function init(restId){
    renderRestaurantMainPage(restId);
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
    const basketRef = document.getElementById("basket-sect");
    const shoppingCartRef = document.getElementById("shopping-cart");
    const shoppingCart = shoppingCartRef.innerHTML;
    
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



// #endregion

// #region Shopping Cart

// #endregion

// #region Testing
// init(0);
renderRestaurantMainPage(0);
renderCategoryBar(categories);
renderMenu();
// #endregion
