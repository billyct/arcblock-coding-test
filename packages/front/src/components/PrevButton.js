import {useLocation} from 'wouter'

import {ReactComponent as PrevIcon} from '../assets/prev.svg'
import IconButton from './IconButton'
import useBlockRouteParams from '../hooks/useBlockRouteParams'

const PrevButton = () => {

  const {hash, page} = useBlockRouteParams()
  const [, setLocation] = useLocation()

  const handleClick = () => {
    if (page > 1) {
      setLocation(`/block/${hash}/tx/page/${page - 1}`)
    }
  }

  return (
    <IconButton
      data-testid='PrevButton__button'
      disabled={page <= 1 || !page}
      onClick={handleClick}
      iconPlacement='left'
      icon={
        <PrevIcon width={18} height={18} strokeWidth={3}/>
      }
    >
      Previous
    </IconButton>
  )
}

export default PrevButton
