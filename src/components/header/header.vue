<template>
      <div class="header">
	      	<div class="content_top clearfix">
	      		<img :src="seller.avatar" class="pull_left" alt="">
	      		<div class="content_top_info">
	      			<ul>
	      				<li><span class="pp"></span>{{seller.name}}</li>
	      				<li>{{seller.description}}/{{seller.deliveryTime}}分钟到达</li>
	      				<li v-if="seller.supports"><span class="jian" :class="classmap[seller.supports[0].type]"></span>{{seller.supports[0].description}}<strong @click="toggle">{{seller.supports.length}}个</strong></li>
	      			</ul>
	      		</div>
	      	</div>
	      	<div class="content_botm">
	      		<span></span><span>春节前夕李克强昆明看望西南联大“老学长”</span>
	      	</div>
	      	<div class="warp_bg">
	      		<img :src="seller.avatar" alt="" width="100%" height="100%">
	      	</div>
	      	<!-- 弹窗 -->
	      	<div class="modal" v-show="modalShow">
	      		<div class="main">
					<h1>{{seller.name}}</h1>
					<star :size="24" :score="seller.score"></star>
					<!-- 优惠信息 -->
					<div class="warp_info">
						<div class="info_top">
							<h2>优惠信息</h2>
							<ul v-if="seller.supports">
								<li v-for="(items, index) in seller.supports" class="info_items">
									<span :class="classmap[seller.supports[index].type]"></span><span>{{seller.supports[index].description}}</span>
								</li>
							</ul>
						</div>
						<div class="info_bottom">
							<h2>商家公告</h2>
							<p>{{seller.bulletin}}</p>
						</div>
					</div>
	      		</div>
	      		<div class="footer" @click="hide">X</div>
	      	</div>
      </div>
</template>

<script>
import star from '../star/star.vue'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classmap = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5']
  },
  data () {
    return {
      modalShow: false
    }
  },
  components: {
    star
  },
  methods: {
    toggle () {
      this.modalShow = true
    },
    hide () {
      this.modalShow = false
    }
  }
}
</script>
<style>
.clearfix{
	overflow: hidden;
}
.header{
	position: relative;
	background: rgba(7,17,27,.5);
	overflow: hidden;
}
.content_top {
	padding: 24px 11px;
}
.content_top > img{
	width: 2.7306rem;
	height: 2.7306rem;
	border-radius: 4px;
}
.content_top .pull_left{
	float: left;
	margin-left: 12px;
}
.content_top_info li{
	margin-left: 3.904rem;
	margin-bottom: 0.412rem;
}
.content_top_info li:nth-of-type(1){
	font-weight: bold;
	font-family: "微软雅黑";
	color: #fff;
	font-size: 0.6826rem;
}
.content_top_info li:nth-of-type(2){
	font-size: 0.512rem;
	font-weight: 200;
	color: #fff;
}
.content_top_info li:nth-of-type(3){
	font-size: 0.4266rem;
	font-weight: 200;
	color: #fff;
	margin-bottom: 0;
	position: relative;
}
.content_top_info li:nth-of-type(3) strong{
	position: absolute;
	right: 12px;
	top: -15px;
	height: 1.024rem;
	width: 1.8346rem;
	text-align: center;
	line-height: 1.024rem;
	background: rgba(0,0,0,.4);
	border-radius: 24px;
	font-weight: bold;
	font-family: "微软雅黑"

}
@media screen and (max-width: 414px){
	.content_top_info li:nth-of-type(3) strong{
		top:-10px;
	}
}
.content_botm{
	background: rgba(0,0,0,.5);
	padding-top: 8px;
	padding-bottom: 8px;
	font-size: 12px;
	color: #fff;
	padding-left: 12px;
}
.content_botm span:first-child{
	display: inline-block;
	width: 44px;
	height: 24px;
	background:url(../../components/header/bulletin@2x.png) no-repeat;
	background-size: cover;
	color: #38424b;
	text-align: center;
	line-height: 24px;
	margin-right: 8px;
	border-radius: 3px;
	font-weight: bold;
	vertical-align: middle;
}
.content_botm span:last-child{font-size: 0.4266rem;vertical-align: middle;}
.content_top_info .pp{
	display: inline-block;
	height: 0.768rem;
	width: 1.28rem;
	background:url(../../components/header/brand@2x.png) no-repeat;
	background-size: cover;
	margin-right: 12px;
	vertical-align: middle;
}
.content_top_info .jian,.good_left_menu .icon{
	display: inline-block;
	height: 0.512rem;
	width: 0.512rem;
	vertical-align: middle;
	margin-right: 8px;
}
.good_left_menu .icon{ margin-right: 4px; vertical-align: text-bottom; }
.content_top_info .jian.bg1,
.info_top .info_items .bg1,
.good_left_menu li .bg1{
	background:url(../../components/header/decrease_1@2x.png) no-repeat;background-size: cover;}
.content_top_info .jian.bg2,
.info_top .info_items .bg2,
.good_left_menu li .bg2{
	background:url(../../components/header/discount_1@2x.png) no-repeat;background-size: cover;}
.content_top_info .jian.bg3,
.info_top .info_items .bg3,
.good_left_menu li .bg3{
	background:url(../../components/header/guarantee_1@2x.png) no-repeat;background-size: cover;}
.content_top_info .jian.bg4,
.info_top .info_items .bg4,
.good_left_menu li .bg4{
	background:url(../../components/header/invoice_1@2x.png) no-repeat;background-size: cover;}
.content_top_info .jian.bg5,
.info_top .info_items .bg5,
.good_left_menu li .bg5{
	background:url(../../components/header/special_1@2x.png) no-repeat;background-size: cover;}
.warp_bg{ 
	position: absolute; 
	left: 0; 
	top:0;  
	height: 100%; 
	width: 100%; 
	z-index: -1;
	filter: blur(8px);
}
.modal{
	position:fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(7,17,27,.8);
	z-index: 1;
	overflow: auto;
	font-family: "微软雅黑"
}
.footer{
	text-align: center;
	font-size: 1.28rem;
	color: rgba(255,255,255,.5);
	height: 2.7306rem;
	line-height: 2.7306rem;
	font-weight: 600;
}
.main{
	padding-top:2.7306rem; 
	min-height: calc(100vh - 2.7306rem);
	color: #fff;
	text-align: center;
	box-sizing: border-box;
}
.main h1{
	font-size: 0.6826rem;
	font-weight: 700;
	margin-bottom: 0.6826rem;
}
.warp_info{
	padding-left: 1.536rem;
	padding-right: 1.536rem;
}
.info_top{margin-bottom:1.1946rem ;}
.info_top h2,.info_bottom h2{
	font-size: 0.5973rem;
	position: relative;
	font-weight: 700;
}
.info_top > h2{
	margin-bottom: 1.024rem;
}
.info_top h2:after,.info_top h2:before,.info_bottom h2:after,.info_bottom h2:before{
	content: "";
	position: absolute;
	bottom: 0.1986rem;
	height: 1px;
	width: 4.7786rem;
	background: rgba(255,255,255,.3)
}
.info_top h2:after,.info_bottom h2:after{ left: 0; }
.info_top h2:before,.info_bottom h2:before{right: 0;}
.info_bottom p{
	font-size: 0.512rem;
	color: rgb(255,255,255);
	line-height: 1.024rem;
	letter-spacing: .5px;
	text-align: left;
	margin-top: 1.024rem;
}
.info_items span:first-child{
	display: inline-block;
	width:20px;
	height: 20px;
	background: red;
	vertical-align: middle;
	margin-right: 12px;
}
</style>