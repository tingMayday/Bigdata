<template>
  <div class="container">
    <Title :time="time" title="DEMO2" stitle="网络科技大数据看板DEMO" />
    <div class="con flex">
      <div class="left">
          <box1 title="坐席接入情况" :pdata="data1" />
          <box2 title="本月渠道工单数" :pdata="data2" />
      </div>
      <div class="center">
          <box3 :pdata="data3" />
          <box4 title="区域渠道接入量统计" :pdata="data4" />
          <div class="flex">
              <box5 title="承办单位统计" :pdata="data5" />
              <box6 title="话务统计情况" :pdata="data6" />
          </div>
      </div>
      <div class="right">
          <box7 title="今日诉求类型" :pdata="data7" />
          <box8 title="渠道工单趋势统计" :pdata="data8" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import Box1 from '~/components/demo2/box1.vue'
import Box2 from '~/components/demo2/box2.vue'
import Box3 from '~/components/demo2/box3.vue'
import Box4 from '~/components/demo2/box4.vue'
import Box5 from '~/components/demo2/box5.vue'
import Box6 from '~/components/demo2/box6.vue'
import Box7 from '~/components/demo2/box7.vue'
import Box8 from '~/components/demo2/box8.vue'
import moment from 'moment'
import axios from 'axios'
export default {
    components: {
        Title,
        Box1,
        Box2,
        Box3,
        Box4,
        Box5,
        Box6,
        Box7,
        Box8
    },
    data() {
        return {
            time: '',
            data1: {},
            data2: [],
            data3: [],
            data4: {},
            data5: [],
            data6: [],
            data7: [],
            data8: {}
        }
    },
    mounted() {
        this.getTime()
        this.getData()
    },
    methods: {
        getTime() {
            this.time =
            moment().format('YYYY/MM/DD') + ' ' + moment().format('HH:mm:ss')
        },
        getData() {
             axios.get('/api-demo2').then(res => {
                res = res.data
                if (res.ret) {
                    this.data1 = res.data1
                    this.data2 = res.data2
                    this.data3 = res.data3
                    this.data4 = res.data4
                    this.data5 = res.data5
                    this.data6 = res.data6
                    this.data7 = res.data7
                    this.data8 = res.data8
                }
             })
        }
    }
}
</script>