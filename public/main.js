function cad(){
    var nome = document.getElementById('username').value
    var email = document.getElementById('useremail').value
    var senha = document.getElementById('userpassword').value

    var user = JSON.parse(localStorage.getItem('users') || '[]')
    user.push({
        nome:nome,
        email:email,
        senha:senha
    })






    localStorage.setItem('users',JSON.stringify(user))

    const avatar_content = document.getElementById('avatar')
    const name = document.getElementById('username').value
    fetch(`https://avatars.dicebear.com/api/bottts/${name}.svg`)
    .then(data => {
        setTimeout(() => {
            const div = document.createElement('div')
            var output = `
            <div>
            <img src='`+data.url+`'>
            </div>
            
            `
            div.innerHTML = output
            avatar_content.appendChild(div)
        }, 2000);
    })
    setTimeout(() => {
        location.href='/app/home'
    }, 4000);
}
function log(){
    var email = document.getElementById('useremail').value
    var senha = document.getElementById('userpassword').value

    var token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2)
  localStorage.setItem('token',token)
  var uservalid ={
    nome:"",
    senha:"",
    email:""
  }
  listauser=[]
  listauser = JSON.parse(localStorage.getItem('users'))
  listauser.forEach((item) =>{
    if( senha != item.senha){
        alert('Email ou senha incorreta verefique os dados')
        location.href='/login'
    }
    if(email == item.email && senha == item.senha){
      var uservalid ={
        nome:item.nome,
        senha:item.senha,
        email:item.email
      }
      localStorage.setItem('uservalid',JSON.stringify(uservalid))
      setTimeout(() => {
        alert('Usuario logado com sucesso')
        location.href='/home'
    }, 3000);
    }

  })
}
function start(){
    const container = document.getElementById('postcontent')
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(data => {
        const { posts } = data
        posts.map((item) => {
            const div = document.createElement('div')
            for(id in posts){
                var output = `
                <div>
                <strong>`+item.title+`</strong>
                <p>`+item.body+`</p>
                <i class='bx bxs-heart'></i><span>`+item.reactions+`</span>
                </div>
                
                `
                div.innerHTML= output
                container.appendChild(div)
            }
        })
    })
}