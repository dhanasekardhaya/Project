let output = document.getElementById('box');

function display(num){
    output.value += num;
    console.log(output.value);
}

function equal(){
    try{
        output.value = eval(output.value);
    }
    catch{
        output.value = "Error";
    }
    
}

function remove(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0, -1);
}