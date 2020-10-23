const users = [
    {
        nameUser: process.env.VUE_APP_USER1,
        password: process.env.VUE_APP_PASSWORD1,
        privilegios: "superusuario",
        accessTo: ["Home", "About", "Login", "Conexiones"]
    },
    {
        nameUser: process.env.VUE_APP_USER2,
        password: process.env.VUE_APP_PASSWORD2,
        privilegios: "invitado",
        accessTo: ["About"]
    }
]
module.exports = {
    urlConexion: process.env.VUE_APP_URL_API,
    namesSucursales: JSON.parse(process.env.VUE_APP_NAME_SUCURSALES),
    users
}