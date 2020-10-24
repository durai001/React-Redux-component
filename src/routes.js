// import Assessment from './components/assessment';
// import UserDetails from './components/userDetails';
// import Login from './components/login';

// const routes = [
//     { path: "/userDetails", exact: true, name: 'User Details', showMenu: true, component: UserDetails, icon: "fa-users-cog" },
//     { path: "/assessment", exact: true, name: 'Assessment', showMenu: true, component: Assessment, icon: "fa-tasks" },
//     { path: "/", exact: true, name: 'Login', showMenu: false, component: Login, icon: "fa-tasks" },

// ];

// export default routes;



import UserProfile from "./views/UserProfile.js";
// import Assessment from './views/assessment.js';
import AllAssessments from './views/allAssessment.js';
import UserAssessment from './views/userAssessment';
import UserDetails from './views/userDetails.js';
import Login from './views/login.js';
 
var routes = [
 
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    showMenu: true,
    layout: "/component",
    in_sidebar:false,
  }, 
  // { 
  //   path: "/profile-assessment",
  //   name: 'Assessment', 
  //   component: Assessment,
  //   showMenu: true, 
  //   icon: "fa fa-tasks",
  //   layout: "/component" ,
  //   in_sidebar:false,
  // },
  { 
    path: "/userDetails",
    name: 'User Details', 
    component: UserDetails,
    showMenu: true,
    icon: "fa fa-users",
    layout: "/component",
    in_sidebar:true,

  },
  { 
    path: "/AllAssessments",
    name: 'AllAssessments', 
    component: AllAssessments,
    showMenu: true,
    icon: "fa fa-list-ul",
    layout: "/component",
    in_sidebar:true,

  },
  { 
    path: "/UserAssessment",
    name: 'UserAssessment', 
    component: UserAssessment,
    showMenu: true,
    icon: "fa fa-list-ul",
    layout: "/component",
    in_sidebar:false,

  },
  { 
    path: "/",
    name: 'Login', 
    component: Login,
    showMenu: false, 
    icon: "fa fa-tasks",
    layout: "/component",
    in_sidebar:false, 
  },
];
export default routes;
