import cn from 'classnames'
import {ReactComponent as SearchIcon} from '../assets/search.svg'

const SearchButton = ({className, ...rest}) => (
  <button
    className={cn(
      'px-4 hover:bg-black hover:text-white outline-none focus:outline-none',
      className,
    )}
    {...rest}
  >
    <SearchIcon width={20} height={20}/>
  </button>
)
export default SearchButton
