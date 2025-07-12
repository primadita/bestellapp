class Menu {
    // #region attributes
    name;
    category;
    description;
    img;
    price;
    // #endregion

    constructor(dishName, dishCategory, dishDescription, dishImg, dishPrice){
        this.name = dishName;
        this.category = dishCategory;
        this.description = dishDescription;
        this.img = dishImg;
        this.price = dishPrice;
    }

    // #region methods
    // #endregion
}

class Restaurant {
    // #region attributes
    name;
    address;
    openingtime;
    rate;
    // #endregion
    
    constructor(restName, restAddress, restOpeningTime, restRate){
        this.name = restName;
        this.address = restAddress;
        this.openingtime = restOpeningTime;
        this.rate = restRate;
    }

    // #region methods
    // #endregion
}