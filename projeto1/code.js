function banco(){

    const ds = [
                {id:1,login:"Paul",senha:"1234",email:"paul@gmail.com"},
                {id:2,login:"Ringo",senha:"12345",email:"ringo@gmail.com"},
                {id:3,login:"John",senha:"123456",email:"John@gmail.com"}
                ]

                let bd = JSON.stringify(ds)
                localStorage.setItem("banco", bd)

}

function login(){

    let dados = JSON.parse(localStorage.getItem("banco"))

    let login = document.querySelector("#Login").value
    let senha = document.querySelector("#senha").value

    for(let i=0; i<dados.length;i++){
        
        if(login == dados[i].login && senha == dados[i].senha){
            alert("Logado!")
        }
        
        
    }

}