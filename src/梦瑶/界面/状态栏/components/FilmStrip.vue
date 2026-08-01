<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = computed(() => store.data);

const remaining = computed(() => data.value?.哥哥?.剩余底片 ?? 0);
const usedCount = computed(() => 12 - remaining.value);
const low = computed(() => remaining.value <= 3);
const frames = Array.from({ length: 12 }, (_, i) => i);
const sprockets = Array.from({ length: 15 }, (_, i) => i);
</script>

<template>
  <div class="film-wrap">
    <div class="film-head">
      <span class="film-title"><i class="fa-solid fa-film"></i> 剩余底片</span>
      <span class="film-count" :class="{ low }">
        {{ remaining }}<em>/12</em>
        <i v-if="low" class="fa-solid fa-triangle-exclamation"></i>
      </span>
    </div>
    <div class="film-strip">
      <div class="film-edge top">
        <i v-for="n in sprockets" :key="'t' + n" class="hole"></i>
      </div>
      <div class="film-frames">
        <div v-for="i in frames" :key="i" class="frame" :class="{ spent: i < usedCount, low }">
          <span class="frame-num">{{ i + 1 }}</span>
        </div>
      </div>
      <div class="film-edge bottom">
        <i v-for="n in sprockets" :key="'b' + n" class="hole"></i>
      </div>
    </div>
    <p v-if="low" class="film-warn"><i class="fa-solid fa-triangle-exclamation"></i> 底片见底，每拍一次都回不去了</p>
  </div>
</template>