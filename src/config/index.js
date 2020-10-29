module.exports = {
    urlConexion: process.env.VUE_APP_URL_API,
    namesSucursales: JSON.parse(process.env.VUE_APP_NAME_SUCURSALES),
    apiUrlLogin: process.env.VUE_APP_ARL_API_LOGIN,
    apiKeyFirebase: process.env.VUE_APP_FIREBASE_APIKEY,
    storageFirebase: process.env.VUE_APP_FIREBASE_STORAGE
}