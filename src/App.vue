<template>
  <div id="app">
    <b-overlay :show="loading" no-wrap></b-overlay>
    <NavBar v-if="login"></Navbar>
    <router-view :class="{'container': login}" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data () {
    return {
      fail: false,
    }
  },
  methods: {
    ...mapMutations([
      'setActiveByTitulo'
    ])
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    ...mapState([
      'loading',
      'login'
    ])
  }
}
</script>
