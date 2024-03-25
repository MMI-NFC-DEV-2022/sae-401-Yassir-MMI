<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheCelebrite from '@/components/AfficheCelebrite.vue';

const route = useRoute('/celebrite/[id]');

let {data : Celebrite, error} = await supabase
    .from('Celebrite')
    .select(`
    *,
    Films(*)
    
    `)
    .eq('id', route.params.id)
    .single();

console.log("data film",Celebrite);
</script>

<template>
    <div>
        <AfficheCelebrite v-bind="Celebrite" />
    </div>
</template>