<template>
<div>
<!-- TOP HEADER Start ================================================== -->
	<section id="top">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
				</div>
				<div class="col-md-3 clearfix">
					<ul class="login-cart">
						<li>
								<i class="fa fa-user"></i><router-link to="/memberinfo"> 마이페이지</router-link>
						</li>
						<li><a data-toggle="modal" data-target="#myModal" href="#">
								<i class="fa fa-user"></i> 로그인
						</a></li>
						<li><a data-toggle="modal" href="#" @click="$store.dispatch('logout')">
								<i class="fa fa-user"></i> 로그아웃
						</a></li>
						<li>
								<a data-toggle="modal" href="#"><i class="fa fa-user"></i><router-link to="/memberreg">회원 가입</router-link></a>
						</li>
					</ul>
				</div>
				<div class="col-md-2">
					<div class="search-box">
						<div class="input-group">
							<input placeholder="Search Here" type="text" class="form-control">
							<span class="input-group-btn">
								<button class="btn btn-default" type="button"></button>
							</span>
						</div>
						<!-- /.input-group -->
					</div>
					<!-- /.search-box -->
				</div>
			</div>
			<!-- End Of /.row -->
		</div>
		<!-- End Of /.Container -->


		<!-- MODAL Start ================================================== -->

		<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">환영합니다.</h4>
					</div>
					<div class="modal-body clearfix">
						<div class="form-group">
						<label for="usrid" style="color: black">아이디:</label>
						<input type="text" class="form-control" placeholder="ID" required id="usr" v-model="id">
						</div>
						<div class="form-group">
						<label for="usrpw" style="color: black">비밀번호:</label>
						<input type="password" class="form-control" placeholder="Password" required id="pwd" v-model="pw">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="button" @click="login({id,pw})">로그인</button>
						<router-link to="/findpassword"><button type="button" class="button">비밀번호 찾기</button></router-link>
						<button type="button" class="button" data-dismiss="modal">취소</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End of /Section -->

	<!-- LOGO Start
    ================================================== -->
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<router-link to="/"><img src="images/logo.png" alt="logo">
					</router-link>
				</div>
				<!-- End of /.col-md-12 -->
			</div>
			<!-- End of /.row -->
		</div>
		<!-- End of /.container -->
	</header>
	<!-- End of /Header -->

	<!-- MENU Start
    ================================================== -->

	<nav class="navbar navbar-default">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
			</div>
			<!-- End of /.navbar-header -->

			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav nav-main">
					<li><router-link to="/noticelist">공지 사항</router-link>
					</li>
					<li ref="myModal"><router-link to="/foodlist">상품 정보</router-link></li>
					<li><router-link to="/onedayintake">하루 권장량 섭취 정보</router-link></li>
					<li><router-link to="/boardlist">QnA</router-link></li>
					<li><router-link to="/intake">내 섭취 정보</router-link></li>
					<li class="dropdown"><a href="#"> PAGES <span
							class="caret"></span>
					</a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li><a href="#">Separated link</a></li>
						</ul></li>
					<!-- End of /.dropdown -->
				</ul>
				<!-- End of /.nav-main -->
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
	<!-- End of /.nav -->
<router-view :key="$route.fullPath"/>
</div>
</template>

<script>

import { mapState, mapActions } from "vuex"
export default {
	name: "app",
	data () {
		return {
			id : '',
			pw : ''
		}
	},
	computed: {
		...mapState(["isLogin", "isLoginFalse"])
	},
	methods: {
		...mapActions(["login"])
	}
};


</script>
<style>
</style>
