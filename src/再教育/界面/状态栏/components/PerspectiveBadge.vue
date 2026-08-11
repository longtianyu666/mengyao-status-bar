<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = computed(() => store.data);
const isYukino = computed(() => {
  return data.value?._当前视角 === '雪乃视角';
});
</script>

<template>
  <span class="persp" :class="isYukino ? 'mode-yukino' : 'mode-morika'">
    {{ isYukino ? '雪乃视角' : '森夏视角' }}
  </span>
</template>
