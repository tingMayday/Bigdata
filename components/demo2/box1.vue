
<template>
	<div class="wrap">
		<div class="box">
	    <p class="box-title">
	      {{ title }}
	    </p>
	    <div class="box-con">
				<p>
					<span>今日</span>
					<span>{{pdata.today}}</span>
				</p>
				<p>
					<span>昨日</span>
					<span>{{pdata.yesterday}}</span>
				</p>
				<p>
					<span>本月</span>
					<span>{{pdata.thismonth}}</span>
				</p>
				<p>
					<span>上月</span>
					<span>{{pdata.lastmonth}}</span>
				</p>
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
	    type: Object,
	    default: () => {
	      return {}
	    }
	  }
	},
	data() {
	  return {
	  }
	}
}
</script>