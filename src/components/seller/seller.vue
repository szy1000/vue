<template>
  <div class="seller">
  	<img :src="seller.avatar" alt="test">
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
	
</style>
