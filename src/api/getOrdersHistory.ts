import {jssdkClient} from '../utils/config'

export default async function(){
    const ordersHistory1_10 = await jssdkClient.getOrdersHistory({
        page: 1,
        perpage: 10,
    })
    console.log('ordersHistory1_10\n', ordersHistory1_10, '\n\n')

    const ordersHistory1_2 = await jssdkClient.getOrdersHistory({
      page: 1,
      perpage: 2,
    })
    console.log('ordersHistory1_2\n', ordersHistory1_2, '\n\n')

    const ordersHistory2_2 = await jssdkClient.getOrdersHistory({
      page: 2,
      perpage: 2,
    })
    console.log('ordersHistory2_2\n', ordersHistory2_2, '\n\n')
}