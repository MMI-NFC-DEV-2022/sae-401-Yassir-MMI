<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
  <RouterLink :to="`/films/${id}`">

    <div class="flex min-h-screen items-center justify-center">

        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" :src="image_film" :alt="nom_film" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">{{ nom_film }}</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> {{ description_card }}</p>
                <RouterLink :to="`/films/${id}`" class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Voir plus</RouterLink>
            </div>
        </div>
    </div>
    </RouterLink>   
</template>

