function func(){
    let savol = prompt(" login: admin / user");
    let javob = document.getElementById('javob');
    if ( savol == 'admin' || savol == 'ADMIN' || savol == 'Admin'){
        let parol = prompt('parolni kiriting');
        console.log('parol :' + parol)
        // javob.innerHTML = parol;
    }   else if( savol == undefined || savol == null || savol == '' ){
        javob.innerHTML = "Canceled"
    }   else if( savol == 'user' ){
        javob.innerHTML = 'Welcome user :)'
    }   else if (savol ){
    javob.innerHTML = 'Bunday login mavjud emas :)'
    }
}
func()