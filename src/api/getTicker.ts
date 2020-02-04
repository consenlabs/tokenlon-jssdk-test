import { jssdkClient } from '../utils/config'
import { tradeTokens } from '../utils/tradeTokens'

export default async function() {

    const ticker24H = await jssdkClient.getTicker({
        pairs: 'USDT_ETH',
        period: '24H',
    })
    console.log('getTicker\n', ticker24H, '\n')

    const ticker7D = await jssdkClient.getTicker({
        pairs: 'USDT_ETH',
        period: '7D',
    })
    console.log('getTicker\n', ticker7D, '\n')

    const ticker1M = await jssdkClient.getTicker({
        pairs: 'ETH_USDT',
        period: '1M',
    })
    console.log('getTicker\n', ticker1M, '\n')

    for (const td in tradeTokens) {
        const ticker1M = await jssdkClient.getTicker({
            pairs: tradeTokens[td],
            period: '1M',
        })
        console.log('getTicker\n', ticker1M, '\n')
    }

}