import {useRoute} from 'wouter'
import useSWR from 'swr'

import {blockQuery} from '../queries'

const useBlock = () => {
  const [, params] = useRoute("/block/:hash")
  const {hash} = params

  const {data, error} = useSWR(blockQuery(hash))
  const block = data ? data.block : undefined

  return {
    block,
    error,
  }
}

export default useBlock
