<template>
	<div class="rating_select">
		<ul class="rating_type">
			<li class="positive" :class="{'active':selectType===2}" @click="tabs(2,$event)">{{desc.all}}</li>
			<li class="positive" :class="{'active':selectType===0}" @click="tabs(0,$event)">{{desc.positive}}</li>
			<li class="negative" :class="{'active':selectType===1}" @click="tabs(1,$event)">{{desc.negative}}</li>
		</ul>
		<div class="look" :class="{'on':onlyContent}" @click="toggle($event)">只看有内容的评价</div>
	</div>
</template>
<script>
// const positive = 0
// const negative = 1
const all = 2
export default {
  props: {
    ratings: {
      type: Array,
      default () {
        return []
      }
    },
    selectType: {
      type: Number,
      default: all
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default () {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    }
  },
  methods: {
    tabs (type, event) {
      if (!event._constructed) {
        return
      }
      this.selectType = type
      this.$dispatch('ratingtype.tabs', type)
    },
    toggle (event) {
      if (!event._constructed) {
        return
      }
      this.onlyContent = !this.onlyContent
      this.$dispatch('content.toggle', this.onlyContent)
    }
  }
}
</script>
<style>
.rating_type{ margin-bottom: 0.768rem; }
.rating_type li{ display: inline-block;height: 1.3226rem; width:2.56rem; font-size: 0.512rem; font-family: "微软雅黑";text-align: center; line-height: 1.3226rem;border-radius: 2px; }
.rating_type li.positive{background-color: #ccecf8;}
.rating_type li.active{ background-color: #00a0dc; color: #fff; }
.rating_type li.negative{ background-color: #e9ebec; }
.look{ font-size: 0.512rem; color: #b7bbbf; border-top:solid 1px rgba(7,17,27,.1); padding-top: 0.512rem; }
.rating_select .on{ font-weight: 700; color: red; }
</style>