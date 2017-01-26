<template>
	<div class="shall">
		<ul>
			<li><span></span>￥0</li>
			<li>另需配送费￥4元</li>
			<li>￥20元起送</li>
		</ul>
	</div>
</template>
<script>
	export default {}
</script>
<style>
	.shall{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 2.048rem;
		width:100%;
		background: #141d27;
		color: #919396;
	}
	.shall ul{
		display: flex;
		line-height: 2.048rem;
		font-family: "微软雅黑";
	}
	.shall ul li:nth-of-type(1){
		flex: 2;
		padding-left: 0.768rem;

	}
	.shall ul li:nth-of-type(1) span{
		display: inline-block;
		height: 1.8773rem;
		width: 1.8773rem;
		background: #2b343d url(../../components/shallcat/1.png) no-repeat center center;
		background-size: 80%;
		border-radius: 50%;
		margin-top: -20px;
		margin-right: 0.768rem;
	}
	.shall ul li:nth-of-type(2){
		flex: 3;
		font-size: 0.6826rem;
		text-align: center;
		position: relative;
	}
	.shall ul li:nth-of-type(2):after{
		height: 1.066rem;
		background: rgba(255,255,255,.1);
		position: absolute;
		content: "";
		display: block;
		width:1px;
		left: 0;
		top:0.512rem;
	}
	.shall ul li:nth-of-type(3){
		flex: 1;
		font-size: 0.512rem;
		background: #2b333b;
		font-weight: bold;
		text-align: center;
	}
</style>