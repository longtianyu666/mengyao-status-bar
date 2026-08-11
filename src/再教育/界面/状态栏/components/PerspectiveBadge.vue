<script setup lang="ts">
import { computed } from 'vue';

const isYukino = computed(() => {
  try {
    const msgs = getChatMessages(getCurrentMessageId()) as { message?: string }[];
    return (msgs[0]?.message ?? '').includes('你扮演天音雪乃');
  } catch {
    return false;
  }
});
</script>

<template>
  <span class="persp" :class="isYukino ? 'mode-yukino' : 'mode-morika'">
    {{ isYukino ? '雪乃视角' : '森夏视角' }}
  </span>
</template>
