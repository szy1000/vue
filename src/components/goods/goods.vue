<template>
  <div class="goods">
  	<div class="menu-wrapper" ref="menuWrapper">
  		<ul>
  			<li v-for="(item,index) in goods" class="menu-item" :class = "{'current':currentIndex === index }" @click="selectMenu(index,$event)">
  				<span class="text">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]">
  					</span> 
						{{item.name}}
  				</span>
  			</li>
  		</ul>
  	</div>
  	<div class="foods-wrapper" ref="foodWrapper">
  		<ul>
  			<li v-for="item in goods" class="food-list food-list-hook">
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
    <shopcart :seller="seller"></shopcart>

  </div>
</template>

<script>
	import BScroll from 'better-scroll';
  import shopcart from '../../components/shopcart/shopcart';

	const ERR = 0;
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data () {
			return {
				goods: [],
				listHeight: [],
				scrollY: 0
				// currentIndex: 0
			};
		},
		components: {
			shopcart
		},
		computed: {
			currentIndex () {
				for (let i = 0; i < this.listHeight.length; i++) {
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i + 1];
					if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
						return i;
					}
				}
				return 0;
			}
		},
		created () {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
			this.$http.get('/api/goods').then((response) => {
				if (response.body.errno === ERR) {
					this.goods = response.body.data;
					this.$nextTick(() => {
						this._initScroll();
						this._calculateHeight();
					});
				}
			});
		},
		methods: {
			_initScroll () {
				this.menuScroll = new BScroll(this.$refs.menuWrapper, {
					click: true
				});
				this.foodScroll = new BScroll(this.$refs.foodWrapper, {
					probeType: 3
				});
				this.foodScroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y));
				});
			},
			_calculateHeight () {
				let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
				let height = 0;
				this.listHeight.push(height);
				for (let i = 0; i < foodList.length; i++) {
					let item = foodList[i];
					height += item.clientHeight;
					this.listHeight.push(height);
				}
			},
			selectMenu (index, event) {
				if (!event._constructed) {
					return;
				}
				let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
				let el = foodList[index];
				this.foodScroll.scrollToElement(el, 300);
				// console.log(index);
			}
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
				&.current{
					position: relative;
					z-index: 3;
					margin-top: -1px;
					background-color: $white;
					font-weight: 700;
					.text{
						@include border-none();
					}
				}
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
					.description{
						margin: 8px 0;
						line-height: 10px;
						font-size: 10px;
						color: $description-color;
					}
					.extra{
						font-size: 0;
						line-height: 10px;
						color: $description-color;
						span{
							font-size: 10px;
						}
						.count{
							margin-right: 12px;
						}
					}
					.price{
						line-height: 24px;
						font-weight: 700;
						font-size: 0;
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
					}
				}
			}
		}
	}
</style>
