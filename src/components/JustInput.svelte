<template lang="pug">
.just-input.bg-gray-200.border-gray-200(
	class="focus:border-gray-400 hover:bg-gray-300 group-hover:bg-gray-300"
)
	+if('type === "text"')
		input(
			type="text"
			value="{value}"
			placeholder="{placeholder}"
		)

	+if('type === "number"')
		input(
			type="number"
			value="{value}"
			placeholder="{placeholder}"
		)

	+if('type === "date"')
		input(
			type="number"
			value="{value}"
			placeholder="{placeholder}"
		)
</template>

<script lang="ts">
export let type: String = 'text';
export let value: any = null;
export let placeholder: String = '';
</script>

<style lang="scss">
// .just-input {}
</style>
