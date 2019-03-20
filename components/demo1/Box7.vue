<template>
  <div class="wrap">
    <div class="box rise">
      <p class="box-title">
        {{ title }}
      </p>
      <div class="box-con">
        <div class="thead item">
          <p>序号</p>
          <p>区域</p>
          <p>上月业绩</p>
          <p>本月业绩</p>
          <p>增长业绩</p>
        </div>
        <div class="tbody">
          <div v-for="(item, index) in pdata" :key="index" class="item">
            <p>
              <span class="no">{{ item.no }}</span>
            </p>
            <p>{{ item.area }}</p>
            <p>{{ item.last }}</p>
            <p>{{ item.now }}</p>
            <p>{{ item.result }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	 props: {
    title: {
      type: String
    },
    pdata: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
	data() {
    return {}
  },
  mounted() {
  }

}
</script>
