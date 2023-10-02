<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify";
useHead({
    title: "AdminPro Free NuxtJs 3  Dashboard",
});
const drawer = ref(undefined || true);
const innerW = window.innerWidth;
const { mdAndUp, mdAndDown } = useDisplay();
onMounted(() => {
    if (innerW < 950) {
        drawer.value = !drawer.value;
    }
});
</script>
<template>
    <div>
        <v-app>
            <!-- ---------------------------------------------- -->
            <!---Header -->
            <!-- ---------------------------------------------- -->
            <v-app-bar elevation="10" >
                <div class="pe-5">
                    <div class="">
                        <LayoutLogo/>
                    </div>
                </div>
                <v-app-bar-nav-icon class="" @click="drawer = !drawer" />
                <v-spacer />
                <LayoutHeader />
            </v-app-bar>
            <v-main>
                <!-- ---------------------------------------------- -->
                <!---Sidebar -->
                <!-- ---------------------------------------------- -->
                <v-navigation-drawer left :permanent="mdAndUp" class="leftSidebar bg-muted border-right-0" elevation="10" app :temporary="mdAndDown" v-model="drawer"
                    expand-on-hover>
                    <LayoutSidebar />
                </v-navigation-drawer>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                       <NuxtPage  />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>
