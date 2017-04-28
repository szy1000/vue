<template>
  <div class="header">
  	<div class="header-wrapper">
  		<div class="avatar">
  			<img width="64" height="64" :src="seller.avatar">
  		</div>
  	</div>
  	<div class="bullentin-wrapper">
  		
  	</div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
	.header{
		.header-wrapper{
			padding: 24px 12px 18px 24px;
		}
		.bullentin-wrapper{

		}
	}
</style>
