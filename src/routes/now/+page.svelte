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

<div class="flex flex-col items-center justify-center min-h-full min-w-full">
	<h1 class="font-bold text-5xl sm:text-8xl text-green-500 dark:text-green-400">{time}</h1>
	<p class="text-2xl">seconds since 01/01/1970 (UTC)</p>
</div>
