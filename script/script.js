const takumi = new Restaurant("Takumi Tonkotsu Ramen", "japanisch", "Neusser Str. 336-338,50733 Köln", "montags-freitags 1200 - 2200; samstags - sonntags 1100 - 2400", 4.8, 2.99, "takumi-banner.jpg", "takumi-logo.jpg");

const takumimenu = [
    new Menu(takumi, "Ramen", "Tonkotsu Ramen", "Suppenbruhe mit Schweineknochen, Schweinekopf und Gemüse für 8 Stunden gekocht und Nudeln aus Japan", 12.5, true, "tonkotsu-ramen.jpg"),
    new Menu(takumi, "Ramen", "Spesial Tonkotsu Ramen","Tonkotsu-Ramen mit Schweinebauchbraten, frittierten Hähnchenstücken und Garnelen", 19.8, true, "special-tonkotsu.jpg"),
    new Menu(takumi, "Ramen", "Surf and Turn Tonkotsu", "Tonkotsu-Ramen mit gebratenem Lachs", 20.8, true, "surf-and-turf-tonkotsu.jpg"),
    new Menu(takumi, "Ramen", "Mala Spicy", "Tonkotsu mit scharfem Gewürz und echtem Koriander", 14.8, false, "mala-spicy.jpg"),
    new Menu(takumi, "Gyoza", "Vegan Gyoza", "Mit Miso und Sesam. Es wird mit Gemüse und Hähnchenfleisch gefüllt und in einer Größe deiner Wahl serviert.", 7.6, false, "vegan-gyoza.jpg"),
    new Menu(takumi, "Reis", "Mini Donburi", "Auf Reis. Wird mit einer Zutat deiner Wahl zubereitet.", 15.8, false, "mini-donburi.jpg")
];

function showShoppingCart(){
    const basketRef = document.getElementById("basket-sect");
    const shoppingCartRef = document.getElementById("shopping-cart");
    const shoppingCart = shoppingCartRef.innerHTML;
    
    basketRef.classList.remove('d-none');
    basketRef.classList.add('d-flex');
}

