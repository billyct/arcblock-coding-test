import {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {useLocation} from 'wouter'

import SearchButton from './SearchButton'
import SearchInput from './SearchInput'
import ClearButton from './ClearButton'

const Search = ({className, defaultValue}) => {
  const [value, setValue] = useState(defaultValue)
  const [, setLocation] = useLocation()

  const inputRef = useRef(null)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSearch = () => {
    setLocation(`/block/${value}`)
  }

  const handleClear = () => {
    setValue('')
    inputRef.current.focus()
  }

  return (
    <div
      className={cn(
        'w-full border border-gray-300 leading-loose flex rounded shadow-sm h-12 overflow-hidden hover:shadow',
        className
      )}
    >
      <div className='flex-1 relative'>
        <SearchInput
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder='Search a block hash'
          value={value}
          ref={inputRef}
        />

        <ClearButton
          onClick={handleClear}
          className={cn({
            'hidden': value.length <= 0,
            'block': value.length > 0,
          })}
        />
      </div>

      <SearchButton
        className={cn({'bg-black text-white': value.length > 0})}
        onClick={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  defaultValue: PropTypes.string,
}

Search.defaultProps = {
  defaultValue: '',
}

export default Search
