import { jssdkClient } from '../utils/config'

export default async function() {
  
    const pairs = await jssdkClient.getPairs()
    console.log('getPairs:\n', pairs, '\n\n')
}