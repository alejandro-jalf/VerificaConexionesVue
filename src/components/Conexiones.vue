<template>
  <div>
      <b-list-group>
          <Conexion v-for="(item, index) of conexiones" :sucursal="item" :key="index"/>
      </b-list-group>
  </div>
</template>

<script>
import Conexion from "./Conexion";
import { mapState } from "vuex";

export default {
  name: "Conexiones",
  components: {
    Conexion,
  },
  computed: {
    ...mapState([
      'conexiones'
    ])
  },  
};
</script>