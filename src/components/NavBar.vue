<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">SPA 2020</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse1" v-b-toggle.sidebar-1></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-for="(tab, index) in tabs" :to="tab.ruta" :key="index">{{tab.titulo}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <NavBarSlider />
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NavBarSlider from "./NavBarSlider";

export default {
    name: "NavBar",
    components: {
        NavBarSlider
    },
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
