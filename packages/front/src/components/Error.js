import {Link} from 'wouter'

const Error = ({children}) => (
  <div className='text-center my-10'>
    <div className='text-4xl font-bold'>
      Oops!
    </div>
    <div className='mt-10'>
      {children}
    </div>
    <div className='text-sm mt-10'>
      There are some links maybe helpful:
      <Link href='/'>
        <a className='ml-2 text-blue-500'>Explorer</a>
      </Link>
    </div>
  </div>
)

export default Error
