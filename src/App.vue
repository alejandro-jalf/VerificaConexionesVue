<template>
  <div id="app">
    <b-overlay :show="loading" no-wrap></b-overlay>
    <NavBar v-if="login"></Navbar>
    <router-view :class="{'container': login}" />
    <Alert></Alert>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";

export default {
  name: 'App',
  components: {
    NavBar,
    Alert,
  },
  data () {
    return {
      fail: false,
    }
  },
  computed: {
    ...mapState([
      'loading',
      'login'
    ])
  }
}
</script>
