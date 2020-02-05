import {jssdkClient} from '../utils/config'

export default async function() {
    const allowanceTx = await jssdkClient.setAllowance('ETH', 0.03)
    console.log('allowanceTx', allowanceTx)
}