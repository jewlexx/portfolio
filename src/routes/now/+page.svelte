<script lang="ts">
	const getTime = () => Math.floor(Date.now() / 1000);

	let time = getTime();

	let interval: number;

	$: {
		clearInterval(interval);
		interval = setInterval(() => {
			time = getTime();
		}, 1000) as never;
	}
</script>

<div class="main">
	<h1 class="font-bold text-5xl sm:text-8xl text-green-500 dark:text-green-400">{time}</h1>
	<p class="text-2xl">seconds since 01/01/1970 (UTC)</p>
</div>

<style lang="scss">
	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		min-height: 100%;
		min-width: 100%;
	}
</style>
