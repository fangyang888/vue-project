import Repository from './components/Repository'
import RepositoryDetail from './components/RepositoryDetail'
import MyList from './components/MyList'


const routers = [

  {
    path: '/',
    component: Repository,
     meta:{title:'知识库'}
  },
  {
    path: '/repositoryDetail',
    component: RepositoryDetail,
    meta:{title:'详情'}
  },
  {
    path: '/list',
    component: MyList,
    meta:{title:'列表'}
  }
]


export default routers
