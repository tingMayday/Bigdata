<template>
	<div class="wrap">
		<div class="box">
            <div class="box-con box2-3 flex">
                <div class="item" v-for="(item,index) in pdata" :key="index">
                    <p :class="'value ' + item.color">{{item.value}}</p>
                    <p>{{item.name}}</p>
                </div>
            </div>
		</div>
  </div>
</template>
<script>
import { options2 } from '~/plugins/options.js'
export default {
	props: {
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
}
</script>
