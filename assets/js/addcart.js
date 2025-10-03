const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
   cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
 });

 document.addEventListener('DOMContentLoaded',loadData);

function loadData(){
   loadContent();

}
function loadContent(){

    //Remove Food Items From Cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
    });

    //Product Item Change Event
    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
     input.addEventListener('change',changeQty);
    });
    //Product cart
    let cartBtns=document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);
        
        updateTotal();

});

//Remove Item
function removeItem(){
    // if(confirm('Are Your Sure to Remove')){ 
        let tittle=this.parentElement.querySelector('.cart-keyboard-tittle').innerHTML;
        itemList=itemList.filter(el=>el.tittle!=tittle); 
        this.parentElement.remove();
        loadContent();
    // }


}
// Change Quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadContent();
}
}
let itemList=[]
//Add Cart
function addCart(){
     let keyboard=this.parentElement;
     let tittle=keyboard.querySelector('.keyboard-tittle').
     innerHTML;
     let price=keyboard.querySelector('.keyboard-price').
     innerHTML;
     let imgSrc=keyboard.querySelector('.keyboard-img').src;
    //  console.log(tittle,price,imgSrc);
   let newProduct={tittle,price,imgSrc}
   //Check Product already Exist in Cart
   if(itemList.find((el)=>el.tittle==newProduct.tittle))
   {
    alert("Product Already added in Cart");
    return;
   }
   else{
    itemList.push(newProduct);
   }

    let newProdcutElement=createCartProduct(tittle,price,imgSrc);
    let element=document.createElement('div');
    element.innerHTML=newProdcutElement;
    let cartBasket=document.querySelector('.cart-content'); 
    cartBasket.append(element);
    loadContent();

}
function createCartProduct(tittle,price,imgSrc){
    return `
    <div class="cart-box">
              <img src="${imgSrc}" alt="" class="cart-img">
              <div class="detail-box">
                <div class="cart-keyboard-tittle">${tittle}</div>
                <div class="price-box">
                  <div class="cart-price">${price}</div>
                  <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="cart-quantity">
              </div>
              <ion-icon name="trash" class="cart-remove"></ion-icon>
            </div>
    `;

}

//Total Cart

function updateTotal()
{
    const cartItems=document.querySelectorAll('.cart-box'); 
    const totalValue=document.querySelector('.total-price');

    let total=0;
    
    cartItems.forEach(product=>{ 
         let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("Rs.","")); 
        let qty=product.querySelector('.cart-quantity').value; 
        total+=(price*qty);
product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
    }); 

 totalValue.innerHTML='Rs.'+total;


//Add Product Count in Cart Icon
const cartCount=document.querySelector('.cart-count');
let count=itemList.length;
cartCount.innerHTML=count; 

if(count==0){
    cartCount.style.display='none';
}
else{
    cartCount.style.display='block';
}
}



//  responsive menu bar
const menu=document.querySelector('.menu')
const menuList=document.querySelector('nav ul')
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
})

