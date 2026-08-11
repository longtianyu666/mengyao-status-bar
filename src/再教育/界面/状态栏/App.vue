<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';
import ProgressBar from './components/ProgressBar.vue';
import StageBadge from './components/StageBadge.vue';
import PerspectiveBadge from './components/PerspectiveBadge.vue';

const store = useDataStore();
const data = computed(() => store.data);
const stage = computed(() => {
  const fem = Number(data.value?.女性化程度 ?? 0);
  const sink = Number(data.value?.沉沦程度 ?? 0);
  return Math.max(fem, sink);
});
</script>

<template>
  <div class="status-bar">
    <div class="sb-head">
      <PerspectiveBadge />
      <span class="sb-scene">{{ data?.当前场景 }}</span>
      <StageBadge :stage="stage" />
    </div>
    <div class="sb-bars">
      <ProgressBar label="女性化" icon="fa-solid fa-venus" tone="fem" :value="Number(data?.女性化程度 ?? 0)" />
      <ProgressBar label="沉沦" icon="fa-solid fa-droplet" tone="sink" :value="Number(data?.沉沦程度 ?? 0)" />
      <ProgressBar label="羞耻阈值" icon="fa-solid fa-fire" tone="shame" :value="Number(data?.羞耻阈值 ?? 0)" />
    </div>
    <div class="sb-yukino">
      <span class="yn-name"><i class="fa-solid fa-crown"></i> 雪乃</span>
      <span class="yn-punish">{{ data?.雪乃当前惩罚 || '无' }}</span>
      <div class="yn-bar">
        <span class="yn-label">不满</span>
        <div class="yn-track"><div class="yn-fill anger" :style="{ width: (data?.雪乃不满度 ?? 0) + '%' }"></div></div>
        <span class="yn-val">{{ data?.雪乃不满度 ?? 0 }}</span>
      </div>
      <div class="yn-bar">
        <span class="yn-label">强度</span>
        <div class="yn-track"><div class="yn-fill power" :style="{ width: (data?.雪乃调教强度 ?? 0) + '%' }"></div></div>
        <span class="yn-val">{{ data?.雪乃调教强度 ?? 0 }}</span>
      </div>
    </div>
  </div>
</template>
