function getRestaurantLogo(restId){
    return `
    <img id="restaurant-logo" src='${restaurant[restId].logoImg}' alt='${restaurant[restId].logoText}'>
    `
}

function getRestaurantInfoTemplate(restId){
    return `
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
    `
}

function getCategoryBar(idx){
    return `
        <a href="#${categories[idx]}">${categories[idx]}</a>
    `
}

function getFoodTitleTemplate(categoryId){
    return `
        <img src="./assets/img/category_${categories[categoryId]}.jpg" alt="separator image for the next section" class="separator"></img>
        <h2 id="${categories[categoryId]}">${categories[categoryId]}</h2>
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
            <button id="add${index}" onclick="addToCart(${index})" class="medium-btn">
                <img src="./assets/icons/add.png" alt="add button">
            </button>
        </div>
    </div>
    `
}

function getOrderTemplate(index){
    return `
        <div id="order${index}" class="order">
            <h3>${selectedArr[index].name}</h3>
            <div>
            <button id="minus${index}" class="small-btn" onclick="decreaseQuantity(${index})">
                <img src="./assets/icons/minus.png" alt="minus button">
            </button>
            <span id="counter${index}">${selectedArr[index].counter}</span>
            <button id="plus${index}" class="small-btn" onclick="increaseQuantity(${index})">
                <img src="./assets/icons/add.png" alt="add button">
            </button>
            <span id="price${index}">${Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(selectedArr[index].totalprice)}</span>
            <button id="delete${index}" class="small-btn" onclick="deleteItem(${index})">
                <img src="./assets/icons/trash.png" alt="delete item">
            </button>
        </div>
    `
}