<template>
    <main>
        <div class="list-group col-md-10">
        <h3>{{title}}</h3>
          <a href="#" class="list-group-item" v-for="item in bb">
            <div class="media">
              <div class="media-left">
                  <img class="media-object" :src="item.images.small" >              
              </div>
              <div class="media-body">
                <h4 class="media-heading">{{item.title}}</h4>
                    <strong>演员：</strong>
                    <span v-for="(name,index) in item.casts">{{name.name}}<i>、</i></span>
              </div>
            </div>
          </a>
        </div>
    </main>

</template>
<script type="text/javascript">
import axios from 'axios'
export default{
    data(){
        return {
            bb:[],
            title: ''
        }
    },
    computed: {
    },
    mounted(){
        this.douban();
    },
    methods: {
        douban(){
            var _this = this;
            axios.get('https://bird.ioliu.cn/v1?url=http://api.douban.com/v2/movie/coming_soon?start=0&count=10')
            .then(function (response) {
                _this.title = response.data.title
                _this.bb = response.data.subjects
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }
}
</script>
<!-- http://api.douban.com /v2/movie/in_theaters -->
<style type="text/css">
.media-body span{
    font-size: 12px;
}
</style>