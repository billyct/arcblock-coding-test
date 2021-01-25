import {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Tooltip = ({children, content, show}) => {
  const childrenRef = useRef()
  const tooltipRef = useRef()

  const [tooltipStyle, setTooltipStyle] = useState({})

  // content 变化之后，需要重新计算
  useEffect(() => {
    // 计算 tooltip 的 offset 样式
    const topOffset = -tooltipRef.current.clientHeight - 2
    const leftOffset = -tooltipRef.current.clientWidth / 2 + childrenRef.current.clientWidth / 2

    setTooltipStyle({
      top: topOffset,
      left: leftOffset,
    })

  }, [content])

  return (
    <div className='relative'>
      <div className='inline-block' ref={childrenRef}>
        {children}
      </div>
      <div
        ref={tooltipRef}
        data-testid='Tooltip__tooltip'
        className={cn(
          'bg-black opacity-80 text-white px-2 py-1 rounded text-xs leading-none absolute whitespace-nowrap',
          {
            'invisible': !show,
            'visible': show,
          },
        )}
        style={tooltipStyle}
      >
        {content}
        <div
          className='w-2 h-2 transform rotate-45 absolute bg-black left-0 right-0 mx-auto'
          style={{
            zIndex: -1,
            bottom: -2,
          }}
        />
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  show: PropTypes.bool,
  content: PropTypes.string.isRequired,
}

Tooltip.defaultProps = {
  show: false,
}

export default Tooltip
