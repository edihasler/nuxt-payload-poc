<script setup lang="ts">
const route = useRoute();

const fullData = ref();

const { data } = await useAsyncData<any>(
    `page-${route.path}`,
    () => $fetch('/cms/homepage'), {
    transform: (result) => {
        fullData.value = result
        return stripSsrOnlyData(result);
    }
}
);

if (import.meta.server) {
    // server-side using the unstripped data to create the html
    data.value = fullData.value;
}
</script>

<template>
    <h1>HomePage</h1>
    <component :is="getBlockComponent(block.modelTypeAlias, block.hydrateNever)" v-for="(block, index) in data.blocks"
        :key="`${block.modelTypeAlias}-${index}`" :model="block" />
</template>