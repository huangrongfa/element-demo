<template>
	<div class="rating_select">
		<ul class="rating_type">
			<li class="li_active positive" :class="{'active':selectType===2}" @click="tabs(2,$event)">{{desc.all}}<span>{{ratings.length}}</span></li>
			<li class="li_active positive" :class="{'active':selectType===0}" @click="tabs(0,$event)">{{desc.positive}}<span>{{positive.length}}</span></li>
			<li class="li_active negative" :class="{'active':selectType===1}" @click="tabs(1,$event)">{{desc.negative}}<span>{{negative.length}}</span></li>
		</ul>
		<div class="look" :class="{'on':onlyContent}" @click="toggle($event)">只看有内容的评价</div>
	</div>
</template>
<script>
const positive = 0
const negative = 1
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
  computed: {
    positive () {
      return this.ratings.filter((rating) => {
        return rating.rateType === positive
      })
    },
    negative () {
      return this.ratings.filter((rating) => {
        return rating.rateType === negative
      })
    }
  },
  methods: {
    tabs (type, event) {
      if (!event._constructed) {
        return
      }
      this.selectType = type
      this.$root.eventHub.$emit('ratingtype.tabs', type)
    },
    toggle (event) {
      if (!event._constructed) {
        return
      }
      this.onlyContent = !this.onlyContent
      this.$root.eventHub.$emit('content.toggle', this.onlyContent)
    }
  }
}
</script>
<style>
.rating_type{ margin-bottom: 0.768rem; }
.rating_type li{ display: inline-block;height: 1.3226rem; width:2.56rem; font-size: 0.512rem; font-family: "微软雅黑";text-align: center; line-height: 1.3226rem;border-radius: 2px; }
.rating_type li.li_active{background-color: #ccecf8;}
.rating_type li.negative{ background-color: #ccc; }
.rating_type li.positive.active{ background-color: #00a0dc; color: #fff; }
.rating_type li.negative.active{ background-color: #333;color: #fff;}
.look{ 
  font-size: 0.512rem; 
  color: #b7bbbf; 
  border-top:solid 1px rgba(7,17,27,.1);
  border-bottom:solid 1px rgba(7,17,27,.1); 
  padding: 0.512rem 0;
}
.rating_select .on{ font-weight: 700; color: red; }
</style>