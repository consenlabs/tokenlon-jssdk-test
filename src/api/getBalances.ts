import {jssdkClient} from '../utils/config'

export default async function() {
    const balance = await jssdkClient.getBalances()
    console.log('getBalances\n', balance, '\n\n')
}