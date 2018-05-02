import OrderList from '@/pages/order/OrderList'
import OrderDetail from '@/pages/order/OrderDetail'

const orderRouter = [
  {
    path: 'order',
    component: OrderList,
    name: 'order_list'
  },
  {
    path: 'order/:code/',
    component: OrderDetail,
    name: 'order_detail'
  }
]

export default orderRouter
