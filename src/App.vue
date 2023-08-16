<script setup lang="ts">

import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'

const layout:ComputedRef<string> = computed(() => useRoute().meta.layout as string || 'DefaultLayout')

</script>

<template>

	<component :is="layout">

		<RouterView />

	</component>

</template>