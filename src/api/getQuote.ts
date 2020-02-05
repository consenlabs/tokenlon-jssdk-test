import {jssdkClient} from '../utils/config'

export default async function(){

    try {
        const base = 'ETH'
        const quote = 'USDT'
        const side = 'SELL'
        const quoteResult = await jssdkClient.getQuote({
            base: base,
            quote: quote,
            side: side,
            amount: 0.02,
        })
    
        console.log(base, '_', quote, '_', side , '\n', quoteResult, '\n\n')
    } catch (e) {
        console.log(e)
    }

}