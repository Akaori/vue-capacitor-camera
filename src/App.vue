<template>
  <ion-app>
    <ion-router-outlet
      data-test="app-router-outlet"
      id="main-content"
    />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
</script>

<style>
ion-split-pane {
  --side-width: 350px;
  --side-max-width: 350px;
}
</style>
