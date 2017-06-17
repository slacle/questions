import allQuestions from './components/allQuestions.vue';
import single from './components/single.vue';
import profile from './components/profile.vue';

export default [
	{
		path: '/',
		component: allQuestions
	},
	{
		path: '/question/:id',
		component: single
	},
	{
		path: '/profile/:id',
		component: profile
	}
]