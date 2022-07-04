// fetch('https://fakestoreapi.com/products').then((data)=>{
//     return data.json();
// }).then((completedata)=>{
//     let data1 = "";
//     completedata.map((values)=>{
//         data1 += `<div class="card">
//         <h1 class="title">${values.title}</h1>
//         <img src="${values.image}" 
//         alt="image" class="images">
//         <p>${values.description}</p>
//         <p class="category">${values.category}</p>
//         <p class="price">${values.price}</p>

//     </div>`
//     });
//     document.getElementById('cards').innerHTML=data1;
// }).catch((err)=>{
//     console.log(err);

// });

const searchText = document.getElementById("searchbar");

searchText.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filterText = data.filter( (values) =>{
    return values.title.toLowerCase().includes(searchString);
    });
    getData(filterText);

});

async function getData(){
    let response = await fetch("https://fakestoreapi.com/products");
    data = await response.json();
    let display = "";
    data.map((values)=>{
        display += `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" 
        alt="image" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>

    </div>`

    })
    document.getElementById('cards').innerHTML=display;

}

getData();