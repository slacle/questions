<template>
  <div>
  	<router-view></router-view>
  </div>
</template>

<script>
import allQuestions from './components/allQuestions.vue';
import single from './components/single.vue';
import profile from './components/profile.vue';

export default {
  components: {
  	'all-questions': allQuestions,
  	'single': single,
  	'profile': profile
  },
  data () {
    return {
	  hello: 'world'
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/sass/style.scss";
</style>