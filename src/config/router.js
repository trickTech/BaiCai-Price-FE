/**
 * Created by echaoo on 2016/10/7.
 */
import Error from '../components/Error'
import About from '../components/AboutInfo'
import Main from '../components/MainList'

const routes = [
  {
    path: '/error',
    component: Error
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    component: Main
  }
]

module.exports = routes
