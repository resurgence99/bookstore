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
        cartNumbers();
    })
}

function cartNumbers(){
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
    
}














