const userDetails = {
   Dhana :{
        userName:'admin',
        userPassword:'admin123',
    }
}

function validate()
{
    const user = document.getElementById("userName").value;
    const pass = document.getElementById("userPassword").value;
    const nameValid = userDetails.Dhana.userName;
    console.log(nameValid);
    const passValid = userDetails.Dhana.userPassword;
    if(user.trim()==="" && pass.trim()===""){
        alert("Enter valid name")
        
    }
    else if(user!==nameValid && pass===passValid){
        alert(`Incorrect UserName ${user}`);
    }
    else if(user===nameValid && pass!==passValid){
        alert(`Incorrect UserPassword`);
    }
    else if(user===nameValid && pass===passValid)
    {
        window.location.href="dashboard.html";
        //document.write(user);
    }

}

/**** Dashboard Coding */

