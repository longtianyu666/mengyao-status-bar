<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = computed(() => store.data);

const faceParts = [
  { key: '眼型', icon: 'fa-eye' },
  { key: '眉骨', icon: 'fa-angles-up' },
  { key: '鼻型', icon: 'fa-mountain' },
  { key: '唇形', icon: 'fa-kiss' },
  { key: '脸型轮廓', icon: 'fa-user' }
];

const bodyParts = [
  { key: '声线', icon: 'fa-microphone' },
  { key: '肤质', icon: 'fa-spa' },
  { key: '发型', icon: 'fa-scissors' },
  { key: '胸部', icon: 'fa-shirt' },
  { key: '腰臀', icon: 'fa-hourglass-half' },
  { key: '双腿', icon: 'fa-person-walking' }
];

const lowerStatus = computed(() => data.value?.哥哥?.下体解锁状态 ?? '未解锁');

const lowerMeta = computed<{ icon: string; label: string; cls: string }>(() => {
  const map: Record<string, { icon: string; label: string; cls: string }> = {
    未解锁: { icon: 'fa-lock', label: '未解锁', cls: 'lower-locked' },
    已适配: { icon: 'fa-key', label: '已适配', cls: 'lower-ready' },
    已拼: { icon: 'fa-unlock', label: '已拼', cls: 'lower-done' }
  };
  return map[lowerStatus.value] ?? map['未解锁'];
});

function isDone(key: string): boolean {
  return (data.value?.哥哥?.已拼部位?.[key] ?? 0) === 1;
}
</script>

<template>
  <div class="body-map">
    <div class="body-title"><i class="fa-solid fa-wand-magic-sparkles"></i> 拼身进度</div>
    <div class="face-zone">
      <div class="zone-label">脸部微调（以语汐为模·混合）</div>
      <div class="face-chips">
        <div v-for="p in faceParts" :key="p.key" class="chip" :class="{ done: isDone(p.key) }">
          <i class="fa-solid" :class="p.icon"></i>
          <span>{{ p.key }}</span>
          <i v-if="isDone(p.key)" class="fa-solid fa-circle-check state-icon"></i>
        </div>
      </div>
    </div>
    <div class="body-zone">
      <div class="zone-label">身体部位</div>
      <div class="body-tiles">
        <div v-for="p in bodyParts" :key="p.key" class="tile" :class="{ done: isDone(p.key) }">
          <i class="fa-solid" :class="p.icon"></i>
          <span>{{ p.key }}</span>
        </div>
        <div class="tile lower" :class="[lowerMeta.cls, { done: isDone('下体') }]">
          <i class="fa-solid" :class="lowerMeta.icon"></i>
          <span>下体 · {{ lowerMeta.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>