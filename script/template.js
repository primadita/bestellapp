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

        <!-- #region MENU -->
        <h2>
        <!-- #endregion -->
    `
}