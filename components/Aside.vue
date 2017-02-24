<template>
    <div class="aside col-xs-2" style="height:1500px">
      <ul class="nav nav-pills nav-stacked nav-pills-stacked-example">
        <li role="presentation" enter-active-class="active" :class="{active: $route.path=='/home'}"><router-link to="/home">正在热映</router-link></li>
        <li role="presentation" enter-active-class="active" :class="{active: $route.path=='/soon'}"><router-link to="/soon">即将上映</router-link></li>
        <li role="presentation" enter-active-class="active" :class="{active: $route.path=='/top250'}"><router-link to="/top250">Top250</router-link></li>
      </ul>
    </div>
   
</template>
<script type="text/javascript">
export default{
    data () {
        return {

        }
    },
    methods:{
        // this.$route()

    }
}
</script>
<style type="text/css">
.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color:  #eee;
}
</style>