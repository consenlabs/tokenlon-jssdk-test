import {jssdkClient} from '../utils/config'

export default async function() {
    try {
        const base = 'ETH'
        const quote = 'USDT'
        const side = 'SELL'
        const quoteResult = await jssdkClient.getQuote({
            base: quote,
            quote: base,
            side: side,
            amount: 3.7657,
        })
    
        console.log(base, '_', quote, '_', side , '\n', quoteResult, '\n\n')
        console.log('quoteResult.quoteId\n', quoteResult.quoteId, '\n\n')
        
        const tradeResult = await jssdkClient.trade(quoteResult.quoteId)
        console.log('tradeResult\n', tradeResult, '\n\n')

        const orderState = await jssdkClient.getOrderState(tradeResult.executeTxHash)
        console.log('orderState\n', orderState, '\n\n')

    } catch (e) {
        console.log(e)
    }



}