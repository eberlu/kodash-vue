import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Dashboard.vue')
		},
		{
			path: '/forms',
			name: 'forms',
			component: () => import('../views/Dashboard.vue')
		},
		{
			path: '/components',
			children: [
				{
					path: 'box',
					name: 'components.box',
					component: () => import('../views/ComponentBox.vue')
				},
			]
		},
	]
})

export default router
