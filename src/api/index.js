import userApi from '@/api/user'
import cartApi from '@/api/cart'
import cotalogApi from '@/api/cotalog'
import ordersApi from '@/api/orders'

export default http => ({

    user: userApi(http),
    cart: cartApi(http),
    cotalog: cotalogApi(http),
    orders: ordersApi(http)

})