
//je declare mes variables

console.log('hello');
var openCheckout = document.querySelector(".my-shop");
console.log(openCheckout);
var myCheckout = document.querySelector(".checkout");
console.log(myCheckout);
var close = document.querySelector(".button");
// les fonctions; les actions
function showMyShop()
{
  myCheckout.classList.toggle("checkout-is-showing");
}
// les évenements, les ecouteurs
openCheckout.addEventListener("click",showMyShop);
close.addEventListener("click",showMyShop);
