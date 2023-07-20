<template>
    <ion-col size="11.2">
        <a class="card-options block w-auto h-auto p-6 bg-[#025436] border border-gray-200 rounded-lg ">
            <ion-card-content>
                <ion-row>
                    <ion-col size="2">
                        <div class="shadow-img ion-text-center">
                            <ion-icon :icon="props.icono" size="large"></ion-icon>
                        </div>
                    </ion-col>
                    <ion-col size="7">
                        <p class="letra text-base text-left text-white dark:text-white">
                            {{ props.titulo }}
                        </p>
                    </ion-col>
                    <ion-col class="letra bg-detalles ion-text-center" size="3">
                        <ion-card-subtitle v-if="props.total">
                            {{ props.total }}
                        </ion-card-subtitle>
                    </ion-col>
                </ion-row>
            </ion-card-content>
        </a>
    </ion-col>
</template>

<script setup lang="ts">
import { IonCardContent, IonCardSubtitle, IonCol, IonIcon, IonRow } from '@ionic/vue';
import { defineProps } from 'vue';
const props = defineProps({
    titulo: String,
    icono: String,
    total: String,
});
</script>

<style scoped>
.card-options {
    background: #025436;
    background: -webkit-linear-gradient(0deg, #025436 67%, #024a30 25%, #1e7253 40%);
    background: linear-gradient(45deg, #025436 67%, #024a30 25%, #1e7253 40%);
    
}

.card-options ion-icon {
    color: #efefef;
}

.letra {
    color: #efefef;
    font-weight: 500;
    margin-top: 10px;
}

.shadow-img {
    background-color: #044d32;
    border-radius: 36px;
    padding-top: 4px;
    height: 40px;
    width: 40px;
}

.bg-detalles ion-card-subtitle {
    font-size: 15px;
    color: white;
    margin-top: 8px;
}
</style>
  