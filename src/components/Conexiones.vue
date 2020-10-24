<template>
  <div>
      <b-list-group>
          <ConexionesItem v-for="(item, index) of conexiones" :sucursal="item" :key="index"/>
      </b-list-group>
  </div>
</template>

<script>
import ConexionesItem from "./ConexionesItem";
import { mapState } from "vuex";

export default {
  name: "Conexiones",
  components: {
    ConexionesItem,
  },
  computed: {
    ...mapState([
      'conexiones'
    ])
  },  
};
</script>