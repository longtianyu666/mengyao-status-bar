<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = computed(() => store.data);

type Stage = '起步期' | '上道期' | '沉溺期' | '抉择期';
const STAGES: Stage[] = ['起步期', '上道期', '沉溺期', '抉择期'];

const stage = computed<Stage>(() => {
  const s = data.value?.当前阶段;
  return STAGES.includes(s as Stage) ? (s as Stage) : '起步期';
});

const meta: Record<Stage, { icon: string; cls: string }> = {
  起步期: { icon: 'fa-seedling', cls: 'stage-start' },
  上道期: { icon: 'fa-route', cls: 'stage-ride' },
  沉溺期: { icon: 'fa-droplet', cls: 'stage-drown' },
  抉择期: { icon: 'fa-scale-balanced', cls: 'stage-choice' }
};
</script>

<template>
  <span class="stage-badge" :class="meta[stage].cls">
    <i class="fa-solid" :class="meta[stage].icon"></i>{{ stage }}
  </span>
</template>