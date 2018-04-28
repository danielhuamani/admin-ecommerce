import ProductList from '@/pages/product/ProductList'
import ProductDetail from '@/pages/product/ProductDetail'

const productRouter = [
  {
    path: 'product',
    component: ProductList,
    name: 'product_list'
  },
  {
    path: 'product/:slug/',
    component: ProductDetail,
    name: 'product_detail'
  }
]

export default productRouter
