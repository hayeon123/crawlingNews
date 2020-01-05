<template>
 <div>
<!-- SLIDER Start ================================================== -->
	<section id="slider-area">
		<!-- <image-slider>
			<img :src="images[currentNumber]"/>
		</image-slider> -->
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div id="slider" class="nivoSlider">
						<img src="../../public/images/slider.jpg" alt="" /> <img
							src="../../public/images/slider1.jpg" alt="" /> <img src="../../public/images/slider2.jpg"
							alt="" />
					</div>
					<!-- End of /.nivoslider -->
				</div>
				<!-- End of /.col-md-12 -->
			</div>
			<!-- End of /.row -->
		</div>
		<!-- End of /.container -->
	</section>
	<!-- End of Section -->
  <!-- <div class="jumbotron"
		style="background-color: #777; text-align: center; margin: 0px">
		<div class="container">
			<h2 style="font-size: 30px; color: white;">
				WHAT WE <strong>PROVIDE</strong>
			</h2>
			<hr width="450px">

			<p style="font-size: 15px; color: white;">건강한 삶을 위한 먹거리 프로젝트</p>

		</div>
	</div> -->

<!-- CATAGORIE Start
    ================================================== -->

	<section id="catagorie">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="block">
						<div class="block-heading">
							<h2>OUR FOOD CATEGORIES</h2>
						</div>
						<div class="row">
							<!-- End of /.col-sm-6 col-md-4 -->
							<div v-for="food in info" :key="food.code" class="col-sm-6 col-md-4" align="center">
								<div class="thumbnail">
									<a class="catagotie-head" @click="show_foodinfo(food.code)"> <img
										:src="'../../' + food.img" style='max-width: 60%; height: auto;' alt="...">
										<h5>{{food.name}}</h5>
									</a>
									<div class="caption">
										<p>
											<a @click="show_foodinfo(food.code)"
												class="btn btn-default btn-transparent" role="button"> <span>상품 정보로
													이동</span>
											</a>
										</p>
									</div>
									<!-- End of /.caption -->
								</div>
								<!-- End of /.thumbnail -->
							</div>
							<!-- <div v-for="food in info" :key="food.code" class="col-sm-6 col-md-4" align="center">
								<div class="thumbnail" id='container' style='text-align: center; box-shadow: 0 9px 9px -7px rgba(0, 0, 0, 0.4);'>
									<a class="catagotie-head" @click="show_foodinfo(food.code)"> <img
										:src="'../../' + food.img" style='max-width: 60%; height: auto;' alt="...">
									</a>
									<div class='overlay1'>
									<div class='text'>{{food.name}}</div>
								</div>
									<div class="caption overlay2" >
										<div class='text'>
										<p>
											<a @click="show_foodinfo(food.code)"
												class="btn btn-default btn-transparent" style='background-color: rgba(0, 0, 0, 0); border: solid 1px white;' role="button"> <span style="color: white">상세
													보기</span>
											</a>
										</p>
										</div>
									</div> -->
									<!-- End of /.caption -->
								<!-- </div> -->
								<!-- End of /.thumbnail -->
							<!-- </div> -->
							<!-- End of /.col-sm-6 col-md-4 -->
						</div>
						<!-- End of /.row -->
					</div>
					<!-- End of /.block -->
				</div>
				<!-- End of /.col-md-12 -->
			</div>
			<!-- End of /.row -->
		</div>
		<!-- End of /.container -->
	</section>
	<!-- End of Section -->

	<div class="footer">
		<div class="container" style="padding: 30px;">
			<h2 style="font-size: 23px;">Find Us</h2>

			<hr>
			<p style="color: #aaa;">
				<span class="glyphicon glyphicon-map-marker" aria-hidden="true"
					style="color: #5bc0de;"></span> &nbsp;(SSAFY) 서울시 강남구 테헤란로 멀티스퀘어
			</p>
			<p style="color: #aaa;">
				<span class="glyphicon glyphicon-earphone" aria-hidden="true"
					style="color: #5bc0de;"></span> &nbsp;1544-9001
			</p>
			<p>
				<a href="#" style="color: #5bc0de;"><span
					class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
					&nbsp;admin@ssafy.com</a>
			</p>
		</div>
	</div>
	<div class="sub-footer" style="background-color: #eee; color: #aaa;">
		<div class="container">
			<div class="subfooter-inner">
				<div class="row">
					<div class="col-md-12">

						<p class="text-center" style="padding: 30px;">Copyright by
							SSAFY. All rights reserved.</p>
					</div>
				</div>

			</div>

		</div>
	</div>
</div>
</template>
<!-- jS -->
<script src="../../public/js/jquery.min.js" type="text/javascript"></script>
<script src="../../public/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../../public/js/jquery.nivo.slider.js" type="text/javascript"></script>
<script src="../../public/js/owl.carousel.min.js" type="text/javascript"></script>
<script src="../../public/js/jquery.nicescroll.js"></script>
<script src="../../public/js/jquery.scrollUp.min.js"></script>
<script src="../../public/js/main.js" type="text/javascript"></script>
<script>
import http from "../http-common";
import Slider from "../slider";
export default {
  name: "main",
  data() {
    return {
      uid:"ssafy",
      upHere: false,
      info: [],
      loading: true,
      errored: false
    };
  },
  components : {
	Slider
  },
  methods: {
    retrieveFoods() {
      http
        .get("/foodinfo")
        .then(response => {this.info = response.data.resvalue
        alert(response.data)
        })
        .catch(() => (this.errored = true))
        .finally(() => (this.loading = false));
    },
    refreshList() {
      this.retrieveFoods();
    },
    show_foodinfo: function(food_code) {
      this.$router.push("/foodinfo/" + food_code);
    },  
    registerBoard: function() {
      this.$router.push("/boardregistry/" + this.uid);
    }
  },
  mounted() {
	// alert(Slider.currentNumber);
    this.retrieveFoods();
  }
};


</script>

<style>
</style>
