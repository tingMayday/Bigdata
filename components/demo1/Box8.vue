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
            <span>{{ item.ctime }}</span>
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
  },
  updated(){
    // this.updateData()
  },
  watch: {
    pdata: 'updateData'
  },
  methods: {
    updateData() {
      this.pdata.forEach(k => {
        k.ctime = this.toTime(k.time)
      })
    },
    toTime(timestamp) {
      let 
        date = new Date(timestamp * 1000),
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1),
        D = date.getDate(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
      return this.formatNumber(M) + '-' + this.formatNumber(D) + ' ' + this.formatNumber(h) + ':' + this.formatNumber(m) + ':' + this.formatNumber(s);
    },

    formatNumber(n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
  }
}
</script>