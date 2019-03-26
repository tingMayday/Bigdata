
<template>
	<div class="wrap">
		<div class="box">
	    <p class="box-title">
				{{title}}
	    </p>
	    <div class="box-con seat flex">
				<p>
					<span>今日</span>
					<span class="value ccfb52b">{{pdata.today}}</span>
				</p>
				<p>
					<span>昨日</span>
					<span class="value c22cf8b">{{pdata.yesterday}}</span>
				</p>
				<p>
					<span>本月</span>
					<span class="value c3c7ef8">{{pdata.thismonth}}</span>
				</p>
				<p>
					<span>上月</span>
					<span class="value ced4a51">{{pdata.lastmonth}}</span>
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