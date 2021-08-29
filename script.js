if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded',ready);
}
else{
	ready();
}
function ready(){
		var removeCartItemsButton = document.getElementsByClassName('remove-btn');
	console.log(removeCartItemsButton);
for(var i =0; i<removeCartItemsButton.length;i++){
	var buton = removeCartItemsButton[i];
	buton.addEventListener('click',removeCartItem);
}
var quantityInput = document.getElementsByClassName('cart_qty');
for(var i =0; i<quantityInput.length;i++){
    var input = quantityInput[i];
	input.addEventListener('change',quantityChanged);
}
var addToCartButton = document.getElementsByClassName('addToCart');
for(var i =0; i< addToCartButton.length;i++){
	var btn = addToCartButton[i];
	btn.addEventListener('click',addToCartClicked);
}	
}


function removeCartItem (event){
	var buttonClicked = event.target;
		buttonClicked.parentElement.parentElement.remove();
		apdateCartTotal();
}
function quantityChanged(event){
	var input = event.target;
	if(isNaN(input.value)|| input.value <=0){
		input.value = 1;
	}
	apdateCartTotal();
}

function addToCartClicked(event){
	var btn = event.target;
	var shopItem = btn.parentElement.parentElement;
	var img = shopItem.getElementsByClassName('image')[0].src; 
	var titel = shopItem.getElementsByClassName('name')[0].innerText;
	var price = shopItem.getElementsByClassName('price')[0].innerText;
	var qty = shopItem.getElementsByClassName('num')[0].innerText;
	addItemToCart(img,titel,price,qty);
	apdateCartTotal();
}

function addItemToCart(img,titel,price,qty){
	var cartRow = document.createElement('tbody');
	cartRow.classList.add('cart_row');
	var cartItems = document.getElementsByClassName('cartcontent1')[0];
	var cartItemNames = document.getElementsByClassName('cart_name');
for(var i=0; i<cartItemNames.length;i++){
	if(cartItemNames[i].innerText==titel){
		alert('this is already added to the cart');
	return;}
}	
	var cartRowContent =`<th>
	            <td width=200 class="cart_img"><img src="${img}" width="100" height="150"style="margin:15px;"/></td>
                <td width=200 class="cart_name" >${titel}</td>
                <td width=200 align="center" ><input  class="cart_qty" type="number" value="${qty}"/></td>
                <td width=200 align="center" class="cart_price" >${price}</td>
                <td width=200 align="center"><button class="remove-btn">Remove</button></td>
            </th>`;
	 cartRow.innerHTML = cartRowContent;
	cartItems.append(cartRow);
	cartRow.getElementsByClassName('remove-btn')[0].addEventListener('click',removeCartItem);
	cartRow.getElementsByClassName('cart_qty')[0].addEventListener('change',quantityChanged);
}		

function apdateCartTotal(){
	var cartItemContainer = document.getElementsByClassName('cartcontent1')[0];
	var cartRows = cartItemContainer.getElementsByClassName('cart_row');
	var total = 0;
	for(var i =0; i < cartRows.length;i++){
	var cartRow = cartRows[i];
	var priceElement = cartRow.getElementsByClassName('cart_price')[0];
	var quantityElement = cartRow.getElementsByClassName('cart_qty')[0];
	var price = parseFloat(priceElement.innerText.replace('$',''));
	var quantity = quantityElement.value;
    total = total + (price * quantity);
	console.log(price,quantity);
   	}
	total = Math.round(total*100)/100;
	document.getElementsByClassName('total')[0].innerText ='$'+ total;
   	
}


//----------add qty-----------
//var quantity = 1;
function increment(i) {
	var productCount = document.getElementById('count'+i);
	var textHolder = document.getElementById('productQuantity'+i);
	textHolder.innerText++;
	productCount.innerText = textHolder.innerText;
	
}
function decrement(i){
	var productCount = document.getElementById('count'+i);
	var textHolder = document.getElementById('productQuantity'+i);
    var qtyb = textHolder.innerText;
	qtyb--;
	( qtyb <= 1 ) ? qtyb=1 : qtyb += 0;
	textHolder.innerText = qtyb;
	productCount.innerText = qtyb;
	
}

//----------popup------------
 var cart = document.getElementById("my_cart");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  cart.style.display = "block";
}
span.onclick = function() {
  cart.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == cart) {
    cart.style.display = "none";
  }
}










