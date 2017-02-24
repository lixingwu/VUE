<template>
  <div id="app" class="container col-xs-12">
    <!-- header -->
    <HeaderA></HeaderA>
    <!-- header  end-->

    <!-- aside -->
    <section>
        <asideA></asideA>
        
        <router-view></routes-view>
    </section>

    <!-- aside end-->
  </div>
</template>
<script>
import HeaderA from '../components/Header.vue'
import asideA  from '../components/Aside.vue'
import mianA from '../components/Mian.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HeaderA,
    asideA,
    mianA
  }
}
</script>

<style>
html,body{
  min-width: 1200px !import;
}
</style>
