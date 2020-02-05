import {jssdkClient} from '../utils/config'

export default async function() {
    try {
        const closeAllowanceTx = await jssdkClient.closeAllowance('ETH')
        console.log('closeAllowanceTx', closeAllowanceTx)
      } catch (e) {
        console.log('closeAllowanceTx nonce conflict', e)
      }
}