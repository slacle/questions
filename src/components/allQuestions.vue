<template>
<div>

	<header class="main-header">

		<div class="inner">

			<a href="#" class="back-btn">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXCAMAAAGUitUYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyQkE0NDM2NDBGNTExRTdCNTdFQTk1M0RENzEwMEQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyQkE0NDM3NDBGNTExRTdCNTdFQTk1M0RENzEwMEQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJCQTQ0MzQ0MEY1MTFFN0I1N0VBOTUzREQ3MTAwRDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJCQTQ0MzU0MEY1MTFFN0I1N0VBOTUzREQ3MTAwRDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YQULqAAAAV1BMVEXj5ebR0tO3ubzr7e2vsbT4+Pj3+Pjs7O3Hycvt7e7R0tTb3N3a2937+/vQ0dPHyMry8vP8/Pzy8/PGyMrGx8mytLi/wML39/jk5OW+wML+/v6ys7f///+5/Xq9AAAAHXRSTlP/////////////////////////////////////AFmG52oAAADLSURBVHjaYpCRYQAhQYAAApHSIDZAAAERtwwDswxYQkYSIIBAhAhYmEEKJMYIlmACy4rLAAQQSFZGhk0SrJaJFyTHyQcWA4pISUMZQMDDAGUAgTBAAEEZDBBakg1Ms4AVCPGDdXCxgxVIS8mg0DKMzFATBThgJrPADJZkhZorARBgMItAQIpRmhnBZ5ZmlII7RJCDSQDhQgYWHpgqBhlWMUk2hBkMoowyyAAoLynJiswH6+dG4cvI8PIzCSHzgYBdmksKmQ90H580JwBXHSEYlhMkVgAAAABJRU5ErkJggg==" alt="back">
			</a>

			<div class="header-top">
				
				<div class="header-top-left">				
					<span>
					<h1>QUESTIONS</h1>
					<a href="#" class="add-question">+</a>
					</span>

					<div class="radios">
					  <div class="radio">
					    <input id="shelf" name="radio" type="radio" value="shelf" v-model="radio" checked>
					    <label for="shelf">My shelf</label>
					  </div>
					  <div class="radio">
					    <input id="all-questions" name="radio" type="radio" value="all-questions" v-model="radio">
					    <label  for="all-questions">All questions</label>
					  </div>
					</div>
				</div> <!-- header-top-left -->

				<div class="sort">
		  			Sort by: <a href="#" class="active">recent</a> or <a href="#">hot</a>
				</div>

			</div> <!-- header-top -->

			<div class="search">
				<input id="search" type="search" placeholder="Search questions" v-model="search">
				<button type="button">SEARCH</button>
			</div>

		</div> <!-- inner -->
	</header>

	<div class="container">


		<section class="question" v-for="question in filteredQuestions">

			<header>
				<router-link v-bind:to="'/profile/' + question.userId"><img v-bind:src="users[question.userId].photo" alt=""></router-link>
				<p><router-link v-bind:to="'/profile/' + question.userId">{{users[question.userId].name}}</router-link> IS ASKING:</p>
				<h1><router-link v-bind:to="'/question/' + question.questionId">{{question.title}}</router-link></h1>
			</header>

			<div class="details">
				<div class="panels">
					<div class="asked"><hr>asked</div>
					<div class="more-act"><span>{{question.activities}}</span>more activities</div>
					<router-link v-bind:to="'/profile/' + question.answers[0].comments[2].userId" v-if="question.answers[0].comments[2]"><div class="reacted"><img v-bind:src="users[question.answers[0].comments[2].userId].photo" alt=""><hr>commented</div></router-link>
					<router-link v-bind:to="'/profile/' + question.answers[0].comments[1].userId" v-if="question.answers[0].comments[1]"><div class="reacted"><img v-bind:src="users[question.answers[0].comments[1].userId].photo" alt=""><hr>commented</div></router-link>
					<router-link v-bind:to="'/profile/' + question.answers[0].comments[0].userId" v-if="question.answers[0].comments[0]"><div class="reacted"><img v-bind:src="users[question.answers[0].comments[0].userId].photo" alt=""><hr>commented</div></router-link>
					<router-link v-bind:to="'/profile/' + question.answers[0].userId"><div class="reacted answered"><img v-bind:src="users[question.answers[0].userId].photo" alt=""><hr>answered</div></router-link>
				</div>
				<div class="stats">
					<p><span>2</span> related discussion</p>
					<p><span>8</span> peers involved</p>
					<p><span>5</span> conversations</p>
				</div>
			</div> <!-- details -->

		</section>


		<section class="question load-more">
			<button v-on:click="loadMoreQuestions">load more questions</button>
		</section>
		
	</div> <!-- container -->
		
</div>
</template>

<script>
export default {
  data () {
    return {
      questions: [],
      loadedQuestions: [],
      users: [],
	  search: '',
	  radio: 'all-questions'
    }
  },
  created(){
    this.$http.get('../data.json').then(function(data){
      this.questions = data.body.questions;
      this.loadedQuestions = this.questions.splice(0, 3);
      this.users = data.body.users;
    })
  },
  methods: {
  	loadMoreQuestions: function(){
  		if(this.questions.length > 0){
			this.loadedQuestions.push(this.questions.shift());
		}
  	}
  },
  computed: {
    filteredQuestions: function(){
    	var searched = this.loadedQuestions.filter((question) => {
          return question.title.toLowerCase().match(this.search.toLowerCase());
        });

    	if(this.radio == "shelf") {
	      return searched.filter((question) => {	      	
		        return question.userId === 4;		    
	      });
	    } else {
	    	return searched;
	    }
    }
  }
}
</script>

<style lang="scss">

</style>