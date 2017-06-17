<template>
<div class="single">

<header class="main-header">
	<div class="inner">
		<div class="header-top">

			<router-link to="/" class="back-btn">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXCAMAAAGUitUYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyQkE0NDM2NDBGNTExRTdCNTdFQTk1M0RENzEwMEQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyQkE0NDM3NDBGNTExRTdCNTdFQTk1M0RENzEwMEQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJCQTQ0MzQ0MEY1MTFFN0I1N0VBOTUzREQ3MTAwRDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJCQTQ0MzU0MEY1MTFFN0I1N0VBOTUzREQ3MTAwRDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YQULqAAAAV1BMVEXj5ebR0tO3ubzr7e2vsbT4+Pj3+Pjs7O3Hycvt7e7R0tTb3N3a2937+/vQ0dPHyMry8vP8/Pzy8/PGyMrGx8mytLi/wML39/jk5OW+wML+/v6ys7f///+5/Xq9AAAAHXRSTlP/////////////////////////////////////AFmG52oAAADLSURBVHjaYpCRYQAhQYAAApHSIDZAAAERtwwDswxYQkYSIIBAhAhYmEEKJMYIlmACy4rLAAQQSFZGhk0SrJaJFyTHyQcWA4pISUMZQMDDAGUAgTBAAEEZDBBakg1Ms4AVCPGDdXCxgxVIS8mg0DKMzFATBThgJrPADJZkhZorARBgMItAQIpRmhnBZ5ZmlII7RJCDSQDhQgYWHpgqBhlWMUk2hBkMoowyyAAoLynJiswH6+dG4cvI8PIzCSHzgYBdmksKmQ90H580JwBXHSEYlhMkVgAAAABJRU5ErkJggg==" alt="back">
			</router-link>
			
			<div class="header-top-left">				
				<span>
				<h1>QUESTION</h1>
				<a href="#" class="add-question">+</a>
				</span>
			</div> <!-- header-top-left -->

			<div class="discussed">
	  			Last time discussed <span>1</span> day ago
			</div>

		</div> <!-- header-top -->
	</div> <!-- inner -->
</header>

<div class="container">

	<article class="question">
		<header>
			<router-link v-bind:to="'/profile/' + question.userId"><img v-bind:src="user.photo" alt=""></router-link>
			<p><router-link v-bind:to="'/profile/' + question.userId">{{user.name}}</router-link> FOUND ON NEW YORK TIMES:</p>

			<h1><a href="#">{{question.title}}</a></h1>
		</header>

		<div class="question-txt">
			<p>{{question.body}}</p>
			<div class="actions">
				<a href="#" class="unfollow">unfollow</a>
				<div class="votes">
					<span class="vote-num">{{question.votes}}</span> upvotes
					<span class="vote-btns">
						<a href="#" class="up" @click.once="question.votes += 1">up</a>
						<a href="#" class="down" @click.once="question.votes -= 1">down</a>
					</span>
				</div>
			</div>
		</div> <!-- question-txt -->
	</article>

	<div class="answer-give">
		<button type="button" class="answer-btn">GIVE new answer</button>
		<p><span>2</span> peers already answered Eva</p>
	</div>

	<div class="comment comment-1">
		<div class="comment-wrap">
			<a href="profile.html"><img src="../assets/img/face1.jpg" alt=""></a>
			<div class="comment-content">
				<p class="comment-meta"><a href="profile.html">Patricia</a> COMMENTED IT <span class="bullet">&bull;</span> <span>yesterday</span></p>
				<p class="comment-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus sem aliquet.</p>
			</div>

			<div class="votes">
				<span class="vote-num">8</span> upvotes
				<span class="vote-btns">
					<a href="#" class="up">up</a> <a href="#" class="down">down</a>
				</span>
			</div>
		</div><!-- comment-wrap -->

		<div class="comment comment-2">
			<div class="comment-wrap">
				<a href="profile.html"><img src="../assets/img/face4.jpg" alt=""></a>
				<div class="comment-content">
					<p class="comment-meta"><a href="profile.html">David</a> COMMENTED IT <span class="bullet">&bull;</span> <span>yesterday</span></p>
					<p class="comment-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus sem aliquet.</p>
				</div>

				<div class="votes">
					<span class="vote-num">2</span> upvotes
					<span class="vote-btns">
						<a href="#" class="up">up</a> <a href="#" class="down">down</a>
					</span>
				</div>
			</div><!-- comment-wrap -->
		</div><!-- comment-2 -->
	</div><!-- comment-1 -->

	<div class="button-wrap">
		<button type="button" class="continue-btn">CONTINUE discussion</button>
	</div>	

	<div class="comment comment-1 with-btn">
		<div class="comment-wrap">
			<a href="profile.html"><img src="../assets/img/face3.jpg" alt=""></a>
			<div class="comment-content">
				<p class="comment-meta"><a href="profile.html">Joseph</a> COMMENTED IT <span class="bullet">&bull;</span> <span>two days</span></p>
				<p class="comment-txt">Lorem ipsum dolor sit amet, consectetur adipiscing gravida lacus a elit. Proin cursus sem aliquet, gravida lacus a, sagittis ex, consectetur adipiscing elit.</p>
			</div>
			
			<div class="votes">
				<span class="vote-num">3</span> downvotes
				<span class="vote-btns downvotes">
					<a href="#" class="up">up</a> <a href="#" class="down">down</a>
				</span>
			</div>
		</div><!-- comment-wrap -->		
	</div><!-- comment-1 -->

	<div class="button-wrap">
		<button type="button" class="comment-btn">COMMENT</button>
	</div>

</div> <!-- container -->

</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			question: {},
			user: {}
		}
	},
	created() {
		this.$http.get('../data.json').then(function(data){
			this.question = data.body.questions[this.id];
			this.user = data.body.users[this.question.userId];
		});
	}
}	
</script>

<style lang="scss">

</style>