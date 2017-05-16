<template>
  <div class="seller" ref="sellermove">
      <div class="sellerCtent">
      	<div class="sellerItems shdow">
      		<div class="sellerdetail">
      			<div class="sellerTop">
      				<h3 class="goodinfo" style="border-bottom:none;">{{seller.name}}</h3>
      				<div class="myStar"><star :size="24" :score="seller.score"></star></div>
      				<span>({{seller.ratingCount}})</span><span class="buy">月售{{seller.sellCount}}单</span>
      				<div class="keep">
      					<b class="heart"></b><span>收藏</span>
      				</div>
      			</div>
      			<div class="sellerTitle">
      				<ul class="titlelist">
      					<li><span class="address">起送价</span><span><b class="moneys">{{seller.minPrice}}</b>元</span></li>
      					<li><span class="address">商家配送</span><span><b class="moneys">{{seller.deliveryPrice}}</b>元</span></li>
      					<li><span class="address">平均配送时间</span><span><b class="moneys">{{seller.deliveryTime}}</b>元</span></li>
      				</ul>
      			</div>
      		</div>
      	</div>
      	<div class="sellerItems shdow">
      		<div class="sellerdetail">
      			<h3 class="goodinfo">公告与活动</h3>
      			<div class="activity">
      				<p>{{seller.bulletin}}</p>
      			</div>
      			<ul class="infoList" v-if="seller.supports">
                <li v-for="(items, index) in seller.supports">
                  <span :class="classmap[seller.supports[index].type]" class="icon"></span>
                  <span class="text_span">{{seller.supports[index].description}}</span>
                </li>
      			</ul>
      		</div>  	
      	</div>
      	<div class="sellerItems shdow">
      		<div class="sellerdetail">
      			<h3 class="goodinfo">商家实景</h3>
      			<div class="slider">
      				<ul class="sliderUl">
      					<li><img src="http://www.baidu.com/img/baidu_jgylogo3.gif"></li>
      					<li><img src="http://www.baidu.com/img/baidu_jgylogo3.gif"></li>
      					<li><img src="http://www.baidu.com/img/baidu_jgylogo3.gif"></li>
      					<li><img src="http://www.baidu.com/img/baidu_jgylogo3.gif"></li>
      				</ul>
      			</div>
      		</div>
      	</div>
      	<div class="sellerItems">
      		<div class="sellerdetail">
      			<h3 class="goodinfo">商家信息</h3>
      			<ul class="infoList">
      				<li v-for="(items, index) in seller.infos">{{items}}</li>
      			</ul>
      		</div> 	
      	</div>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import star from 'components/star/star'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    star
  },
  beforeCreate () {
    console.log(this.seller)
  },
  created () {
    this.classmap = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5']
  },
  watch: {
    seller: '_initScroll'
  },
  methods: {
    _initScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.sellermove, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    }
  }
}
</script>

<style scoped>
.seller{
	font-family: "微软雅黑";
}
.sellerItems:last-child{
	border-bottom: none;
}
.sellerItems .titlelist{
	width: 100%;
	overflow:hidden;
}
.sellerTop{
	padding-top: 0.36rem;
	padding-bottom: 0.66rem;
}
.sellerTop span{
	font-size: 0.2rem;
}
.titlelist li span{
	display: block;
	margin-bottom: 8px;
	font-size: 0.2rem;
}
.titlelist li{
	float: left;
	width: 33.33%;
	border-right: solid 1px #e6e7e8;
	text-align: center;
	box-sizing: border-box;
}
.titlelist li:last-child{
	border-right: none;
}
.titlelist li b.moneys{
	font-size: 24px;
}
.sellerItems .sellerdetail {
	margin-left: 0.36rem;
	margin-right: 0.36rem;
}
.sellerItems .sellerdetail .goodinfo{
	padding-bottom: 0.24rem;
	border-bottom: solid 1px #e6e7e8;
	font-size: 0.28rem;
	padding-top: 0.36rem;
	font-weight: 700;
}
.sellerTitle{
	padding-top: 0.36rem;
	padding-bottom: 0.36rem;
  border-top:solid 1px #e6e7e8;
}
.infoList li{
	border-bottom:solid 1px #e6e7e8;
	padding-top: 0.32rem;
	padding-bottom: 0.32rem;
	font-size: 0.24rem;
	color: rgb(7,17,27);
  text-indent: 5px;
}
.infoList li:not(:last-child){
	border-bottom:none
}
.infoList .icon{
	display: inline-block;
	height: 0.32rem;
	width: 0.32rem;
	margin-right: 0.12rem;
}
.sliderUl{
  overflow: hidden;
}
.sliderUl li{
  float: left;
  margin-left: 8px;
}
.activity p{
	font-size: 0.24rem;
	line-height: 24px;
	color: #f01414;
	padding-left:0.24rem;
}
.titlelist .address{
	color:#93999f;
}
.sellerTop .keep{
	float: right;
	margin-top: -20px;
}
.heart{
	background:url(../../components/seller/heart.gif) no-repeat;
	background-position: center 0;
	background-size: cover;
	display: block;
	height: 20px;
	width: 22px;
}
.shdow:after{
	content: "";
	display: block;
	width: 100%;
	height: 16px;
	background-color: #f3f5f7;
	border-bottom: solid 1px #e6e7e8;
	border-top: solid 1px #e6e7e8;
}
.myStar{
	display: inline-block;
	width: 124px;
	height: 20px;
	margin-right: 10px;
	vertical-align: sub;
}
.myStar .star .star_item{
	margin-left: 0;
	width: 24px !important;
	height: 24px !important;
}
.buy{
	margin-left: 10px;
}
/*---*/
.infoList .icon{ display: inline-block; height: 0.7rem; width: 0.7rem; }
.text_span{ vertical-align: top; }
.infoList .bg1{background:url(../../components/header/decrease_1@2x.png) no-repeat;background-size: cover}
.infoList .bg2{background:url(../../components/header/discount_1@2x.png) no-repeat;background-size: cover;}
.infoList .bg3{background:url(../../components/header/guarantee_1@2x.png) no-repeat;background-size: cover;}
.infoList .bg4{background:url(../../components/header/invoice_1@2x.png) no-repeat;background-size: cover;}
.infoList .bg5{background:url(../../components/header/special_1@2x.png) no-repeat;background-size: cover;}
</style>