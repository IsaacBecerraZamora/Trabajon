<template>
 <div id="bg" class="w-full h-screen bg-no-repeat bg-cover bg-fixed" style="background-image: url('/assets/imagenes/particulas.png')">
  </div>
  <EncabezaDo />
  <PropuHoy />

  
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import PropuHoy from "./components/PropuHoy.vue";
import EncabezaDo from "./components/EncabezaDo.vue";
import "./assets/tailwind.css";

@Options({
  components: {
    HelloWorld,
    PropuHoy,
    EncabezaDo,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: px;
}
</style>
