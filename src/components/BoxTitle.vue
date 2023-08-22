<script setup lang="ts">

interface Props {
	title: string;
}

defineProps<Props>()

</script>

<template>

	<h2 class="font-semibold text-xl text-gray-600 dark:text-gray-300">
		{{ title }}
	</h2>

</template>