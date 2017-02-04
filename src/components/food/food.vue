<template>
	<div v-show="isshow" class="food">
		<div class="img_head">
			<img :src="food.image" alt="">
		</div>
		<div class="foods_info">
			<p>皮蛋瘦肉粥</p><p>月售1132份&nbsp;好评率100%</p><p>￥25</p>
			<button type="button">加入购物车</button>
		</div>
		<div class="foods_jieshao">
			<h2>商品介绍</h2>
			<p>我是商品介绍我是商品介绍我是商品介绍我是商品介绍我是商品介绍我是商品介绍我是商品介绍</p>
		</div>
	</div>
</template>
<script>
export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    slideShow () {
      this.isshow = true
    }
  }
}
</script>
<style>
	.food{
		position: fixed;
		left: 0;
		top:0;
		bottom: 2.048rem;
		z-index: 2;
		width: 100%;
		background: #fff;
	}
	.img_head{
		width: 100%;
		height: 0;
		position: relative;
		padding-top:100%;  /*-------*/
	}
	.img_head > img{
		position: absolute;
		left: 0;
		top:0;
		width:100%;
		height: 100%;
	}
	.foods_info{
		background: #fff;
		margin-bottom: 0.6826rem;
		position: relative;
		padding-left:0.768rem ;
		padding-bottom:0.768rem;
		border-bottom: solid 1px #e6e7e8;
		box-shadow: 0 0.6826rem 0 #f3f5f7;
	}
	.foods_info p:first-child{font-size: 0.5973rem;color: #000;font-family: "微软雅黑";margin-bottom: 0.3413rem;margin-top:0.768rem; font-weight: 700;}
	.foods_info p:nth-of-type(2){font-size: 0.512rem;color: #93999f;font-family: "微软雅黑";margin-bottom: 0.768rem;}
	.foods_info p:nth-of-type(3){ font-size: 0.5973rem;font-family: "微软雅黑"; font-weight: 700; color: red; }
	.foods_info button{ background: #00a0dc; border: none; outline: none; border-radius: 24px; font-size:0.4266rem; color: #fff;font-family: "微软雅黑"; height: 1.024rem; width: 3.1573rem; position: absolute;right: 0.768rem; top:2.016rem; }
	.foods_jieshao{ border-top:solid 1px #e6e7e8; font-family: "微软雅黑"; padding-left:0.768rem ;}
	.foods_jieshao p{ font-size:0.512rem; line-height: 1.024rem; color: #4d555d  }
	.foods_jieshao h2{ font-size: 0.5973rem; padding-top:0.768rem ;  font-weight: 700;}
</style>