<template>
  <div class="goods">
  	<div class="menu-wrapper">
  		<ul>
  			<li v-for="(item,index) in goods" class="menu-item">
  				<span class="text">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]">
  					</span> 
						{{item.name}}
  				</span>
  			</li>
  		</ul>
  	</div>
  	<div class="foods-wrapper">
  		
  	</div>
  </div>
</template>

<script>
	const ERR = 0;
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data () {
			return {
				goods: []
			};
		},
		created () {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
			this.$http.get('/api/goods').then((response) => {
				if (response.body.errno === ERR) {
					this.goods = response.body.data;
				}
			});
		}
	};
</script>

<style scoped lang="scss">
  @import "../../common/common.scss";
	.goods{
		position: absolute;
		top: 176px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
		.menu-wrapper{
			flex: 0 0 80px;
			height: 100%;
			width: 80px;
			background-color: #f3f5f7;
			.menu-item{
				display: table;
				padding: 0 12px;
				height: 54px;
				width: 56px;
				font-size: 0;
				vertical-align: middle;
				line-height: 14px;
				@include border-1px(rgba($brand-bg,.1));
				.icon{
					display: inline-block;
					vertical-align: middle;
					width: 12px;
					height: 12px;
					margin-right: 2px;
					background-size: cover;
					background-repeat: no-repeat;
					&.decrease{
	          @include bg-image('decrease_3');
	        }
	        &.discount{
	          @include bg-image('discount_3');
	        }
	        &.guarantee{
	          @include bg-image('guarantee_3');
	        }
	        &.invoice{
	          @include bg-image('invoice_3');
	        }
	        &.special{
	          @include bg-image('special_3');
	        }
				}
				.text{
					display:table-cell;
					vertical-align: middle;
					width: 56px; 
					line-height: 1.2;
					font-size: 12px;
				}
			}
		}
		.foods-wrapper{
			flex: 1;
		}
	}
</style>
