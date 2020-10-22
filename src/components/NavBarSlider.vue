<template>
  <div>
    <b-sidebar id="sidebar-1" title="SPA 2020" :backdrop="true">
      <div class="px-3 py-5 overflow-auto">
          <div class="d-flex justify-content-center">
            <b-avatar variant="info" size="6rem"></b-avatar>
          </div>
        <div class="d-flex justify-content-around">
            <div>
                <strong>aleflo_1996@outlook.com</strong>
            </div>
            <b-button variant="info">Salir</b-button>
        </div>
        <b-list-group class="mt-2 mb-5">
            <b-list-group-item v-for="(tab, indice) in tabs"
                :to="tab.ruta"
                :active="tab.activo"
                variant="light"
                :key="indice"
                @click="setActive(tab)"
            >
                <b-icon :icon="tab.icono"></b-icon>
                {{tab.titulo}}
            </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    name: "NavBarSlider",
    methods: {
        ...mapMutations([
            'setActive'
        ])
    },
    computed: {
        ...mapState([
            'tabs'
        ])
    }
}
</script>
