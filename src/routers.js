import HelloFromVux from './components/HelloFromVux'
import Detail from './components/Detail'


const routers = [

  {
    path: '/',
    component: HelloFromVux,
     meta:{title:'知识库'}
  },
  {
    path: '/detail',
    component: Detail,
    meta:{title:'详情'}
  }
]


export default routers
