import {forwardRef} from 'react'

const SearchInput = (props, ref) => (
  <input
    className='pl-4 pr-10 outline-none font-light h-full w-full'
    ref={ref}
    {...props}
  />
)

export default forwardRef(SearchInput)
