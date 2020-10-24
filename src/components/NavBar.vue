<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">SPA 2020</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse1" v-b-toggle.sidebar-1></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav align="right">
            <b-nav-item v-for="(tab, index) in tabs" :to="tab.ruta" :disabled="actived(tab, userAccessTo)" :key="index">{{tab.titulo}}</b-nav-item>
            <b-nav-item-dropdown>
              <template #button-content>
                <em> <b-avatar></b-avatar> </em>
              </template>
              <b-dropdown-item @click="logout($router)">Cerrar sesion</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <NavBarSlider :router="$router"/>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import NavBarSlider from "./NavBarSlider";

export default {
    name: "NavBar",
    components: {
        NavBarSlider
    },
    data() {
      return {
        data: 0
      }
    },
    methods: {
        ...mapMutations([
            'setActive',
            'logout'
        ]),
        actived({ name }, access) {
          const finded = access.find(element => element === name)
          return (typeof finded === "undefined");
        }
    },
    mounted() {
      // console.log(this.tabPermision());
    },
    computed: {
        ...mapState(['tabs', 'userAccessTo'])
    }
}
</script>
