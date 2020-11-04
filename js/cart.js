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
    document.getElementById("result").innerHTML = localStorage.getItem("totalcost");
    
    document.getElementById("result").innerHTML =$item.name;
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
        // Retrieve
  
    }
    else{
    localStorage.setItem("totalCost", product.price);
        // Retrieve
    }
}



//function displayCart(){
//    
//    let cartItems = localStorage.getItem("productsInCart");
//    cartItems = JSON.parse(cartItems);
//    
//    let productContainer = document.querySelector(".products");
//    
//    console.log(cartItems);
//    if(cartItems && productContainer){
//       productContainer.innerHTML = '';
//        Object.values(cartItems).map(item => {
//            productContainer.innerHTML += '
//            
//            
//                    '
//        })
//    }
//}

onLoadCartNumbers();
//displayCart();












