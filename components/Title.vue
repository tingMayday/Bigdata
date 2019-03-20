<template>
  <div class="title">
    <p>
      <span class="s-title">{{title}}</span>
      <span>{{stitle}}</span>
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
    },
    title: {
      type: String,
      default: ''
    },
    stitle: {
      type: String,
      default: ''
    }
  }
}
</script>
