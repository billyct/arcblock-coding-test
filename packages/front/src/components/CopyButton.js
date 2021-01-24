import {useState, useEffect} from 'react'

import Tooltip from './Tooltip'
import {ReactComponent as ClipboardIcon} from '../assets/clipboard.svg'

const CopyButton = ({text, ...props}) => {
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
    const ipt = document.createElement('input')
    ipt.value = text
    document.body.appendChild(ipt)
    ipt.select()

    document.execCommand('copy')

    ipt.remove()
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
    >
      <button
        onClick={handleClick}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...props}
      >
        <ClipboardIcon width={14} height={14}/>
      </button>
    </Tooltip>
  )
}

export default CopyButton
