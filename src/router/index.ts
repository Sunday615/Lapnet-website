import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../Views/Homepage/homepage.vue'
import product1 from '../Views/products/product1.vue'
import product2 from '../Views/products/product2.vue'
import product3 from '../Views/products/product3.vue'
import product4 from '../Views/products/product4.vue'

import membercardATM from '../Views/member/membercard/membercardATM.vue'
import membermobile_banking from '../Views/member/membercard/membermobile_banking.vue'
import membercrossborder from '../Views/member/membercard/membercrossborder.vue'
import Joinus from '../Views/joinus/joinus.vue'

import Board_director from '../Views/Aboutus/board_director/board_director.vue'
import Role from '../Views/Aboutus/role/role.vue'
import Vision from '../Views/Aboutus/vision/vision.vue'
import History from '../Views/Aboutus/history/history.vue'
import Contactus from '../Views/contact/contactus.vue'
import Operationstructure from '../Views/Aboutus/companystructure/operationstructure.vue'
import It from '../Views/Aboutus/companystructure/it.vue'
import Ceo from '../Views/Aboutus/companystructure/ceo.vue'

import Finance from '../Views/Aboutus/companystructure/finance.vue'
import Office from '../Views/Aboutus/companystructure/office.vue'
import Audit from '../Views/Aboutus/companystructure/audit.vue'
import Bloggridview from '../Views/blog/bloggrid/bloggridview.vue'

import Blogdetail from '../Views/blog/blogdetail/blogdetail.vue'
import Product6 from '../Views/products/product6.vue'
import Boarddirector_audit from '../Views/Aboutus/board_director/boarddirector_audit.vue'
import Boarddirector_policy from '../Views/Aboutus/board_director/boarddirector_policy.vue'
import Boarddirector_develop from '../Views/Aboutus/board_director/boarddirector_develop.vue'
import Boarddirector_risk from '../Views/Aboutus/board_director/boarddirector_risk.vue'
import Productqrpayment from '../Views/products/productqrpayment.vue'
import Companystructureimage from '../Views/Aboutus/companystructure/companystructureimage.vue'
import Companystructure from '../Views/Aboutus/companystructure/companystructure.vue'
import Adminlogin from '../login/adminlogin.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/products_service/atm-inquiry',
    name: 'atm-inquiry',
    component: product1,
  },
  {
    path: '/products_service/atm-cash-withdraw',
    name: 'atm-cash-withdraw',
    component: product2,
  },
  {
    path: '/products_service/atm-transfer',
    name: 'atm-transfer',
    component: product3,
  },
  {
    path: '/products_service/mobile-transfer',
    name: 'mobile-transfer',
    component: product4,
  },

  {
    path: '/products_service/qr-payment',
    name: 'qrpayment',
    component: Productqrpayment,
  },

  {
    path: '/products_service/crossborder',
    name: 'qr-payment',
    component: Product6,
  },
  {
    path: '/products_service/crossborder/:pair(kh-la|la-kh|th-la|la-th|vn-la|la-vn|ch-la|la-ch)',
    name: 'crossborder-product',
    component: () => import('../Views/products/product6.vue'),
  },

  // ############################### member path #####################################

  {
    path: '/member/membercardATM',
    name: 'membercardATM',
    component: membercardATM,
  },

  {
    path: '/member/mobile_banking',
    name: 'mobile_banking',
    component: membermobile_banking,
  },

  {
    path: '/member/crossborder',
    name: 'crossborder',
    component: membercrossborder,
  },

  // ######################### Joinus ##########################

  {
    path: '/joinus',
    name: 'joinus',
    component: Joinus,
  },

  // ######################### Blog and news ##########################

  {
    path: '/bloggrid',
    name: 'BlogGrid',          // 👈 renamed to match goBack() & BlogGrid component
    component: Bloggridview,
  },
  {
    path: '/blogdetail/:id',
    name: 'BlogDetail',
    component: Blogdetail,
    props: true,
  },


  //########################### Blog from homepage #########################
    
  // ######################### About us  ##########################

  // Companystructure
  {
    path: '/aboutus/companystructure',
    name: 'companystructure',
    component: Companystructure,
  },


  //CompanyStructure by image 
   {
    path: '/aboutus/companystructureimage',
    name: 'companystructure',
    component: Companystructureimage,
  },



  {
    path: '/company/operation',
    name: 'operation',
    component: Operationstructure,
  },
  {
    path: '/company/it',
    name: 'it',
    component: It,
  },
  {
    path: '/company/ceo-cfo',
    name: 'ceo',
    component: Ceo,
  },
  {
    path: '/company/finance',
    name: 'finance',
    component: Finance,
  },
  {
    path: '/company/office',
    name: 'office',
    component: Office,
  },
  {
    path: '/company/audit',
    name: 'audit',
    component: Audit,
  },

  // ########################### Board director ###########################

  {
    path: '/aboutus/board_director',
    name: 'board_director',
    component: Board_director,
  },

  {
    path: '/board_of_director/audit_committee',
    name: 'board_directoraudit',
    component: Boarddirector_audit,
  },

  {
    path: '/board_of_director/policy_research_committee',
    name: 'board_directorpolicy',
    component: Boarddirector_policy,
  },

  {
    path: '/board_of_director/develop_committee',
    name: 'board_directordevelop',
    component: Boarddirector_develop,
  },
  {
    path: '/board_of_director/riskmanagemen_committee',
    name: 'board_directorrisk',
    component: Boarddirector_risk,
  },

  {
    path: '/aboutus/role',
    name: 'role',
    component: Role,
  },
  {
    path: '/aboutus/vision',
    name: 'vision',
    component: Vision,
  },
  {
    path: '/aboutus/history',
    name: 'history',
    component: History,
  },

  // ######################### Contact us  ##########################

  {
    path: '/contactus',
    name: 'contactus',
    component: Contactus,
  },



  // ##################### Admin login ##############################


  {
    path: '/login',
    name: 'login',
    component: Adminlogin,
  },

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
