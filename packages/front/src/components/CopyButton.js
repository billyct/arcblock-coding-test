import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import Tooltip from './Tooltip'
import {ReactComponent as ClipboardIcon} from '../assets/clipboard.svg'
import {copyText} from '../utils'

const CopyButton = ({text}) => {
  const COPY_TEXT = 'Copy Hash'
  const COPIED_TEXT = 'Copied'

  const [show, setShow] = useState(false)
  const [toolTipContent, setTooltipContent] = useState(COPY_TEXT)
  let timer = null

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  },[timer])

  const handleClick = () => {
    copyText(text)
    // say copied
    setTooltipContent(COPIED_TEXT)
    setShow(true)

    timer = setTimeout(() => {
      setShow(false)
      setTooltipContent(COPY_TEXT)
    }, 2000)
  }

  return (
    <Tooltip
      show={show}
      content={toolTipContent}
      data-testid='CopyButton__Tooltip'
    >
      <button
        data-testid='CopyButton__button'
        onClick={handleClick}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <ClipboardIcon width={14} height={14}/>
      </button>
    </Tooltip>
  )
}

CopyButton.propTypes = {
  text: PropTypes.string,
}

CopyButton.defaultProps = {
  text: '',
}

export default CopyButton
