import cn from 'classnames'
import {ReactComponent as CloseIcon} from '../assets/close.svg'

const ClearButton = ({className, ...props}) => (
  <button
    className={cn('absolute top-0 bottom-0 right-4 text-gray-500 outline-none focus:outline-none', className)}
    {...props}
  >
    <CloseIcon width={12} height={12}/>
  </button>
)

export default ClearButton
