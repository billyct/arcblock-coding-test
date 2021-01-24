import useSWR from 'swr'

import useBlockRouteParams from './useBlockRouteParams'
import {blockQuery} from '../queries'

const useBlock = () => {
  const {hash} = useBlockRouteParams()

  const {data, ...rest} = useSWR(blockQuery(hash))
  let block = undefined

  if (data) {
    block = data.block
  }

  return {
    block,
    ...rest,
  }
}

export default useBlock
