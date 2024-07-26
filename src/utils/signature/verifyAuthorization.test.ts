import { expect, test } from 'vitest'

import { accounts } from '~test/src/constants.js'

import { wagmiContractConfig } from '../../../test/src/abis.js'
import { signAuthorization } from '../../accounts/utils/signAuthorization.js'
import { verifyAuthorization } from './verifyAuthorization.js'

test('default', async () => {
  const authorization = {
    address: wagmiContractConfig.address,
    chainId: 1,
    nonce: 0,
  }
  const signature = await signAuthorization({
    authorization,
    privateKey: accounts[0].privateKey,
  })
  expect(
    await verifyAuthorization({
      address: accounts[0].address,
      authorization,
      signature,
    }),
  ).toBe(true)
})