import Mian from './components/Mian.vue'
// import Forthcoming from './components/Forthcoming.vue'
import Movie from './components/Movie.vue'

export default [
    {
        path:'/home',
        component: Mian
    },
    {
        path:'/soon',
        component: Mian
    },
    {
        path:'/top250',
        component: Mian
    },
    {
        path:'/Movie/:id',
        component: Movie
    },
    {
        path:'/',
         redirect:'/home'
    }
]