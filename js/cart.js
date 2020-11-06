
let carts = document.querySelectorAll('.add-cart');

let products = [
                              //indian books databse starts here
    {
        name:'Girl In Room 105',
        tag:'ind_01',
        price:15,
        inCart:0        
    },
    
    {
        name:'Half Girlfriend',
        tag:'ind_02',
        price:18,
        inCart:0        
    },
    
    {
        name:'2 States',
        tag:'ind_03',
        price:15,
        inCart:0        
    },
    
    {
        name:'A Girl To Remember',
        tag:'ind_04',
        price:32,
        inCart:0        
    },
    
    {
        name:'Realism in the Twentieth-Century Indian Novel',
        tag:'ind_05',
        price:25,
        inCart:0        
    },
    
    {
        name:'Chandragupta',
        tag:'ind_06',
        price:45,
        inCart:0        
    },
    
    {
        name:'Ashoka : The Great & Compassionate King',
        tag:'ind_07',
        price:80,
        inCart:0        
    },
    
    {
        name:'Abhimanyu - Vol 533',
        tag:'ind_08',
        price:50,
        inCart:0        
    },
    
    {
        name:'Ramayana',
        tag:'ind_09',
        price:250,
        inCart:0        
    },
    
    {
        name:'Story Of Mahabharatha',
        tag:'ind_10',
        price:255,
        inCart:0        
    },
    
    {
        name:'Vishnu',
        tag:'ind_11',
        price:45,
        inCart:0        
    },
    
    {
        name:'Gautama Bhuddha & Origin Of Buddhism',
        tag:'ind_12',
        price:82,
        inCart:0        
    },                                 //Upto to here is indian books database
    
    
                                      //fantasy books database starts here
    {
        name:'Faerie Tale: A Novel Of Terror & Fantasy',
        tag:'ft_01',
        price:25,
        inCart:0        
    },
    
    {
        name:'Court Of Thorns & Roses',
        tag:'ft_02',
        price:30,
        inCart:0        
    },
    
    {
        name:'Artemis Fowl & The Time Paradox',
        tag:'ft_03',
        price:25,
        inCart:0        
    },
    
    {
        name:'Lord Of The Rings',
        tag:'ft_04',
        price:150,
        inCart:0        
    },
    
    {
        name:'A Game of Thrones',
        tag:'ft_05',
        price:181,
        inCart:0        
    },
    
    {
        name:'A Song of Ice and Fire Chronicle Starter',
        tag:'ft_06',
        price:62,
        inCart:0        
    },
    
    {
        name:'Time Of Justice',
        tag:'ft_07',
        price:70,
        inCart:0        
    },
    
    {
        name:'Slow Regard Of Silent Things',
        tag:'ft_08',
        price:55,
        inCart:0        
    },
    
    {
        name:'Snapshot',
        tag:'ft_09',
        price:99,
        inCart:0        
    },
    
    {
        name:'Fantastic Voyage',
        tag:'ft_10',
        price:111,
        inCart:0        
    },
    
    {
        name:'Name Of The Wind',
        tag:'ft_11',
        price:31,
        inCart:0        
    },
    
    {
        name:'Sands Of Mars',
        tag:'ft_12',
        price:51,
        inCart:0        
    }                                   //Upto to here is fantasy books database
    
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
    
    let cartCost = localStorage.getItem('totalCost');
   
    
    
//    console.log(cartItems);
    if(cartItems && productContainer){
       productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
//          console.log(item);  
            productContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between lg-condensed">
          <div style="color:#004e92">
            <h6 class="my-1" ><em>${item.name}</em></h6>
            <small class="text-muted">Total Copies - ${item.inCart} </small>
          </div>
          <span class="" style="color:#004e92"><strong>₹${item.inCart*item.price}.00</strong></span>
        </li>`
        })
    
    productContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between">
          <span style="color:#004e92" ><strong>Cart Total</strong> <small style="font-size:12px">(Includes GST)</small></span>
            <span class="" style="color:#004e92"><strong>₹${cartCost}.00</strong></span>
        </li><br>

<form class="">
        <div class="input-group">
            <button onclick="clearcart()" class="btn btn-light">Clear Cart</button>

        </div>
      </form>`};
//     let totalContainer = document.querySelector(".totals");
//    console.log(cartCost);
}

onLoadCartNumbers();
displayCart();












