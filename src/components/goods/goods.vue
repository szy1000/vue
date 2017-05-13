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
  		<ul>
  			<li v-for="item in goods" class="food-list">
  				<h2 class="title">{{item.name}}</h2>
  				<ul>
  					<li v-for="food in item.foods" class="food-item">
  						<div class="icon">
  							<img width="57" height="57" :src="food.icon" alt="">
  						</div>
  						<div class="content">
  							<h2 class="name">{{food.name}}</h2>
  							<p class="description">{{food.description}}</p>
  							<div class="extra">
  								<span class="count">月售{{food.sellCount}}份</span>
  								<span>好评率{{food.rating}}%</span>
  							</div>
  							<div class="price">
  								<span class="now">¥{{food.price}}</span>
  								<span class="oldPrice" v-show="food.oldPrice">{{food.oldPrice}}</span>
  							</div>
  						</div>
  					</li>
  				</ul>
  			</li>
  		</ul>
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
		display: flex;
		position: absolute;
		top: 176px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
		.menu-wrapper{
			flex: 0 0 80px;
			height: 100%;
			width: 80px;
			background-color: $food-font;
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
			.title{
				padding-left: 14px;
				line-height: 26px;
				font-size: 12px;
				background-color: $food-font;
				border-left: 1px solid #d9dde1;
			}
			.food-item{
				display: flex;
				margin: 18px;
				padding-bottom: 18px;
				@include border-1px(rgba($brand-bg,.1));
				&:last-child(){
					margin-bottom: 0;
					@include border-none();
				}
				.icon{
					flex: 0 0 57px;
					margin-right: 10px;
				}
				.content{
					flex: 1;
					.name{
						line-height: 14px;
						font-size: 14px;
						color: $brand-bg;
					}
					.description,.extra{
						line-height: 10px;
						font-size: 10px;
						color: $description-color;
						.count{
							margin-right: 12px;
						}
					}
					.description{
						margin: 8px 0;
					}
					.price{
						line-height: 24px;
						font-weight: 700;
						.now{
							margin-right: 8px;
							font-size: 14px;
							color: $brand-red;
						}
						.old{
							text-decoration: line-through;
							font-size: 10px;
							color: $description-color;
						}
						// font-size: 10px;
					}
				}
			}
		}
	}
</style>
