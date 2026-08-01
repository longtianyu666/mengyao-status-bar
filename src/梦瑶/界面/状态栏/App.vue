<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';
import SystemPanel from './components/SystemPanel.vue';
import FilmStrip from './components/FilmStrip.vue';
import BodyMap from './components/BodyMap.vue';
import BusinessPanel from './components/BusinessPanel.vue';
import ProgressBar from './components/ProgressBar.vue';

const store = useDataStore();
const data = computed(() => store.data.value);
</script>

<template>
  <div class="status-bar">
    <SystemPanel />
    <div class="status-grid">
      <div class="panel film-panel">
        <FilmStrip />
      </div>
      <div class="panel progress-panel">
        <ProgressBar label="拼身完整度" icon="fa-solid fa-puzzle-piece" :value="data?.哥哥?.拼身完整度 ?? 0" :max="100" />
        <ProgressBar label="雌堕度" icon="fa-solid fa-droplet" :value="data?.哥哥?.雌堕度 ?? 0" :max="100" tone="accent" />
        <ProgressBar label="暴露风险" icon="fa-solid fa-eye" :value="data?.哥哥?.暴露风险 ?? 0" :max="100" tone="danger" />
        <ProgressBar label="资金进度" icon="fa-solid fa-sack-dollar" :value="data?.资金?.当前余额 ?? 0" :max="data?.资金?.目标金额 ?? 1" tone="warn" />
      </div>
      <div class="panel body-panel">
        <BodyMap />
      </div>
    </div>
    <BusinessPanel />
  </div>
</template>