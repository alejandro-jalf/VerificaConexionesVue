<template>
  <div>
    <b-sidebar id="sidebar-1" title="SPA 2020" :backdrop="true">
      <div class="px-3 py-5 overflow-auto">
          <div class="d-flex justify-content-center">
            <b-avatar variant="info" size="6rem"></b-avatar>
          </div>
        <div class="d-flex justify-content-around">
            <div>
                <strong>{{ userName }}</strong>
            </div>
        </div>
        <b-list-group class="mt-2 mb-5">
            <b-list-group-item v-for="(tab, indice) in tabs"
                :to="tab.ruta"
                :active="isFocused(tab)"
                variant="light"
                :key="indice"
                :disabled="actived(tab, userAccessTo)"
                class="d-flex justify-content-between align-items-center"
            >
                <div>
                    <b-icon :icon="tab.icono"></b-icon>
                    {{tab.titulo}}
                </div>
                <b-badge v-if="actived(tab, userAccessTo)" variant="danger" pill>off</b-badge>
            </b-list-group-item>
        </b-list-group>
        <b-button block variant="info" @click="logout(router)">Cerrar sesion</b-button>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    name: "NavBarSlider",
    props: {
        router: Object
    },
    methods: {
        ...mapMutations([
            'logout'
        ]),
        actived({ name }, access) {
            const finded = access.find(element => element === name)
            return (typeof finded === "undefined");
        },
        isFocused({ name }) {
            return (this.$route.name === name);
        }
    },
    computed: {
        ...mapState([
            'tabs',
            'userAccessTo',
            'userName',
        ])
    }
}
</script>
