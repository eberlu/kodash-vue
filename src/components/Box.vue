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

const getPaddingClass:ComputedRef<string> = computed(() => 'p-3 lg:p-5')

</script>

<template>

	<div class="rounded shadow-md w-full bg-white dark:bg-dark">

		<div 
			v-if="$slots.header" 
			class="flex items-center justify-between"
			:class="[ getPaddingClass ]">

			<slot name="header" />

		</div>

		<div :class="[ getPaddingClass ]">
			<slot />
		</div>

		<div 
			v-if="$slots.footer" 
			class="mt-5 flex items-center justify-between"
			:class="[ getBorderClass ]">

			<div :class="[ getPaddingClass ]">
				<slot name="footer" />
			</div>

		</div>

	</div>

</template>