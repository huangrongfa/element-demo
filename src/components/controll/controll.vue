<template>
	<div class="controll">
		<transition name="fade">
			<p class="move_p">
				<em class="cricle" v-show="food.count>0" @click="decreaseCart($event)">-</em>
				<em class="number" v-show="food.count>0">{{food.count}}</em>
			</p>
		</transition>
		<em class="cricle" @click="addcurent($event)">+</em>
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
      event.stopPropagation()
    },
    decreaseCart (event) {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
      event.stopPropagation()
    }
  }
}
</script>
<style>
.cricle{ position: absolute;right: 0; bottom: 20px; width:0.8533rem;height:0.8533rem; line-height: 0.7533rem;font-size: 20px; font-style:inherit; font-weight: 600;background: #00a0dc; text-align: center; color: #fff; border-radius: 50%; }
.controll .move_p{
    position: absolute;
    width: 35%;
    right: 50px;
    bottom: 0px;
    z-index: 1;
    height: 28px;
}
.controll .move_p .number {
	color: #ccc;
	font-style: inherit;
	font-weight: 700;
	position: absolute;
    right: -22px;
    top: -10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>