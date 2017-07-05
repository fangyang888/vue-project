import Repository from './components/Repository'
import RepositoryDetail from './components/RepositoryDetail'


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
  }
]


export default routers
