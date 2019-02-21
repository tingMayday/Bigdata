<template>
  <div class="title">
    <p>
      <span class="s-title">DEMO1</span>
      <span>实时数据分析</span>
    </p>
    <span class="time">{{ time }}</span>
  </div>
</template>

<script>
export default {
  head: {
    title: 'DEMO1'
  },
  props: {
    time: {
      type: String,
      default: ''
    }
  }
}
</script>
