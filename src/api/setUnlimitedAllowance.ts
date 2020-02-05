import {jssdkClient} from '../utils/config'

export default async function() {
    const unlimitedAllowanceTx = await jssdkClient.setUnlimitedAllowance('ETH')
    console.log('unlimitedAllowanceTx\n', unlimitedAllowanceTx, '\n\n')
}