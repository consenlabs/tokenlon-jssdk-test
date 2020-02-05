import {jssdkClient} from '../utils/config'

export default async function(){
    const orderState = await jssdkClient.getOrderState('0x0efd8aa29c5d943081fb39cb01f79899f2ebd02db970c88163100e2e913de95e')
    console.log('orderState\n', orderState, '\n\n')
}