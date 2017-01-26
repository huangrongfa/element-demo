<template>
      <div class="goods">
      	<div class="good_left_menu">
      		<ul>
      			<li v-for="(items,index) in goods">
      			<span v-show="items.type>0" class="icon" :class="classmap[items.type]"></span>{{items.name}}</li>
      		</ul>
      	</div>
      	<div class="good_right_menu">
      		<dl v-for="item in goods">
      			<dt></dt>
      			<dd v-for="food in item.foods" class="info_food">
      				<img :src="food.icon" alt="">
	      			<span>{{food.name}}</span>
	      			<span>{{food.description}}</span>
	      			<span>月售{{food.sellCount}}份  好评率{{food.rating}}%</span>
	      			<span>￥{{food.price}}</span>
	      			<em class="cricle">+</em>
      			</dd>
      		</dl>
      	</div>
      	<!--  -->
      	<shallcat></shallcat>
      </div>
</template>

<script>
import shallcat from 'components/shallcat/shallcat'
const isok = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    }
  },
  components: {
    shallcat
  },
  created () {
    this.classmap = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5']
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.error === isok) {
        this.goods = response.data
        console.log(this.goods)
      }
    })
  }
}
</script>
	
<style>
.goods{
 display: flex;
}
.good_left_menu{
 flex: 1;
}
.good_left_menu ul{
	height: 400px;
}
.good_left_menu li{
	width:3.4133rem;
	height: 2.304rem;
	line-height: 2.304rem;
	text-align: center;
	background:#f3f5f7;
	border-bottom:solid 1px rgba(7,17,27,.2);
	font-size: 0.512rem;
	color: #07111b;
	position: relative;
}
.good_left_menu li:last-child{border-bottom:none}
.good_left_menu li:after,.good_left_menu li:before{
	content: "";
	display: block;
	position: absolute;
	bottom: -1px;
	background: #f3f5f7;
	height: 1px;
	width:0.512rem;
}
.good_left_menu li:after{left: 0;}
.good_left_menu li:before{right: 0;}
.good_right_menu{width:100%;padding-top: 0.786rem;padding-left:0.786rem;box-sizing: border-box; padding-right: 0.786rem;}
.good_right_menu dl{ overflow: hidden; font-family: "微软雅黑";}
.good_right_menu dl dt{ float: left; margin-right: 10px;}
.good_right_menu dd{ font-size: 0.5973rem;color: rgb(7,17,27);position: relative;border-bottom: solid 1px rgba(7,17,27,.1);padding-bottom:0.786rem ;margin-bottom:0.786rem ; overflow: hidden; }
.good_right_menu dd span{ display: block;margin-bottom: 0.3413rem; font-size: 0.4266rem; }
.good_right_menu dd span:nth-of-type(2),.good_right_menu dd span:nth-of-type(3),
.good_right_menu dd span:nth-of-type(4){color: rgb(147,153,159);}
.good_right_menu dd span:nth-of-type(4){margin-bottom:0;color: red;font-weight: bold;}
.cricle{ position: absolute;right: 0; bottom: 20px; width:0.8533rem;height:0.8533rem; line-height: 0.7533rem;font-size: 20px; font-style:inherit; font-weight: 600;background: #00a0dc; text-align: center; color: #fff; border-radius: 50%; }
.info_food img{ float: left; margin-right: 0.4266rem;width:2.432rem; height:2.432rem;border-radius: 4px;  }
</style>