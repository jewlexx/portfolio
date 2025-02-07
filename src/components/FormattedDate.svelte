<script lang="ts">
	interface $$Props {
		date: Date;
	}

	const { date }: $$Props = $props();
</script>

<time dateTime={date.toISOString()}>
	{date.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})}
</time>
