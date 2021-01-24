import PropTypes from 'prop-types'
import cn from 'classnames'

const Card = ({title, children, className}) => (
  <div className='rounded shadow  py-6 bg-white mb-4'>
    <h3 className='text-xl mb-4 px-6'>
      {title}
    </h3>
    <div className={cn('px-6', className)}>
      {children}
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card
