<template>
<div id="bg" class="w-full h-screen bg-no-repeat bg-cover bg-fixed" style="background-image: url('/assets/imagenes/particulas.png')">
  </div>
  <div class="prueba">
    <div
      class="h-auto max-w-full rounded p-4 bg-white border border-gray-200 shadow sm:p-9 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
        <div class="row-span-4 ...">
          <img
            id="imgperfil"
            class="h-auto max-w-full"
            src="/assets/imagenes/perfil-logo.png"
            alt="image description"
          />
        </div>
        <div id="letter" class="col-span-2 ... text-left"></div>
        <div id="letter" class="row-span text-left">-1260</div>
        <div id="letter" class="row-span-2 col-span-2 ... text-left">
          #ID Usuario
        </div>
      </div>
      <button
        id="boton-re"
        type="button"
        class="letter text-white text-sm px-3 py-3 mr-2 mb-0 justify-center w-full"
      >
        PERFIL
      </button>
    </div>
  </div>
  <ion-col size="12" size-md="6" class="ion-margin-none">
    <ion-grid>
      <ion-row
        class="ion-justify-content-start"
        v-for="opcion in listaOpciones"
        v-bind:key="opcion"
      >
        <CardOptions
          :titulo="opcion.titulo"
          :icono="opcion.icono"
          :total="opcion.total"
        >
        </CardOptions>
      </ion-row>
    </ion-grid>
  </ion-col>
</template>

<script setup lang="ts">
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
import CardOptions from '@/components/CardOptions.vue';
import {
  cogOutline,
  documentTextOutline,
  peopleOutline,
  walletOutline,
} from "ionicons/icons";
const listaOpciones = [
  {
    titulo: "Cobranza",
    icono: walletOutline,
    total: "0/0",
  },
  {
    titulo: "Promotor Móvil",
    icono: documentTextOutline,
    total: "0",
  },
  {
    titulo: "Solidarios",
    icono: peopleOutline,
    total: "0/0",
  },
  {
    titulo: "Configuración",
    icono: cogOutline,
    total: "",
  },
];
</script>

<style>
ion-grid {
    height: 80%;
    margin: -60px 0 0 30px; 
    margin-top: auto;
}

ion-card ion-img::part(image) {
    width: 75%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 18px 56px 19px rgba(0, 0, 0, 0.1);
}
</style>
