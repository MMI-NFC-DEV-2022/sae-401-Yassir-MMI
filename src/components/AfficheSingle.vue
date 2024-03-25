<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/celebrite/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()



</script>

<template>
    <div class="min-h-screen bg-neutral-700 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2">
            <img class="w-full h-auto rounded-lg shadow-lg" :src="img" alt="nom" />
          </div>
          <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 class="text-3xl font-bold text-white">{{ nom_film }}</h2>
            <div class="flex items-center mt-2">
              <span class="text-yellow-500">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 1.5l2.351 7.21H21l-6.046 4.399L16.6 22.5 12 18.732 7.4 22.5l1.647-9.391L3 8.71h6.649z"/>
                </svg>
              </span>
              <span class="text-white ml-1 mr-6">{{ note}}/10</span>
              <div v-for="unGenre in Genre">
                <p class="mr-4 text-white">{{ unGenre.genre_film }}</p>
              </div>
            </div>
            <p class="text-gray-300 mt-4">{{ description_film }}</p>
            <div class="mt-6">
              <a :href="img" target="_blank" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">Regarder la bande-annonce</a>
            </div>

            <h2 class="text-xl font-bold text-white pt-10">Casting </h2>
            <hr class="fine-line">
              <div class="flex flex-row">
                <div v-for="(uneCelebrite, index) in Celebrite" :key="index">
                  <RouterLink :to="{ name: '/celebrite/[id]', params: { id: uneCelebrite.id } }">
                    <div class="flex flex-col mx-4 items-start text-center">
                      <div class="border border-blue-200 rounded-full overflow-hidden mb-2">
                        <img :src="uneCelebrite.img_celebrite" class="w-16 h-16 object-cover">
                      </div>
                      <p class="text-white text-center">{{ uneCelebrite.nom_celebrite }}</p>
                    </div>
                  </RouterLink>
                </div>  
              </div>
            <h2 class="text-xl font-bold text-white pt-10">Support</h2>
            <hr class="fine-line">
            <div class="flex flex-row">
                <div v-for="(unSupport, index) in Support" :key="index">
                  <RouterLink :to="{ name: '/support/[id]', params: { id: unSupport.id } }">
                    <div class="flex flex-col mx-4 items-start text-center">
                      <div class="border border-blue-200 rounded-full overflow-hidden mb-2">
                        <img :src="unSupport.img_support" class="w-16 h-16 object-cover">
                      </div>
                      <p class="text-white text-center">{{ unSupport.titre_support }}</p>
                    </div>
                  </RouterLink>
                </div>  
            </div>


          </div>
        </div>
      </div>
    </div>
  </template>

<style>

.fine-line {
    border: 0;
    height: 1.5px;
    background-color: #fff; /* Couleur de votre choix */
    margin: 10px 0; /* Marge au-dessus et en dessous de la ligne */
    margin-bottom: 15px;
}
</style>