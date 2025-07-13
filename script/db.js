class Menu {
    // #region attributes
    restaurant;
    name;
    category;
    description;
    price;
    isFavorite;
    img;
    #parent = ""
    // #endregion

    constructor(restName, dishCategory, dishName, dishDescription, dishPrice, isFavoriteDish, dishImg){
        this.restaurant = restName;
        this.category = dishCategory;
        this.name = dishName;
        this.description = dishDescription;
        this.price = dishPrice;
        this.isFavorite = isFavoriteDish;
        this.img = dishImg;
    }

    // #region methods
    // #endregion
}

class Restaurant {
    // #region attributes
    name;
    taste;
    address;
    openingTime;
    rate;
    deliveryCost;
    bannerImg;
    logoImg;
    // #endregion
    
    constructor(restName, restCategory, restAddress, restOpeningTime, restRate, restDeliveryCost,restBanner, restLogo){
        this.name = restName;
        this.taste = restCategory;
        this.address = restAddress;
        this.openingTime = restOpeningTime; 
        this.rate = restRate;
        this.deliveryCost = restDeliveryCost;
        this.bannerImg = restBanner; 
        this.logoImg = restLogo;
    }

    // #region methods
    // #endregion
}