import Home from "@/pages/home";
import Found from "@/pages/found";
import Serial from "@/pages/serial";
import Me from "@/pages/me";

import BlogsList from "@/pages/blogs/index";
import BlogsDetail from "@/pages/blogs/detail";

export default {
  routes: [
    { exact: true, path: "/", component: Home },
    { exact: true, path: "/home", component: Home },
    { exact: true, path: "/found", component: Found },
    { exact: true, path: "/serial", component: Serial },
    { exact: true, path: "/me", component: Me },
    { exact: true, path: "/blogs", component: BlogsList },
    { exact: true, path: "/blogs/detail/:aid", component: BlogsDetail },
  ],
};
