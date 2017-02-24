<template>
    <main>
        <div class="list-group col-xs-10" v-show="!show">
        <h3>{{title}}</h3>
            <router-link :to="/Movie/+item.id"  class="list-group-item" v-for="item in bb">
                <div class="media">
                  <div class="media-left">{{$router.params}}
                      <img class="media-object" :src="item.images.small" >
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">{{item.title}}</h4>
                        <strong>演员：</strong>
                        <span v-for="(name,index) in item.casts">{{name.name}}<i>、</i></span>
                  </div>
                </div>
            </router-link>
        </div>
        <div v-show="!show">总数:{{total}} 当页：{{start/10+1}}/{{totalALL}}</div>
        <!-- 分页 -->
        <nav aria-label="..." v-show="!show">
          <ul class="pager">
            <li><a @click="Previou">上一页</a></li>
            <li><a @click="Next">下一页</a></li>
          </ul>
        </nav>
        <!-- loading -->
        <div class="loading" v-show="show">
            <div class="spinner">
              <div class="spinner-container container1">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
              </div>
              <div class="spinner-container container2">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
              </div>
              <div class="spinner-container container3">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
              </div>
            </div>
        </div>
    </main>

    <!-- 加载动画 -->

</template>
<script type="text/javascript">
import axios from 'axios'
export default{
    data(){
        return {
            bb:[],
            title: '',
            show:true,
            start:0,
            total: 0,
            totalALL: 0 
        }
    },
    computed: {
    },
    mounted(){
        var path=this.$route.path
        this.douban(path);

    },
    watch:{
        $route(to){
            var path=to.path;
            this.show = true;
            this.start = 0;
            // this.total = 0;
            // this.totalALL = 0;
            this.douban(path);
        }
    },
    methods: {
        douban(path){;
            var url = ''
            var _this = this;
            switch(path)
            {
            case '/home':
                url = 'https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/in_theaters?start='+_this.start+'&count=10'
              break;
            case '/soon':
                url = 'https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/coming_soon?start='+_this.start+'&count=10'
              break;
            case '/top250':
                url = 'https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/top250?start='+_this.start+'&count=10'
              break;
              // default:
              //   url = 'https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/in_theaters?start='+_this.start+'&count=10'
            }
            
            
            axios.get(url)
            .then(function (response) {
                document.body.scrollTop = 0;
                if(response.status !== 200 || '') {
                    _this.show = true;
                } else {
                    _this.show = false;
                }
                _this.total = response.data.total
                _this.totalALL = Math.ceil(response.data.total/10)
                _this.title = response.data.title;
                _this.bb = response.data.subjects;
                // console.log(response.status.status)
                // undefined
            })
            .catch(function (error) {
             console.log(error.status.status+1);
            });
        },
        Previou(){
            document.body.scrollTop = 0;
            this.show = false;
            if(this.start == 0) {
                this.start = 0;
                return false;
            } else {
                this.start-=10;
            }
             var path=this.$route.path;
            this.douban(path)

        },
        Next(){
            document.body.scrollTop = 0;
            this.show = false;
           
                 this.start+=10;
             
             // } else {
             //    this.start+= 0;
             // }

            var path=this.$route.path;
            this.douban(path)
        }
    }
}
</script>
<!-- http://api.douban.com /v2/movie/in_theaters -->
<style type="text/css">
.media-body span{
    font-size: 12px;
}
.pager a{
    cursor: pointer;
}
.loading{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
}
.spinner {
  margin: 100px auto;
  width: 50px;
  height: 50px;
  position: relative;
}
 
.container1 > div, .container2 > div, .container3 > div {
  width: 10px;
  height: 10px;
  background-color: #333;
 
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
 
.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
 
.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
 
.circle1 { top: 0; left: 0; }
.circle2 { top: 0; right: 0; }
.circle3 { right: 0; bottom: 0; }
.circle4 { left: 0; bottom: 0; }
 
.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.container3 .circle1 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
 
.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
 
.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
 
.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
 
.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
 
.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
 
.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
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