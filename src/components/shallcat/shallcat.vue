<template>
	<section>
		<div class="shall">
			<ul>
				<li><span></span>￥{{toparive}}</li>
				<li>另需配送费￥{{deliveryPrice}}元</li>
				<li :class="playclass">{{payDese}}</li>
			</ul>
		</div>
<!-- 		<div class="shop_list">
	<div class="head">购物车<span class="clear">清空</span></div>
	<div class="container">
		<ul class="list">
			<li class="food" v-for="food in selectfoods">
			  <span class="names">{{food.name}}</span>
			  <div class="price"><span>￥{{food.price*food.count}}</span></div>
			<div class="control_waper">
			  <controll :food="food"></controll>
			</div>
			</li>        
		</ul>
	</div>
</div> -->
	</section>
</template>
<script>
// import controll from 'components/controll/controll'
export default {
  props: {
    selectFood: {
      type: Array,
      default () {
        return [
          {
            price: 10,
            count: 1
          }
        ]
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
  components: {},
  computed: {
    toparive () {
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
      if (this.toparive === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.toparive < this.minPrice) {
        let diff = this.minPrice - this.toparive
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    playclass () {
      if (this.toparive < this.minPrice) {
        return ''
      } else {
        return 'bg'
      }
    }
    // listshow () {
    //   if (!this.totalCount) {
    //     this.fold = true
    //     return false
    //   }
    //   let show = !this.fold
    //   return show
    // }
  }
}
</script>
<style>
	.shall{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 3;
		height: 2.048rem;
		width:100%;
		background: #141d27;
		color: #919396;
	}
	.shall ul{
		display: flex;
		line-height: 2.048rem;
		font-family: "微软雅黑";
	}
	.shall ul li:nth-of-type(1){
		flex: 2;
		padding-left: 0.768rem;
		font-size: 0.4266rem;

	}
	.shall ul li:nth-of-type(1) span{
		display: inline-block;
		height: 1.8773rem;
		width: 1.8773rem;
		background: #2b343d url(../../components/shallcat/1.png) no-repeat center center;
		background-size: 80%;
		border-radius: 50%;
		margin-top: -20px;
		margin-right: 0.768rem;
	}
	.shall ul li:nth-of-type(2){
		flex: 3;
		font-size: 0.6826rem;
		text-align: center;
		position: relative;
	}
	.shall ul li:nth-of-type(2):after{
		height: 1.066rem;
		background: rgba(255,255,255,.1);
		position: absolute;
		content: "";
		display: block;
		width:1px;
		left: 0;
		top:0.512rem;
	}
	.shall ul li:nth-of-type(3){
		flex: 2;
		font-size: 0.512rem;
		background: #2b333b;
		font-weight: bold;
		text-align: center;
	}
	.bg{ background: green !important; color: #fff; }
	.shop_list{ background: #fff; position: absolute; bottom: 2.048rem; left: 0; width: 100%; min-height: 10.9866rem; }
	.shop_list .head{ height: 1.7066rem; background: #f3f5f7; border-bottom: solid 1px rgba(7,17,27,0.1); font-size: 0.5973rem; line-height:1.7066rem; padding-left: 0.768rem;padding-right: 0.768rem; font-family: "微软雅黑";}
	.clear{ float:right; color: #00a0dc; }
	.list{ margin-left: 0.8106rem;margin-right: 0.8106rem; }
	.list li{ border-bottom: solid 1px rgba(7,17,27,.1); height: 2.048rem; line-height: 2.048rem; }
</style>