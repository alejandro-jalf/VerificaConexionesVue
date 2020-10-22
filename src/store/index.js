import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import  { urlConexion } from "../config";

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
        login: false
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
        }
    }
});
