
let Usuarios = [];

let agregarUsuario = document.querySelector("#formularioRegistro")
agregarUsuario.addEventListener("submit", event => {
    event.preventDefault()
    let usuario = {
        nombre: event.target.nombre.value,
        apellido: event.target.apellido.value,
        email: event.target.email.value,
        password: event.target.password.value
    }
    Usuarios.push(usuario);
    console.log(usuario);
    let usuariosJson = JSON.stringify(Usuarios);
    localStorage.setItem("Datos", usuariosJson);
    document.getElementById("formularioRegistro").reset()
})
console.log(Usuarios)



function validarFormulario() { 
    
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(nombre.value == ""){
        nombre.setCustomValidity('por favor ingresa el nombre')
    }else{
        nombre.setCustomValidity('')
    }

    if(apellido.value == ""){
        apellido.setCustomValidity('por favor ingresa el apellido')
    }else{
        apellido.setCustomValidity('')
    }

    if(email.value == ""){
        email.setCustomValidity('Parece que esto no es un correo electrónico')
    }else{
        email.setCustomValidity('')
    }
    if(password.value == ""){
        password.setCustomValidity('Ingresa una contraseña')
    }else{
        password.setCustomValidity('')
    }
    
}



