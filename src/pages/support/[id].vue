<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheSupport from '@/components/AfficheSupport.vue';

const route = useRoute('/support/[id]');

let {data : Support, error} = await supabase
    .from('Support')
    .select(`
    *,
    Films(*)
    
    `)
    .eq('id', route.params.id)
    .single();

    if (error) {
        console.error("error",error);
    }

</script>

<template>
    <div>
        <AfficheSupport v-bind="Support" />
    </div>
</template>