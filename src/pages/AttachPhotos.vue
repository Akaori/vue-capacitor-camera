<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Photos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :scroll-events="true">
      <div v-if="isOpenRef">Loading...</div>
      <div
        v-else
        v-for="photo in photos"
        :key="photo"
      >
        <ion-item>
          <ion-thumbnail slot="start">
            <img :src="photo" />
          </ion-thumbnail>
          <ion-label>{{ photo }}</ion-label>
        </ion-item>
      </div>

      <ion-button
        type="button"
        fill="clear"
        @click="takePhoto"
      >
        <ion-icon
          slot="start"
          :icon="camera"
        ></ion-icon>
        Take Photo
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
  IonIcon,
  IonItem,
  IonThumbnail,
  IonButton,
  IonLabel,
  alertController,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const photos = ref<any>([]);

// photo parameters
const isGallery = ref(true);

// loading component
const isOpenRef = ref(false);
const setOpen = (state: boolean) => (isOpenRef.value = state);

const convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

const takePhoto = async () => {
  await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: isGallery.value ? CameraSource.Prompt : CameraSource.Camera,
    quality: 40,
    saveToGallery: true,
    allowEditing: true,
  })
    .then(async (photo) => {
      setOpen(true);

      console.log("WEB PATH", photo.webPath);

      photos.value.push(photo.webPath);

      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      console.log("BLOB", blob);

      const base64Data = (await convertBlobToBase64(blob)) as string;

      console.log("BASE64", base64Data);

      setOpen(false);
    })
    .catch(async function (error: any) {
      setOpen(false);
      const alert = await alertController.create({
        header: "Error",
        message: error,
        buttons: ["OK"],
      });
      await alert.present();
    });
};
</script>

<style></style>
