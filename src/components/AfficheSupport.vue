<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '../supabase';
const route = useRoute('/celebrite/[id]');
import type { Database, Tables } from '../supabase-types';
defineProps <Database["public"]["Tables"]["Support"]["Row"] & {Films:Tables<'Films'>[]} >()
</script>

<template>
    <div>
        <h2>{{ titre_support }}</h2>
        <p>{{ prix_support}}</p>
        <p>{{ description_support }}</p>
        <img :src="img_support" alt="">
    </div>
</template>
