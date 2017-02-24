<template>
	<section>
		<div class="shoplist">
		<!-- 购物车结果 -->
		<div class="shall_content" @click="togglelist()">
			<ul class="goods_area">
				<li>
				<span class="one_li" :class="{'heightliht':totalecount>0}">{{totalecount}}</span>
				<span class="total_price" :class="{'hitclass':totalPrice>0}">￥{{totalPrice}}</span>
				<!-- <em class="num" v-show="totalecount>0">{{totalecount}}</em> -->
				</li>
				<li>另需配送费￥{{deliveryPrice}}元</li>
				<li :class="playclass" @click.stop.prevent="play()">{{payDese}}</li>
			</ul>
		</div>
		<!-- 添加的商品 -->
		<transition name="slideup">
			<div class="good_warp" v-show="listShow">
				<div class="goods_head">购物车<span class="clear" @click="clearempty()">清空</span></div>
				<div class="scroll" ref="goodsContent">
					<div class="goods_content">
						<ul class="food_items">
							<li class="my_food" v-for="food in selectFood">
								<span class="names">{{food.name}}</span>
							  	<div class="price"><span>￥{{food.price*food.count}}</span></div>
								<div class="control_waper"><controll :food="food"></controll></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</transition>
	</div>
	<!-- 遮罩层 -->
	<transition name="myfade">
		<div class="model" v-show="listShow" @click="hideShow()"></div>
	</transition>
	</section>
</template>
<script>
import BScroll from 'better-scroll'
import controll from 'components/controll/controll'
export default {
  props: {
    selectFood: {
      type: Array,
      default () {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      fold: true
    }
  },
  components: {
    controll
  },
  methods: {
    togglelist () {
      if (!this.totalecount) {
        return
      }
      this.fold = !this.fold
    },
    clearempty () {
      this.selectFood.forEach((food) => {
        food.count = 0
      })
    },
    hideShow () {
      this.fold = true
    },
    play () {
      if (this.totalPrice < this.minPrice) {
        return
      }
      window.alert('需要支付**元，^_^')
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFood.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalecount () {
      let iNum = 0
      this.selectFood.forEach((food) => {
        iNum += food.count
      })
      return iNum
    },
    payDese () {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    listShow () {
      if (!this.totalecount) {
        this.fold = true
        return false
      }
      let show = !this.show
      if (show) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.goodsContent, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
      return show
    },
    playclass () {
      if (this.totalPrice < this.minPrice) {
        return ''
      } else {
        return 'bg'
      }
    }
  }
}
</script>
<style>
	.shoplist{position: fixed;bottom: 0;left: 0;z-index:99;height: 2.048rem;width:100%;color: #919396;}
	.shoplist ul{height: 2.048rem;font-family: "微软雅黑"; display: flex;}
	.shoplist ul li{padding: 0 0.4266rem;line-height: 2.048rem;background: #141d27; }
	.shoplist .shall_content li:nth-of-type(1){font-size: 0.4266rem;flex: 2;}
	.shoplist .shall_content li:nth-of-type(2){font-size: 0.6826rem;text-align: center;position: relative; width:6.1866rem; }
	.shoplist .shall_content li:nth-of-type(2):after{height: 1.066rem;background: rgba(255,255,255,.1);position: absolute;content: "";display: block;width:1px;left: 0;top:0.512rem;
	}
	.shoplist .shall_content li:nth-of-type(3){
		font-size: 0.512rem;
		background: #2b333b;
		font-weight: bold;
		text-align: center;
		width:4.4586rem;
	}
	.shoplist .shall_content li .one_li{
		display: inline-block;
		height: 1.4933rem;
		width: 1.4933rem;
		background: #2b343d;
		background-size: 80%;
		border-radius: 50%;
		margin-top: 7px;
		text-align: center;
		line-height: 1.4933rem;
	}
	.shoplist .bg{ background: green !important; color: #fff; }
	.shoplist .goods_head{ height: 1.7066rem; background: #f3f5f7; border-bottom: solid 2px rgba(7,17,27,0.1); font-size: 0.5973rem; line-height:1.7066rem; padding-left: 0.768rem;padding-right: 0.768rem; font-family: "微软雅黑";}
	.goods_content .food_items{ display: block; }
	.clear{ float:right; color: #00a0dc; }
	.list{ margin-left: 0.8106rem;margin-right: 0.8106rem; }
	.list li{ border-bottom: solid 1px rgba(7,17,27,.1); height: 2.048rem; line-height: 2.048rem; }
	.slideup-enter-active,.slideup-leave-active{transition: all ease-out .4s;}
	.slideup-enter, .slideup-leave-active{transform: translate3d(0,100%,0); opacity: 0;}
	.shall_content .heightliht{ background-color: #fff !important;  color: red; font-size: 18px;}
	.shall_content .hitclass{ color: #fff; font-weight: 600; }
	.good_warp{position: fixed;bottom: 2.0906rem;left: 0;z-index:-1;max-height:11.008rem;background-color: #fff;width: 100%;}
	.price{ display: inline-block;}
	.control_waper .controll{ top:-5px; right: 0.7466rem;}
	.good_warp .my_food .names{ width: 145px; margin-right: 40px;text-align: left;}
	.good_warp .my_food .names,.price > span{font-size:0.512rem; display: inline-block;}
	.goods_content li{ width: 100%;border-bottom: solid 1px #e8e8e8;}
	.control_waper .controll .inner{top:-40px;}
	.my_food .cart_count{ top:-48px; font-size: 0.512rem; }
	.num{position: absolute;top: -30px;color: red;font-weight: bold;font-style: inherit;font-size: 22px;left: 45px;}
	.model{
		position: fixed;
		left: 0;
		top:0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: rgba(7,17,27,.6);
		backdrop-filter:blur(10px);
	}
	.myfade-enter-active,.myfade-leave-active{transition: opacity .6s}
	.myfade-enter, .myfade-leave-active{opacity: 0;}
	.food_items .my_food{padding: 0 0.4266rem; background: none;}
</style>