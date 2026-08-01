<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = computed(() => store.data.value);

const level = computed(() => data.value?.资金?.营业尺度 ?? 0);
const levelDots = [1, 2, 3, 4, 5];
const fans = computed(() => (data.value?.营业?.粉丝数 ?? 0).toLocaleString('zh-CN'));
</script>

<template>
  <div class="biz-panel">
    <div class="biz-item">
      <i class="fa-solid fa-users"></i>
      <span class="biz-label">粉丝</span>
      <span class="biz-val">{{ fans }}</span>
    </div>
    <div class="biz-item">
      <i class="fa-solid fa-gauge-high"></i>
      <span class="biz-label">营业尺度</span>
      <span class="biz-dots">
        <i v-for="d in levelDots" :key="d" class="dot" :class="{ on: d <= level }"></i>
      </span>
    </div>
    <div class="biz-item">
      <i class="fa-solid fa-user-tie"></i>
      <span class="biz-label">当前客户</span>
      <span class="biz-val">{{ data?.营业?.当前客户 || '无' }}</span>
    </div>
    <div class="biz-item">
      <i class="fa-solid fa-calendar-days"></i>
      <span class="biz-label">日程</span>
      <span class="biz-val">{{ data?.营业?.日程 || '无' }}</span>
    </div>
    <div class="biz-item">
      <i class="fa-solid fa-tower-broadcast"></i>
      <span class="biz-label">直播</span>
      <span class="biz-val">{{ data?.营业?.直播状态 || '未开播' }}</span>
    </div>
  </div>
</template>