<script setup lang="ts">
const groups = [
  {
    name: '森夏视角',
    desc: '扮演天音森夏，亲历再教育的每一天',
    items: [
      { swipe: 1, title: '小说开头', desc: '原作开局：地震、误认、初夜把柄' },
      { swipe: 2, title: '芭蕾教室', desc: '周末芭蕾课，镜前的羞耻与注视' },
      { swipe: 3, title: '龙天羽走廊', desc: '午休走廊，被红瞳女孩看穿' },
      { swipe: 4, title: '入学自我介绍', desc: '入学日教室，当众说成三岁' },
    ],
  },
  {
    name: '雪乃视角',
    desc: '扮演天音雪乃，掌控妹妹的每一天',
    items: [
      { swipe: 5, title: '初夜把柄', desc: '第一晚，把柄抓到手' },
      { swipe: 6, title: '保健室', desc: '在老师眼皮底下的身体检查' },
    ],
  },
];

async function select(swipeId: number) {
  await setChatMessages([{ message_id: 0, swipe_id: swipeId }]);
}
</script>

<template>
  <div class="picker">
    <div class="picker-head">
      <h1>再教育</h1>
      <p>选择你的开局，也可以使用消息栏上方的开局切换按钮</p>
    </div>
    <div v-for="group in groups" :key="group.name" class="group">
      <div class="group-head">
        <span class="group-name">{{ group.name }}</span>
        <span class="group-desc">{{ group.desc }}</span>
      </div>
      <div class="cards">
        <button v-for="item in group.items" :key="item.swipe" class="card" @click="select(item.swipe)">
          <span class="card-title">{{ item.title }}</span>
          <span class="card-desc">{{ item.desc }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
