function login(){
    var usernumbers = ["000","001","002"];
    var passwords = ["000","001","002"];
    let obj = document.getElementById("login_input");
    let button = obj.querySelector("button");
    let usernumber = document.getElementById("user_number");
    let password = document.getElementById("password");
    button.onclick = () => {
        if(usernumber.value == ""){
            window.alert("请输入账号");
        }
        else if(password.value == ""){
            window.alert("请输入密码");
        }
        else{
            let i = 0 ;
            for(; i < passwords.length; ++i){
                if(usernumbers[i] == usernumber.value){
                    if(passwords[i] == password.value){
                        document.cookie = "1";
                        window.location.replace('form.html');
                    }
                    else{
                        window.alert("密码错误");
                    }
                    break;
                }
            }
            if(i == passwords.length){
                window.alert("账号不存在");
            }
        }
    }
}

if(document.cookie == "1"){
    window.location = "form.html";
}else{
    login();
}
