<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const layout = computed(() => useRoute().meta.layout || 'DefaultLayout')

</script>

<template>

	<component :is="layout">

		<RouterView />

	</component>

</template>