<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ stage: number }>();
const level = computed(() => {
  if (props.stage < 25) return { key: 'early', label: '初期' };
  if (props.stage < 50) return { key: 'mid', label: '过渡期' };
  if (props.stage < 75) return { key: 'deep', label: '深化期' };
  return { key: 'final', label: '完成期' };
});
</script>

<template>
  <span class="stage-badge" :class="'stage-' + level.key">阶段·{{ level.label }}</span>
</template>
