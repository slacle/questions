<template>
<div class="profile">

	<div class="profile-wrap">

		<div class="close"><router-link to="/">x</router-link></div>

		<img v-bind:src="user.photo" alt="" class="main-pic">

		<a class="name">{{user.name}}</a>

		<div class="profile-meta">
			<div class="member-for">MEMBER FOR <span>{{user.memberFor}}</span></div>
			<div class="last-seen">LAST SEEN <span>{{user.lastSeen}}</span></div>
			<div class="activity">ACTIVITY LEVEL <img src="../assets/img/badges.png" alt=""></div>
		</div>

		<hr>

		<div class="started">
			<a href="#" class="previous end">&lt;</a>
			<h1>How it all started</h1>
			<a href="#" class="next">&gt;</a>
		</div>

		<h2>That's where we have been these {{user.memberFor}} ago</h2>

		<div class="squares">
			<div id="peers"><span>{{user.peers}}</span> peers</div>
			<div id="discussions"><span>{{user.discussions}}</span> discussions</div>
			<div id="findings"><span>{{user.findings}}</span> findings</div>
			<div id="questions"><span>{{user.asked}}</span> questions</div>
		</div>

		<h2>Who joined the platform that same period</h2>

		<div class="who-joined">
			<div><div><a href="#"><img src="../assets/img/face5.jpg" alt=""></a></div><a href="#">S.E.N. Waweru</a></div>
			<div><div><a href="#"><img src="../assets/img/face2.jpg" alt=""></a></div><a href="#">Patricia</a></div>
			<div><div><a href="#"><img src="../assets/img/face4.jpg" alt=""></a></div><a href="#">Joseph Aluoch</a></div>
		</div>

		<h2>The hottest discussion these days</h2>

	</div><!-- profile-wrap -->

	<div class="hottest">
		<div><a href="#"><img src="../assets/img/face5.jpg" alt=""></a></div>
		<span><a href="#">Andrew</a> FOUND THE GUARDIAN ARTICLE</span> <br>
		<a href="single.html">Vegan diet to stop diabetes progress</a>
		<div class="hot-stats">
			<div id="peers"><span>6</span> peers involved</div>
			<div id="related"><span>3</span> related discussions</div>
			<div id="conversations"><span>3</span> conversations</div>
			<div id="upvotes"><span>19</span> upvotes</div>
		</div>
	</div>
	
</div><!-- profile -->
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			user: {}
		}
	},
	created() {
		this.$http.get('../data.json').then(function(data){
			this.user = data.body.users[this.id];
		});
	}
}	
</script>

<style lang="scss">

</style>