function getRestaurantMainPageTemplate(restId){
    return `
        <!-- #region HEADER -->
        <div id="restaurant-header">
            <img id="restaurant-logo" src='${restaurant[restId].logoImg}' alt='${restaurant[restId].logoText}'>
        </div>
        <!-- #endregion -->

        <!-- #region GENERAL INFORMATION -->
        <div id="restaurant-info">
            <h1>${restaurant[restId].name}</h1>
            <p>${restaurant[restId].address}</p>
            <div>
                <div>
                    <img src="./assets/icons/star.png" alt="restaurant rate">${restaurant[restId].rate}
                </div>
                <div>
                    <img src="./assets/icons/cooking.png" alt="food, the restaurant is serving">${restaurant[restId].taste}
                </div>
                <div>
                    <img src="./assets/icons/delivery.png" alt="delivery icon">${Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(restaurant[restId].deliveryCost)}
                </div>
            </div>
            <div>
                <img src="./assets/icons/time.png" alt="opening time icon">${restaurant[restId].openingTime}
            </div>
        </div>
        <!-- #endregion -->
    `
}

function getCategoryBar(idx){
    return `
        <a href="#${categories[idx]}">${categories[idx]}</a>
    `
}

function getMenuTemplate(index){
    return `
    <div id="single-menu" class="single-menu">
        <img src="${takumiMenu[index].img}" alt="${takumiMenu[index].imgText}">
        <div>
            <h3>${takumiMenu[index].name}</h3>
            <p>${takumiMenu[index].description}</p>
            <p id="foodprice">${Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(takumiMenu[index].price)}</p>
        </div>
        <div id="add-container">
            <button id="add${index}" onclick="showShoppingCart()">
                <img src="./assets/icons/add.png" alt="add button">
            </button>
        </div>
    </div>
    `
}