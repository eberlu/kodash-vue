<script setup lang="ts">

import { computed, type ComputedRef } from 'vue'

interface Props {
	footerNoBorder?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	footerNoBorder: false
})

// getters

const getBorderClass:ComputedRef<string> = computed(() => 
	!props.footerNoBorder ? 'border-t border-gray-200 dark:border-gray-900' : '')

</script>

<template>

	<div class="rounded shadow-md w-full p-3 lg:p-5 bg-white dark:bg-dark">

		<div 
			v-if="$slots.header" 
			class="pb-5 flex items-center justify-between">

			<slot name="header" />

		</div>

		<slot />

		<div 
			v-if="$slots.footer" 
			class="mt-5 pt-5 flex items-center justify-between"
			:class="[ getBorderClass ]">

			<slot name="footer" />

		</div>

	</div>

</template>