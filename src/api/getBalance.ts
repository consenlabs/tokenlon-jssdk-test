import {jssdkClient} from '../utils/config'

// const tokens = ['ETH', 'KNC', 'USDT', 'imBTC']
const tokens = ['imBTC']

export default async function() {
    for (const tokenIndex in tokens) {
        const balance = await jssdkClient.getBalance(tokens[tokenIndex])
        console.log('getBalance\n', balance, '\n\n')
    }
}