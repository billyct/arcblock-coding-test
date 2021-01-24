import cn from 'classnames'

import Search from '../components/Search'
import {ReactComponent as Logo} from '../assets/logo.svg'

const IndexPage = () => (
  <div className='container mx-auto flex flex-col justify-center min-h-screen'>

    <div className='text-center mb-12'>

      <Logo
        height={104}
        width={90}
        className='inline-block'
      />

      <div
        className={cn(
          'text-2xl mt-4 leading-loose font-serif',
        )}
      >
        BlockChain Explorer
      </div>
    </div>

    <Search/>
  </div>
)

export default IndexPage
