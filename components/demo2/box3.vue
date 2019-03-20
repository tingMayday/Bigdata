<template>
	<div class="wrap">
		<div class="box">
            <div class="box-con flex">
                <div v-for="(item,index) in pdata" :key="index">
                    <p>{{item.name}}</p>
                    <p>{{item.value}}</p>
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
