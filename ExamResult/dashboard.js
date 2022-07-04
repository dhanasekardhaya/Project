const targetDiv = document.getElementById("inner_container");
const markAdd = document.getElementById("add");
markAdd.addEventListener('click', () => {
    if(targetDiv.style.display != "none")
    {
        targetDiv.style.display = "none";
    }
    else{
         targetDiv.style.display = "block";
    }
})

/*** Values Get Function*/

const formValue = document.forms.markEntryForm;
const apiUrl = "https://reqres.in/api/users/2";



const handleSubmit = (event) =>{
   event.preventDefault();
   const formData = new FormData(formValue);
const jasonData = JSON.stringify(Object.fromEntries(formData))

    fetch("https://reqres.in/api/users/2", {
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        },
        //   body: jasonData,
    })
    .then((res)=>res.json())
    .then((data) => {
        console.log(data);
    })
}

// const handleSubmit = (event) =>{
//    event.preventDefault();
    
//  //   const data = [...formData.entries()];
//   //  const dataString = data.map((x) => `${x[0]}=${x[1]}`);
//     //console.log(dataString);

//    // const dataString2 = new URLSearchParams(formData).toString();
//     //console.log(dataString2);

//     //const jasonData = Object.fromEntries(formData);
//     //console.log(jasonData);

//     const jasonData = JSON.stringify(Object.fromEntries(formData));
//     //console.log(jasonData);

//     // 1. xmlhttprequest

//     // let xhr = new XMLHttpRequest()
//     // xhr.open("GET", "http://127.0.0.1:5500/list.html", true);
//     // xhr.onload = function (){
//     //     const obj = xhr.responseText;
//     //     console.log(obj.data.id);
//     // }
//     // xhr.send();

//     fetch("https://reqres.in/api/users/2", {
//         method: "POST",
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: jasonData,
//     })
//     .then((res)=>res.json())
//     .then((data) => {
//         console.log(JSON.stringify(data));
//     })
//     ;

// }
formValue.addEventListener('click', handleSubmit);


// function logout(){
//     window.location.href="Login.html";
// }
