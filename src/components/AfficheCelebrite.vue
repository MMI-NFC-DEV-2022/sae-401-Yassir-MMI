<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/celebrite/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Celebrite"]["Row"] & {Films:Tables<'Films'>[]} >()
</script>

    <div>
    </div>
    <template>
        <div class="min-h-screen bg-neutral-700 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
                <img class="w-full h-auto rounded-lg shadow-lg" :src="img_celebrite" alt="nom" />
            </div>
            <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                <h2 class="text-3xl font-bold text-white">{{ prenom_celebrite }} {{ nom_celebrite }}</h2>
                <div class="flex items-center mt-2">
                <span class="text-yellow-500">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 1.5l2.351 7.21H21l-6.046 4.399L16.6 22.5 12 18.732 7.4 22.5l1.647-9.391L3 8.71h6.649z"/>
                    </svg>
                </span>
                <span class="text-white ml-1 mr-6">{{ nationalite_celebrite}}</span>
                <p class="mr-4 text-white">{{ date_de_naissance }}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </template>
