import cn from 'classnames'

const Hash = ({children, className}) => (
  <span
    className={cn(`text-blue-500 cursor-pointer w-80 truncate text-sm hover:underline`, className)}
  >
    {children}
  </span>
)


export default Hash
