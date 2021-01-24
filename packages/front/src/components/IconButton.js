import PropTypes from 'prop-types'

const IconButton = ({children, icon, iconPlacement, ...props}) => (
  <button
    className='flex items-center disabled:opacity-50'
    {...props}
  >
    {iconPlacement === 'left' && icon}
    <span className='mx-2 font-bold'>{children}</span>
    {iconPlacement === 'right' && icon}
  </button>
)

IconButton.prototype = {
  icon: PropTypes.any.isRequired,
  iconPlacement: PropTypes.oneOf(['left', 'right']),
}

IconButton.defaultProps = {
  iconPlacement: 'right',
}

export default IconButton
