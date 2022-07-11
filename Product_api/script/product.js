let show = document.getElementById("product");
let data = [];
async function loadItems(){
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let productDetails = await response.json();
        data = productDetails.map((values) =>{
            return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>
            </div>`;
        })
    }
    catch(err){
        console.log(err);
    }
    show.innerHTML=data
};

// Filter Men

async function menFilter(){
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let productDetails = await response.json();
        let check = "men's clothing";
        data = productDetails.filter((values) =>{
            if(check.toLocaleLowerCase() == values.category.toLocaleLowerCase())
            {
                return data;
            }
        });

        menCheck = data.map((values) =>{
            return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>        
            </div>`;
        })
        
        
    }
    catch(err){
        console.log(err);
    }
    alert("You Have Selected Men Collections");
    show.innerHTML = menCheck;
};

async function womenFilter(){
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let productDetails = await response.json();
        let check = "women's clothing";
        data = productDetails.filter((values) =>{
            if(check.toLocaleLowerCase() == values.category.toLocaleLowerCase())
            {
                return data;
            }
        });

        womenCheck = data.map((values) =>{
            return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>        
            </div>`;
        })
        
        
    }
    catch(err){
        console.log(err);
    }
    alert("You Have Selected Women Collections");
    show.innerHTML = womenCheck;
};

async function electronic(){
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let productDetails = await response.json();
        let check = "electronics";
        data = productDetails.filter((values) =>{
            if(check.toLocaleLowerCase() == values.category.toLocaleLowerCase())
            {
                return data;
            }
        });

        electronic = data.map((values) =>{
            return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>        
            </div>`;
        })
        
        
    }
    catch(err){
        console.log(err);
    }
    alert("You Have Selected Electornics Collections");
    show.innerHTML = electronic;
};

async function gold(){
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let productDetails = await response.json();
        let check = "jewelery";
        data = productDetails.filter((values) =>{
            if(check.toLocaleLowerCase() == values.category.toLocaleLowerCase())
            {
                return data;
            }
        });

        goldItems = data.map((values) =>{
            return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>        
            </div>`;
        })
        
        
    }
    catch(err){
        console.log(err);
    }
    alert("You Have Selected Gold Collections");
    show.innerHTML = goldItems;
};
loadItems();
document.getElementById("all").addEventListener('click', loadItems);

document.getElementById("men").addEventListener('click', menFilter);

document.getElementById("women").addEventListener('click', womenFilter);

document.getElementById("elect").addEventListener('click', electronic);

document.getElementById("gold").addEventListener('click', gold);

let searchString = document.getElementById("search-input");

document.getElementById("search").addEventListener('click', test);

async function test(){
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let productDetails = await response.json();
        let searchString = document.getElementById("search-input");
        let filterValue = searchString.value.toLocaleLowerCase();
        console.log(filterValue);
        data = productDetails.filter((values) =>{
            return (values.category.toLowerCase().includes(filterValue)
            || values.title.toLowerCase().includes(filterValue));
        });

     

        goldItems = data.map((values) =>{
            return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>        
            </div>`;
        })
        
        
    }
    catch(err){
        console.log(err);
    }
    show.innerHTML = goldItems;
};


let searchString1 = document.getElementById("search-input");

searchString1.addEventListener('keyup', async ()=>{
    let response = await fetch("https://fakestoreapi.com/products");
        let productDetails = await response.json();
        let searchString = document.getElementById("search-input");
        let filterValue = searchString.value.toLocaleLowerCase();
        console.log(filterValue);
        data = productDetails.filter((values) =>{
            return (values.category.toLowerCase().includes(filterValue)
            || values.title.toLowerCase().includes(filterValue));
        });
        goldItems = data.map((values) =>{
            return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>        
            </div>`;
        })
        show.innerHTML = goldItems;
})