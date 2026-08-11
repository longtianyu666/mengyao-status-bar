<script setup lang="ts">
defineProps<{ label: string; icon?: string; tone: string; value: number }>();
</script>

<template>
  <div class="progress">
    <div class="progress-head">
      <span class="progress-label"><i :class="icon"></i>{{ label }}</span>
      <span class="progress-val">{{ value }}<em>/100</em></span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" :class="'tone-' + tone" :style="{ width: value + '%' }"></div>
    </div>
  </div>
</template>
