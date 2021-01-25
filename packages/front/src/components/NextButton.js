import {useLocation} from 'wouter'

import {ReactComponent as NextIcon} from '../assets/next.svg'
import IconButton from './IconButton'
import useBlockRouteParams from '../hooks/useBlockRouteParams'
import useBlock from '../hooks/useBlock'

const NextButton = () => {
  const {hash, page} = useBlockRouteParams()
  const [, setLocation] = useLocation()
  const {block} = useBlock()

  if (!block) {
    return null
  }

  const pageTotal = Math.ceil(block.transactionsCount / 10)

  const handleClick = () => {
    if (page < pageTotal) {
      setLocation(`/block/${hash}/tx/page/${page + 1}`)
    }
  }

  return (
    <IconButton
      data-testid='NextButton__button'
      disabled={page >= pageTotal}
      onClick={handleClick}
      icon={
        <NextIcon width={18} height={18} strokeWidth={3}/>
      }
    >
      Next
    </IconButton>
  )
}

export default NextButton
