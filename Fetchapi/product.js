const productList = document.getElementById('cards');

const cartItems = document.getElementById("cards1");

const searchText = document.getElementById("searchbar");
let productDetails = [];

searchText.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filterString = productDetails.filter((values) => {
        return (values.title.toLowerCase().includes(searchString) || 
        values.category.toLowerCase().includes(searchString));
    });

    displayItem(filterString);

});

export const loadItems = async () =>{
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        productDetails = await response.json();
        displayItem(productDetails);
//        console.log(productDetails);
    }
    catch(err){
        console.log(err);
    }
};
export const displayItem = (character) => {
    let display = character.map((values) => {
        return `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src="${values.image}" 
                alt="image" class="images">
                <p>${values.description}</p>
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>
                <button onclick="dataId(${values.id})">Add Cart</button>
        
            </div>`;
        
    })
    .join('');
    productList.innerHTML = display;
};
loadItems();
let cart=[];

export function dataId(id){
  // users.classList.toggle("hide");

    if(cart.some((item) => item.id === id)){
        alert("Product is already in cart!!")
    }
    else{
    let item = productDetails.find((product)=>product.id === id);
    cart.push({
        ...item,
        numberOfItem:1
    });
    console.log(cart);
    }

    updateCart();
}

function updateCart(){
    rendingCards();
}

// Rendering cards

function rendingCards(){
    productList.classList.toggle("hide");

    cart.forEach((values) =>{
        cartItems.innerHTML += `<div class="cards1">
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" 
        alt="image" class="images">
        <p class="price">${values.price}</p>
        <button>-<button>
        <p>${values.numberOfItem}</p>
        <button>+<button>

    </div>`

    })
}

export function dhana(){
    let a = [1, 2, 3];
}