import {jssdkClient} from '../utils/config'

export default async function() {
    const isAllowanceEnough = await jssdkClient.isAllowanceEnough('ETH')
    console.log('isAllowanceEnough\n', isAllowanceEnough, '\n\n')
}