
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
    },                                   //Upto to here is fantasy books database
    
    
                                          //sports books database starts here
    {
        name:'Sports Ency : Gymnastics & Cycling',
        tag:'sp_01',
        price:890,
        inCart:0        
    },
    
    {
        name:'Sports Ency : Ball Sports 1',
        tag:'sp_02',
        price:901,
        inCart:0        
    },
    
    {
        name:' Sports Ency : Racquet Sports & Athletics',
        tag:'sp_03',
        price:1000,
        inCart:0        
    },
    
    {
        name:'Sports Ency : Target & Water Sports',
        tag:'sp_04',
        price:1250,
        inCart:0        
    },
    
    {
        name:'Sports Event Management',
        tag:'sp_05',
        price:450,
        inCart:0        
    },
    
    {
        name:'The Sport Business Future',
        tag:'sp_06',
        price:650,
        inCart:0        
    },
    
    {
        name:'Yoga For Sports',
        tag:'sp_07',
        price:120,
        inCart:0        
    },
    
    {
        name:'Complete Conditioning For Rugby',
        tag:'sp_08',
        price:320,
        inCart:0        
    },
    
    {
        name:'Ferrari Sticker Book',
        tag:'sp_09',
        price:99,
        inCart:0        
    },
    
    {
        name:'Physics of Sun and Star Spots (IAU S273)',
        tag:'sp_10',
        price:150,
        inCart:0        
    },
    
    {
        name:'Sports',
        tag:'sp_11',
        price:80,
        inCart:0        
    },
    
    {
        name:'Sports Ency : Winter & Miscellaneous',
        tag:'sp_12',
        price:850,
        inCart:0        
    },                                   //Upto to here is sports books database
    
                                          //animals and birds books database starts here
    {
        name:'Snakes The Wildlife Collection',
        tag:'ab_01',
        price:890,
        inCart:0        
    },
    
    {
        name:'Textbook Of Wildlife Management',
        tag:'ab_02',
        price:901,
        inCart:0        
    },
    
    {
        name:'Treasures of India Wildlife',
        tag:'ab_03',
        price:1000,
        inCart:0        
    },
    
    {
        name:'Animal Farm - 1',
        tag:'ab_04',
        price:1250,
        inCart:0        
    },
    
    {
        name:'Animal Farm - 2',
        tag:'ab_05',
        price:450,
        inCart:0        
    },
    
    {
        name:'Animal Diversity',
        tag:'ab_06',
        price:650,
        inCart:0        
    },
    
    {
        name:'Bird Love',
        tag:'ab_07',
        price:120,
        inCart:0        
    },
    
    {
        name:'Facts & More Birds',
        tag:'ab_08',
        price:320,
        inCart:0        
    },
    
    {
        name:'Splendid Plumage Indian Birds',
        tag:'ab_09',
        price:99,
        inCart:0        
    },
    
    {
        name:'Song Birds Of Southern India',
        tag:'ab_10',
        price:150,
        inCart:0        
    },
    
    {
        name:'Remarkable Birds',
        tag:'ab_11',
        price:80,
        inCart:0        
    },
    
    {
        name:'Birds : Basic Concepts',
        tag:'ab_12',
        price:850,
        inCart:0        
    },                                   //Upto to here is animals and birds books database
    
    
                                      //CBSE books database starts here
    {
        name:'Mathematics Class 11 Support Books : Cbse',
        tag:'cb_01',
        price:950,
        inCart:0        
    },
    
    {
        name:'Science Class 10 Support Books : Cbse',
        tag:'cb_02',
        price:555,
        inCart:0        
    },
    
    {
        name:'Economics Class 11 Set Of 2 Books : Cbse',
        tag:'cb_03',
        price:1230,
        inCart:0        
    },
    
    {
        name:'Social Science Class 10 Support Books : Cbse',
        tag:'cb_04',
        price:350,
        inCart:0        
    },
    
    {
        name:'Text Book Of Biology Class 12 : Cbse',
        tag:'cb_05',
        price:1290,
        inCart:0        
    },
    
    {
        name:'Prisms Mathematics Work Book Class 6 : Cbse',
        tag:'cb_06',
        price:150,
        inCart:0        
    },
    
    {
        name:'New Green Tree Environmental Studies Book 1 : Cbse',
        tag:'cb_07',
        price:88,
        inCart:0        
    },
    
    {
        name:'Modern Abc Plus Of Biology Class 11 Set Of 2 Books : Cbse',
        tag:'cb_08',
        price:1100,
        inCart:0        
    },
    
    {
        name:'Excellent Way To Excel Chemistry Work Book For 10th Board Students Based On Cbse',
        tag:'cb_09',
        price:250,
        inCart:0        
    },
    
    {
        name:'Together With Physics Class 11 Lab Manual With Practical Manual : Cbse',
        tag:'cb_10',
        price:650,
        inCart:0        
    },
    
    {
        name:'Together With Chemistry Lab Manual Class 11 Set Of Practical Manual With Viva Voce : Cbse',
        tag:'cb_11',
        price:650,
        inCart:0        
    },
    
    {
        name:'Hindi Class 6 Ncert & Cbse Question Bank',
        tag:'cb_12',
        price:25,
        inCart:0        
    },                                   //Upto to here is CBSE books database
    
                                          //ICSE books database starts here
    {
        name:'Kannada Jnanadeepa Class 9 & 10 Icse',
        tag:'ic_01',
        price:180,
        inCart:0        
    },
    
    {
        name:'Together With Biology Lab Manualclass 10 Set Of 2 Books With Practical Manual : Icse',
        tag:'ic_02',
        price:450,
        inCart:0        
    },
    
    {
        name:'ICSE Social Studies, 2019 Edition, Book 3',
        tag:'ic_03',
        price:201,
        inCart:0        
    },
    
    {
        name:'Icse 10 Years Solved Papers Class 10 For 2021 Examination',
        tag:'ic_04',
        price:850,
        inCart:0        
    },
    
    {
        name:'Environmental Studies Based On The Latest Cisce Curriculum Book 1 : Icse',
        tag:'ic_05',
        price:150,
        inCart:0        
    },
    
    {
        name:'Icse Art Of Effective English Writing For Classes 9 & 10',
        tag:'ic_06',
        price:621,
        inCart:0        
    },
    
    {
        name:'Gem Guide To Biology Class 10 : Icse',
        tag:'ic_07',
        price:175,
        inCart:0        
    },
    
    {
        name:'Gem Guide To Simplified Chemistry Class 10 : Icse',
        tag:'ic_08',
        price:140,
        inCart:0        
    },
    
    {
        name:'ICSE Computer Studies 7',
        tag:'ic_09',
        price:210,
        inCart:0        
    },
    
    {
        name:'ICSE: Geography, Class 8',
        tag:'ic_10',
        price:315,
        inCart:0        
    },
    
    {
        name:'ICSE Physics - 7, 2019 Edition',
        tag:'ic_11',
        price:300,
        inCart:0        
    },
    
    {
        name:'ICSE: History and Civics, Class 8',
        tag:'ic_12',
        price:225,
        inCart:0        
    }                                   //Upto to here is ICSE books database
    
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












