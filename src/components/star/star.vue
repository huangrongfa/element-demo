<template>
	<div class="star" :class="starType">
  		<span v-for="itemclass in itemwarp" :class="itemclass" class="star_item"></span>
  	</div>
</template>

<script>
const lengs = 5
const on = 'on'
const half = 'half'
const off = 'off'
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType () {
      return 'star_' + this.size
    },
    itemwarp () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let onff = score % 1 !== 0
      let intet = Math.floor(score)
      for (let i = 0; i < intet; i++) {
        result.push(on)
      }
      if (onff) {
        result.push(half)
      }
      while (result.length < lengs) {
        result.push(off)
      }
      return result
    }
  }
}
</script>

<style>
	.star{ margin-bottom: 1.28rem; }
	.star .star_item{
		display: inline-block;
		height: 36px;
		width: 36px;
		margin-left: 22px;
		background-size: cover;
	}    
    .star_24 .star_item.on{ background:url(../../components/star/star24_on.png) no-repeat center; }
	.star_24 .star_item.half{ background:url(../../components/star/star24_half.png) no-repeat center;}
	.star_24 .star_item.off{ background:url(../../components/star/star24_off.png) no-repeat center;}
	.star .star_item:first-child{ margin-left: 0; }
	.info_items{
		font-size: 0.512rem;
		font-weight: 200;
		margin-bottom: 0.512rem;
		text-align: left;
		text-indent: 0.512rem;
	}
</style>