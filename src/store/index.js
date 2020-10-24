import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import  { urlConexion, users } from "../config";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        conexiones: [],
        loading: false,
        tabs: [
            {titulo: "Inicio", icono: "house-fill", ruta: "/", name: "Home"},
            {titulo: "About", icono: "card-checklist", ruta: "/about", name: "About"},
            {titulo: "Conexiones", icono: "cloud-fill", ruta: "/conexiones", name: "Conexiones"}
        ],
        login: localStorage.getItem("session") || false,
        userName: localStorage.getItem("userName") || "",
        userPrivilegios: localStorage.getItem("userPrivilegios") || "",
        userAccessTo: JSON.parse(localStorage.getItem("userAccessTo")) || ["Login"],
        alertShow: false,
        alertMessage: "Prueba de alerta",
        alertTitle: "Advertencia",
        alertHeaderBg: "warning",
        alertHeaderText: "light"
    },
    mutations: {
        setData(state, data) {
            state.conexiones = data;
        },
        setLoading(state, status) {
            state.loading = status;
        },
        login(state, user) {
            state.userName = user.nameUser;
            state.userPrivilegios = user.privilegios;
            state.userAccessTo = user.accessTo;
            state.login = true;

            localStorage.setItem("userName", user.nameUser);
            localStorage.setItem("userPrivilegios", user.privilegios);
            const stringAccess = JSON.stringify(user.accessTo);
            localStorage.setItem("userAccessTo", stringAccess);
            localStorage.setItem("session", true);
        },
        logout(state, router) {
            state.userName = "";
            state.userPrivilegios = "";
            state.userAccessTo = [];
            state.login = false;

            localStorage.removeItem("userName");
            localStorage.removeItem("userPrivilegios");
            localStorage.removeItem("userAccessTo");
            localStorage.removeItem("session");
            
            router.push({ name: "Login" });
        },
        showAlertDialog: (state, [ message = null, title = "Advertencia", background = "warning", textColor = "light" ]) => {
            if (message === null) return;
            state.alertShow = true;
            state.alertMessage = message;
            state.alertTitle = title;
            state.alertHeaderBg = background;
            state.alertHeaderText = textColor;
        },
        hideAlertDialog(state) {
            state.alertShow = false;
        },
        tabPermision(state) { //sin utilizar 
            const tabs = state.tabs.filter((tab) => {
                const accessFinded = state.userAccessTo.find((access) => access === tab.name);
                return (typeof accessFinded !== "undefined") ? true : false;
            });
            console.log(tabs);
            return tabs
        }
    },
    actions: {
        getConexions({ commit }) {
            commit("setLoading", true);
            axios.get(urlConexion)
            .then(function (response) {
                commit("setData", response.data.data);
                commit("setLoading", false);
            })
            .catch(function (error) {
                console.log(error);
                commit("setLoading", false);
            });
        },
        initSesion({ commit }, [ user, password, router ]) {
            user = user.trim();
            password = password.trim();
            const userFinded = users.find((element) => {
                return (element.nameUser === user &&
                element.password === password);
            });
            if (typeof userFinded !== "undefined") {
                commit("login", userFinded);
                router.push({ name: userFinded.accessTo[0] });
                return
            }
            commit("showAlertDialog", ["Usuario o contraseña incorrecta"])
        },
        setActiveByTitulo({ commit, state }, title) {
            const tabFinded = state.tabs.find((tab) => tab.titulo === (title.toLowerCase()));
            const tab = (typeof tabFinded === "undefined") ? state.tabs[0] : tabFinded;
            commit("setActive", tab);
        }
    }
});
