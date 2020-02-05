import {jssdkClient} from '../utils/config'

export default async function() {
    const allowance = await jssdkClient.getAllowance('ETH')
    console.log('getAllowance\n', allowance, '\n\n')
}