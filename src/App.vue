<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header />
    <Suspense> 
      <RouterView class="bg-neutral-700"/>
    </Suspense>
  <Footer />
</template>
