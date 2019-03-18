<template>
  <div class="wrap">
    <div class="box top">
      <p class="box-title">
        {{ title }}
      </p>
      <div class="box-con">
        <p class="th">
          <span>时间</span>
          <span>物品</span>
          <span>数量</span>
          <span>金额</span>
        </p>
        <!-- <div class="tablebody"> -->
          <p v-for="(item, index) in pdata" :key="index">
            <span>{{ item.time }}</span>
            <span>{{ item.goods }}</span>
            <span>{{ item.num }}</span>
            <span>{{ item.money }}</span>
          </p>
        <!-- </div> -->
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
  }
}
</script>