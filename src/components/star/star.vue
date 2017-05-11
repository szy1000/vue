<template>
  <div class="star" :class="starType">
  	<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item">
  	</span>
  </div>
</template>

<script>
	export default {
	props: {
	  size: {
	    type: Number
	  },
	  score: {
	    type: Number
	  }
	},
	computed: {
	  starType() {
	    return 'star-' + this.size;
	  },
	  itemClasses() {

	  }
	}
};
</script>

<style scoped lang="scss">
  @import "../../common/common.scss";
	.star{
		font-size: 0;
		.star-item{
			display: inline-block;
			background-size: cover;
			background-repeat: no-repeat;
		}
		&.star-48{
			// margin-right: -22px; 
			.star-item{
				display: inline-block;
				margin-right: 22px;
				width: 20px;
				height: 20px;
				background-repeat: no-repeat;
				&:last-child{
					margin-right: 0;
				}
				&.on{
					@include bg-image('star48_on');
				}
				&.half{
					@include bg-image('star48_half');
				}
				&.off{
					@include bg-image('star48_off');
				}
			}
		}
		&.star-32{
			.star-item{
				display: inline-block;
				margin-right: 6px;
				width: 15px;
				height: 15px;
				background-repeat: no-repeat;
				&:last-child{
					margin-right: 0;
				}
				&.on{
					@include bg-image('star36_on');
				}
				&.half{
					@include bg-image('star36_half');
				}
				&.off{
					@include bg-image('star36_off');
				}
			}
		}
		&.star-24{
			.star-item{
				display: inline-block;
				margin-right: 3px;
				width: 10px;
				height: 10px;
				background-repeat: no-repeat;
				&:last-child{
					margin-right: 0;
				}
				&.on{
					@include bg-image('star24_on');
				}
				&.half{
					@include bg-image('star24_half');
				}
				&.off{
					@include bg-image('star24_off');
				}
			}
		}
		
	}
</style>
