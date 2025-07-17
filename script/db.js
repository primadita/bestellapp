

class Menu {
    // #region attributes
    restaurant;
    name;
    category;
    description;
    price;
    isFavorite;
    img;
    imgText;
    #parentFolder = "./assets/img/";
    // #endregion

    constructor(restName, dishCategory, dishName, dishDescription, dishPrice, isFavoriteDish, dishImg){
        this.restaurant = restName;
        this.category = dishCategory;
        this.name = dishName;
        this.description = dishDescription;
        this.price = dishPrice;
        this.isFavorite = isFavoriteDish;
        this.getCompletePath(dishImg);
        this.createAltText();
    }

    // #region methods
    getCompletePath(dishImg){
        this.img = this.#parentFolder + dishImg;
    }
    createAltText(){
        this.imgText = "This is the image of " + this.img;
    }
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
    bannerText;
    logoText;
    #parentFolder = "./assets/img/";
    // #endregion
    
    constructor(restName, restCategory, restAddress, restOpeningTime, restRate, restDeliveryCost,restBanner, restLogo){
        this.name = restName;
        this.taste = restCategory;
        this.address = restAddress;
        this.openingTime = restOpeningTime; 
        this.rate = restRate;
        this.deliveryCost = restDeliveryCost;
        this.getCompletePath(restBanner, restLogo);
        this.createAltText();
    }

    // #region methods
    getCompletePath(restBanner, restLogo){
        this.bannerImg = this.#parentFolder + restBanner;
        this.logoImg = this.#parentFolder + restLogo;
    }
    createAltText(){
        this.bannerText = "This is header of " + this.name;
        this.logoText = "This is the logo of" + this.name;
    };
        
    // #endregion
}

class Order {
    // #region Attributes
    name;
    price;
    counter = 1;
    totalprice;
    // #endregion

    constructor({menuname, foodprice}={}){
        this.name = menuname;
        this.price = foodprice;
        this.calculateNewPrice();
    }
    // #region Methods
    calculateNewPrice(){
        this.totalprice = this.counter * this.price;
    }
    // #endregion 
}