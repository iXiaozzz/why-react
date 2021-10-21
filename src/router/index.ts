import BlogsList from '@/pages/blogs/index';
import BlogsDetail from '@/pages/blogs/detail';

export default {
    routes:[
        {exact: true, path: '/', component: BlogsList},
        {exact: true, path: '/blogs/detail/:aid', component: BlogsDetail},
    ]
}