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
            {titulo: "Inicio", icono: "house-fill", activo: false, ruta: "/"},
            {titulo: "Existencias", icono: "card-checklist", activo: false, ruta: "/about"},
            {titulo: "Conexiones", icono: "cloud-fill", activo: false, ruta: "/conexiones"},
            {titulo: "Login", icono: "people", activo: false, ruta: "/login"}
        ],
        login: false,
        user: "",
        privilegios: "",
        accessTo: ["Login"],
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
        setActive(state, tab) {
            state.tabs.forEach(element => {
                element.activo = false;
            });
            tab.activo = true;
        },
        setActiveByTitulo(state, title) {
            const tabFinded = state.tabs.find((tab) => tab.titulo === (title.toLowerCase()));
            const tab = (typeof tabFinded === "undefined") ? state.tabs[0] : tabFinded;
            this.setActive(tab);
        },
        login(state, user) {
            state.user = user.nameUser;
            state.privilegios = user.privilegios;
            state.accessTo = user.accessTo;
            state.login = true;
        },
        logout(state) {
            state.user = "";
            state.privilegios = "";
            state.accessTo = [];
            state.login = false;
        },
        showAlertDialog: (state, [ message = null, title = "Advertencia", background = "warning", textColor = "light" ]) => {
            console.log(message , title, background , textColor );
            if (message === null) return;
            state.alertShow = true;
            state.alertMessage = message;
            state.alertTitle = title;
            state.alertHeaderBg = background;
            state.alertHeaderText = textColor;
        },
        hideAlertDialog(state) {
            state.alertShow = false;
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
        initSesion({ commit }, [ user, password ]) {
            const userFinded = users.find((element) => (
                element.nameUser === user &&
                element.password === password
            ));
            if (typeof userFinded !== "undefined") commit("login", userFinded);
        }
    }
});
