<template>
	<div class="shall">
		<ul>
			<li><span></span>￥{{toparive}}</li>
			<li>另需配送费￥{{deliveryPrice}}元</li>
			<li :class="playclass">{{payDese}}</li>
		</ul>
	</div>
</template>
<script>
export default {
  props: {
    selectFood: {
      type: Array,
      default () {
        return [
          {
            price: 10,
            count: 10
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
</style>