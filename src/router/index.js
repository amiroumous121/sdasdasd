import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import SkillsPage from "../components/SkillsPage.vue";
import ProjectsPage from "../components/ProjectsPage.vue";
import ContactPage from "../components/ContactPage.vue";
import AdminLoginPage from "../components/AdminLoginPage.vue";
import ResumePage from "../components/ResumePage.vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import BlogPost from "@/components/BlogPost.vue";
import AddPost from "../components/AddPost.vue";
import EditPost from "../components/EditPost.vue";
import BlogPostPage from "../components/BlogPostPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillsPage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: AdminLoginPage,
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumePage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPostPage,
  },
  {
    path: "/blog/:postId",
    name: "BlogPost",
    component: BlogPost,
    props: true,
  },
  {
    path: "/admin/add-post",
    name: "AddPost",
    component: AddPost,
    beforeEnter: /* ... your admin check logic ... */,
  },
  {
    path: "/admin/edit-post/:postId",
    name: "EditPost",
    component: EditPost,
    props: true,
    beforeEnter: /* ... your admin check logic ... */,
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    // Optional: Add a route guard to ensure only logged-in admins can access
    beforeEnter: (to, from, next) => {
      const isAdmin = true; // Temporary hardcoded value for testing
      if (isAdmin) {
        next();
      } else {
        next("/admin-login");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
