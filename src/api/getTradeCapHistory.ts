import { jssdkClient } from '../utils/config'
import { getTimestamp } from '../utils/timestamp'

export default async function() {
    const now = getTimestamp()

    const tradeCap7D = await jssdkClient.getTradeCapHistory({
        currency: 'USD',
        beginTimestamp: now - 86400 * 7,
        endTimestamp: now,
    })
    console.log('tradeCap7D\n', tradeCap7D, '\n\n')
    
    const tradeCap1M = await jssdkClient.getTradeCapHistory({
        currency: 'USD',
        beginTimestamp: now - 86400 * 30,
        endTimestamp: now,
    })
    console.log('tradeCap1M\n', tradeCap1M, '\n\n')
    
    const tradeCapDAI = await jssdkClient.getTradeCapHistory({
        currency: 'DAI',
        beginTimestamp: now - 86400 * 7,
        endTimestamp: now,
    })
    console.log('tradeCapDAI\n', tradeCapDAI, '\n\n')

    const tradeCapETH = await jssdkClient.getTradeCapHistory({
        currency: 'ETH',
        beginTimestamp: now - 86400 * 7,
        endTimestamp: now,
    })
    console.log('tradeCapETH\n', tradeCapETH, '\n\n')

    const tradeCapCNY = await jssdkClient.getTradeCapHistory({
        currency: 'CNY',
        beginTimestamp: now - 86400 * 7,
        endTimestamp: now,
    })
    console.log('tradeCapCNY\n', tradeCapCNY, '\n\n')
}