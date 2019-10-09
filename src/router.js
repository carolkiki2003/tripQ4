import Vue from 'vue'
import Router from 'vue-router'
// import Roo from '../src/pages/Roo'
import Parents from '../src/containers/CoverParents'
import Student from '../src/containers/CoverStudent'
import Teacher from '../src/containers/CoverTeacher'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: `${BASE_URL}/${FOLDER}`,
  routes: [
    {
      path: '/parents.html',
      name: 'parents',
      component: Parents
    },
    {
      path: '/student.html',
      name: 'student',
      component: Student
    },
    {
      path: '/teacher.html',
      name: 'teacher',
      component: Teacher
    }
  ]
})
export default router
