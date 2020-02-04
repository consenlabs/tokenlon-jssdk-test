import {jssdkClient} from '../utils/config'

export default async function() {
    const tokens = await jssdkClient.getTokens()
    console.log('tokens', tokens)
}