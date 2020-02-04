import { jssdkClient } from '../utils/config'
import { tradeTokens } from '../utils/tradeTokens'
import { getTimestamp } from '../utils/timestamp'

export default async function() {
    const now = getTimestamp()

    const tickerHistory = await jssdkClient.getTickerHistory({
        pairs: 'ETH_USDT',
        beginTimestamp: now - 60*60*24 * 30,
        endTimestamp: now,
    })
    console.log('tickerHistory\n', tickerHistory, '\n\n')

    const tickerHistory1 = await jssdkClient.getTickerHistory({
        pairs: 'USDT_ETH',
        beginTimestamp: now - 60*60*24 * 30,
        endTimestamp: now,
    })
    console.log('tickerHistory\n', tickerHistory1, '\n\n')  

    for (const td in tradeTokens) {
        const tickerHistory = await jssdkClient.getTickerHistory({
            pairs: tradeTokens[td],
            beginTimestamp: now - 60*60*24 * 30,
            endTimestamp: now,
        })
        console.log('tickerHistory\n', tickerHistory, '\n\n')  
    }

}