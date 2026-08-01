<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  label: string;
  value: number;
  max: number;
  tone?: 'primary' | 'accent' | 'warn' | 'danger';
  icon?: string;
}>(), {
  tone: 'primary',
  icon: ''
});

const pct = computed(() => {
  const m = props.max > 0 ? props.max : 1;
  return Math.max(0, Math.min(100, (props.value / m) * 100));
});

const display = computed(() => props.value.toLocaleString('zh-CN'));
const maxDisplay = computed(() => (props.max > 1 ? props.max.toLocaleString('zh-CN') : ''));
</script>

<template>
  <div class="progress" :class="'tone-' + tone">
    <div class="progress-head">
      <span class="progress-label"><i v-if="icon" :class="icon"></i>{{ label }}</span>
      <span class="progress-val">{{ display }}<em v-if="maxDisplay">/{{ maxDisplay }}</em></span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" :style="{ width: pct + '%' }"></div>
    </div>
  </div>
</template>