let result = document.getElementById('box');
display = (num) => {
    result.value += num;
}

function equal(){
    let out = Array.from(result.value);
    console.log(out);
    let mm = out.map = (value) =>{
        console.log(value);

    }
    console.log(mm());


}