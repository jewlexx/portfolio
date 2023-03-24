<script lang="ts">
	let textInput = '';

	const textToBin = (text: string): string => {
		let binary: string[] = [];

		for (let i = 0; i < text.length; i++) {
			binary.push(text.charCodeAt(i).toString(2));
		}

		return binary.join(' ');
	};
</script>

<svelte:head>
	<title>Binary converter</title>
	<meta
		name="description"
		property="og:description"
		content="Convert binary to text and text to binary"
	/>
</svelte:head>

<div class="flex flex-col pl-8 justify-center items-start w-full h-full absolute overlay">
	<input type="text" bind:value={textInput} />
	<p>{textToBin(textInput)}</p>
</div>
