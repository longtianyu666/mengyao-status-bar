<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';
import StageBadge from './StageBadge.vue';

const store = useDataStore();
const data = computed(() => store.data);

const events = computed(() => data.value?.近期事件 ?? []);
const tension = computed(() => data.value?.妹妹?.关系张力 ?? 0);
</script>

<template>
  <div class="system-panel">
    <div class="sys-top">
      <StageBadge />
      <span class="sys-item"><i class="fa-solid fa-clock"></i>{{ data?.当前时间 || '--' }}</span>
      <span class="sys-item"><i class="fa-solid fa-location-dot"></i>{{ data?.当前场景 || '--' }}</span>
      <span class="sys-item"><i class="fa-solid fa-face-meh"></i>心理：{{ data?.哥哥?.心理状态 || '--' }}</span>
    </div>
    <div class="sys-mid">
      <span class="sys-item wide">
        <i class="fa-solid fa-clipboard-list"></i>妹妹安排：{{ data?.妹妹?.当前安排 || '无' }}
      </span>
      <span class="sys-item wide">
        <i class="fa-solid fa-heart-crack"></i>关系张力
        <span class="mini-track"><i class="mini-fill" :style="{ width: tension + '%' }"></i></span>
      </span>
    </div>
    <div v-if="events.length" class="sys-events">
      <span class="sys-item"><i class="fa-solid fa-tags"></i>近期事件</span>
      <span v-for="(e, i) in events" :key="i" class="event-chip">{{ e }}</span>
    </div>
  </div>
</template>