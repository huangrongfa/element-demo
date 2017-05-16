<template>
	<div class="controll">
      <transition name="fadeRotate">
        <div class="cart_decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
            <span class="cricle inner">-</span>
        </div>
      </transition>
      <div class="cart_count" v-show="food.count>0">
        {{food.count}}
      </div>
      <div class="cart-add" @click.stop.prevent="addcurent($event)">
        <i class="cricle">+</i>
      </div>
	</div>
</template>
<script>
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addcurent (event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decreaseCart (event) {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>
<style>
.controll{
  position: relative;
}
.cricle{ 
  position: absolute;
  right: 12px; 
  bottom: 10px;
  width:0.8533rem;
  height:0.8533rem; 
  line-height: 0.7533rem;
  font-size: 20px; 
  font-style:inherit; 
  font-weight: 600;
  background: #00a0dc; 
  text-align: center; 
  color: #fff; 
  border-radius: 50%;
}
.cart_count{
  font-weight: 700;
  position: absolute;
  top: -26px;
  right: 43px;
  color: #ccc;
}
.cart_decrease{
  font-weight: 700;
  position: absolute;
  right: 50px;
  top:8px;
}
.fadeRotate-enter-active,.fadeRotate-leave-active {
  transform:translate3d(0,0,0);
  transition: linear .3s
}
.fadeRotate-enter,.fadeRotate-leave-active {
  transform:translate3d(100px,0,0);
  opacity: 0;
}
</style>