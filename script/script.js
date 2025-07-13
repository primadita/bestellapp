function showShoppingCart(){
    const basketRef = document.getElementById("basket-sect");
    const shoppingCartRef = document.getElementById("shopping-cart");
    const shoppingCart = shoppingCartRef.innerHTML;
    
    basketRef.classList.remove('d-none');
    basketRef.classList.add('d-flex');

}