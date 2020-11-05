let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Girl In Room 105',
        tag:'book1',
        price:15,
        inCart:0        
    },
    
    {
        name:'Half Girlfriend',
        tag:'book2',
        price:18,
        inCart:0        
    },
    
    {
        name:'2 States',
        tag:'book3',
        price:15,
        inCart:0        
    },
    
    {
        name:'A Girl To Remember',
        tag:'book4',
        price:32,
        inCart:0        
    },
    
    {
        name:'Realism in the Twentieth-Century Indian Novel: Colonial Difference and Literary Form',
        tag:'book5',
        price:25,
        inCart:0        
    },
    
    {
        name:'Chandragupta',
        tag:'book6',
        price:45,
        inCart:0        
    }
    
]

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('.cartcontent').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
         document.querySelector('.cartcontent').textContent=productNumbers+1;
        
    }
    else{
      localStorage.setItem('cartNumbers',1);
        document.querySelector('.cartcontent').textContent=1;
    }
    
    setItems(product);
    
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        
        if(cartItems[product.tag] == undefined)
            {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }
        
        cartItems[product.tag].inCart += 1; 
    }
    
    else{
      product.inCart = 1;
      cartItems = {
        [product.tag]: product
      }
    }
       
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));   
    }
    
function totalCost(product){
    
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
  
    }
    else{
    localStorage.setItem("totalCost", product.price);
    }
}



function displayCart(){
    
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector(".products");
   
    
    
//    console.log(cartItems);
    if(cartItems && productContainer){
       productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
          console.log(item);  
            productContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0" >${item.name}</h6>
            <small class="text-muted">${item.tag}</small>
          </div>
          <span class="text-muted">$${item.price}</span>
        </li>`
        })
    };
    
     let totalContainer = document.querySelector(".totals");
    console.log(cartCost);
}

onLoadCartNumbers();
displayCart();












