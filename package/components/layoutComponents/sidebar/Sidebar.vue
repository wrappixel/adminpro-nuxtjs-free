<script setup lang="ts">
import { ref, watch } from "vue";
import sidebarItems from "./sidebarItems";

const sidebarMenu = ref(sidebarItems);
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div class="scrollnavbar">
      <v-list-item
        class="pa-4"
        prepend-avatar="/images/users/user2.jpg"
        title="Julia Roberts"
        subtitle="Webdesigner"
      />
      <v-list class="pa-4">
        <!-- ---------------------------------------------- -->
        <!---Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!-- ---------------------------------------------- -->
          <!---Single Item-->
          <!-- ---------------------------------------------- -->
          <v-list-item :to="item.to" rounded="lg" class="mb-1">
            <v-list-item-avatar start class="v-list-item-avatar--start">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
      <div class="pa-4 ma-4 bg-light-primary rounded-lg text-center">
        <img src="/images/sidebar-buynow-bg.svg" />
        <h4 class="font-weight-regular mb-3">Get Template for Free</h4>
        <v-btn
          class="mb-2"
          color="secondary"
          href="https://www.wrappixel.com/templates/adminpro-free-nuxtjs-admin-template/"
          block
          >Download Free</v-btn
        >
        <v-btn
          color="primary"
          href="https://www.wrappixel.com/templates/adminpro-nuxtjs/"
          block
          >Check Pro</v-btn
        >
      </div>
    </div>
  </div>
</template>
