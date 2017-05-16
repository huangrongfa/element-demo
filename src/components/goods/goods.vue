<template>
      <div class="goods">
      	<div class="good_left_menu" ref="menuWarper">
            <div class="scroll_ul">
            <ul>
              <li v-for="(items, index) in goods" :class="{'scrollClass':currentIndex===index}" @click="selectmenu(index, $event)">
              <span v-show="items.type>0" class="icon" :class="classmap[items.type]"></span>{{items.name}}</li>
            </ul>
            </div>
      	</div>
      	<div class="good_right_menu" ref="foodWarper">
      		<div>
      			<dl v-for="item in goods" class="food_list">
	      			<dt class="title">{{item.name}}</dt>
	      			<dd v-for="food in item.foods" class="info_food" @click="detail(food,$event)">
	      				<img :src="food.icon" alt="">
		      			<span>{{food.name}}</span>
		      			<span>{{food.description}}</span>
		      			<span>月售{{food.sellCount}}份  好评率{{food.rating}}%</span>
		      			<span>￥{{food.price}}</span>
		      			<controll :food="food"></controll>
	      			</dd>
      			</dl>
      		</div>
      	</div>
        <!-- 购物车组件 -->
      	<shallcat :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" :select-food="selectFoods"></shallcat>
        <!-- 详情组件 -->
      	<food :food="selectedFood" ref="food"></food>
      </div>
</template>
<script>
import BScroll from 'better-scroll'
import shallcat from 'components/shallcat/shallcat'
import food from 'components/food/food'
import controll from 'components/controll/controll'
// import Vue from 'vue'
const isok = 0
// const eventHub = new Vue()
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      oheight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.oheight.length; i++) {
        let height1 = this.oheight[i]
        let height2 = this.oheight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  components: {
    shallcat,
    controll,
    food
  },
  created () {
    this.classmap = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5']
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.error === isok) {
        this.goods = response.data
        this.$nextTick(() => {
          this.initscroll()
          this.getHeight()
        })
      }
    })
  },
  methods: {
    initscroll () {
      this.menuscroll = new BScroll(this.$refs.menuWarper, {
        click: true
      })
      this.foodscroll = new BScroll(this.$refs.foodWarper, {
        probeType: 3,
        click: true
      })

      this.foodscroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    getHeight () {
      let oheight = this.$refs.foodWarper.getElementsByClassName('food_list')
      let oneHeight = 0
      this.oheight.push(oneHeight)
      for (let i = 0; i < oheight.length; i++) {
        let itemHeight = oheight[i]
        oneHeight += itemHeight.clientHeight
        this.oheight.push(oneHeight)
      }
    },
    selectmenu (index, event) {
      if (!event._constructed) {
        return
      }
      let oheight = this.$refs.foodWarper.getElementsByClassName('food_list')
      let els = oheight[index]
      this.foodscroll.scrollToElement(els, 2000)
    },
    detail (food, event) {
      if (!event._constructed) {
        return
      }
      this.selectedFood = food
      this.$refs.food.slideShow()
    }
  }
}
</script>
	
<style scoped>
.goods{display: flex;/*overflow: hidden;*/}
/*.good_left_menu{flex: 1;}*/
.good_left_menu  ul{ min-height: 100%; }
.good_left_menu li{width:3.4133rem;height: 2rem;line-height: 2rem;text-align: center;background:#f3f5f7;border-bottom:solid 1px rgba(7,17,27,.2);font-size: 0.512rem;color: #07111b;position: relative;}
.good_left_menu li:last-child{border-bottom:none}
.good_left_menu li:after,.good_left_menu li:before{content: "";display: block;position: absolute;bottom: -1px;background: #f3f5f7;height: 1px;width:0.512rem;}
.good_left_menu li:after{left: 0;}
.good_left_menu li:before{right: 0;}
.good_right_menu .food_list .title{ color: #969ba1; height: 1.1093rem;line-height: 1.1093rem; background: #f4f5f7; font-size: 0.512rem; text-indent: 0.5973rem; margin-bottom: 0.768rem;}
.good_right_menu{width:100%;box-sizing: border-box;max-height: 18.9866rem; overflow: hidden;}
.good_right_menu dl{ overflow: hidden; font-family: "微软雅黑";}
.good_right_menu dd{ font-size: 0.5973rem;color: rgb(7,17,27);position: relative;border-bottom: solid 1px rgba(7,17,27,.1);padding-bottom:0.786rem ;margin-bottom:0.786rem ; overflow: hidden; cursor:default; }
.good_right_menu dd span{ display: block;margin-bottom: 0.3413rem; font-size: 0.4266rem;margin-left: 3.6266rem; }
.good_right_menu dd span:nth-of-type(2),.good_right_menu dd span:nth-of-type(3){color: rgb(147,153,159);}
.good_right_menu dd span:nth-of-type(4){margin-bottom:0;color: red;font-weight: bold;}
.food_list:last-child .info_food:last-child{ margin-bottom: 0; }
.info_food img{ float: left; margin-right: 0.4266rem;width:2.432rem; height:2.432rem;border-radius: 4px; margin-left: 0.786rem;  }
.scrollClass{ background: #fff !important; font-weight: 700; margin-top: -1px; border-left: solid 2px #2196F3}
</style>