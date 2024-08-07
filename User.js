class User{
    constructor (fullname, email, password) {
        this.fullname= fullname
        this.email= email
        this.password= password
    }

    login(email, password) {
            
        if(this.email === email && this.password === password){
            console.log("Login bem sucedido!")
        }
        else{
            console.log("Falha no login, tente novamente!")
            }
        }
    }
          
const usuario = new User("Daiara", "larissa@gmail.com", "12333")
usuario.login("larissa@gmail.com", "12333")
