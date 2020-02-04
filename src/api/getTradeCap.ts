import { jssdkClient } from '../utils/config'

export default async function() {

    const tradeCap24H = await jssdkClient.getTradeCap({
        currency: 'USD',
        period: '24H',
    })
    console.log('tradeCap24H\n', tradeCap24H, '\n\n')
    
    const tradeCap7D = await jssdkClient.getTradeCap({
        currency: 'USD',
        period: '7D',
    })
    console.log('tradeCap7D\n', tradeCap7D, '\n\n')
    
    const tradeCap1M = await jssdkClient.getTradeCap({
        currency: 'USD',
        period: '1M',
    })
    console.log('tradeCap1M\n', tradeCap1M, '\n\n')

    const tradeCapETH = await jssdkClient.getTradeCap({
        currency: 'ETH',
        period: '1M',
    })
    console.log('tradeCapETH\n', tradeCapETH, '\n\n')

    const tradeCapCNY = await jssdkClient.getTradeCap({
        currency: 'CNY',
        period: '1M',
    })
    console.log('tradeCapCNY\n', tradeCapCNY, '\n\n')

    const tradeCapDAI = await jssdkClient.getTradeCap({
        currency: 'DAI',
        period: '1M',
    })
    console.log('tradeCapDAI\n', tradeCapDAI, '\n\n')
}