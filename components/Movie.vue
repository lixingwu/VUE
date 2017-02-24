<template>
    <div class="list-group col-md-10">
        <div class="media" v-show="!show">
          <div class="media-left">
            <a>
              <img class="media-object" :src="movieImg" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{subject.title}}</h4>
            {{subject.summary}}
          </div>
        </div>
        <div  v-show="show">
            <div class="spinnerA">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios'
    export default{
        data(){
            return {
                subject:'',  
                movieImg: '',
                show: true
            }
        },
        watch:{
            $route(to){
                this.show = true;
            }
        },
        mounted(){
            var path=this.$route.path;
            var _this = this;
            this.movie(path);
        },
        // https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/top250?start=0&count=10
        methods: {
            movie (path){
                var _this = this;
                var demand = path.indexOf('/Movie/');
                var MovieId = path.replace(/[^0-9]/ig,"");
                if(demand === 0) {
                    axios.get('https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/subject/'+MovieId)
                    .then(function (response) {
                        document.body.scrollTop = 0;
                        if(response.status !== 200 || '') {
                            _this.show = true;
                        } else {
                            _this.show = false;
                        }
                        _this.subject = response.data;
                        _this.movieImg = _this.subject.images.large;

                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                }
            }   
        }
    }
</script>
<style type="text/css">
.spinnerA {
  position: fixed;
  left: 50%;
  top: 100px;
  margin: 0 auto 0;
  width: 150px;
  text-align: center;
}
 
.spinnerA > div {
  width: 30px;
  height: 30px;
  background-color: #333;
 
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinnerA .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
 
.spinnerA .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>