<template>
	<div class="footer"  @click="send">
		<p>	I am footer	</p>

		<div>{{ message }}</div>
	</div>
</template>

<script>
	export default {
	  props: ['message'],
	  data () {
	    return {
      son: 'son'
    }
	  },
	  methods: {
    send () {
      this.$emit('connect', this.son)
    }
	  }
	}
</script>

<style scoped lang="scss">
	.footer{
		// background: red;
		p{
			color: blue;
		}
		div{
			background: red;
		}
	}
</style>
