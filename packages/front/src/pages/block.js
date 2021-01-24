import {Link, useRoute} from 'wouter'

import Search from '../components/Search'
import Block from '../components/Block'
import {ReactComponent as Logo} from '../assets/logo.svg'

const BlockPage = () => {

  const [, params] = useRoute("/block/:hash")

  return (
    <div className='bg-gray-50 min-h-screen pb-10'>
      <header className='p-4 shadow-sm border-b border-gray-200 bg-white mb-4'>

        <div className='container mx-auto flex items-center '>
          <Link href='/'>
            <a>
              <Logo width={36} height={36}/>
            </a>
          </Link>
          <Search
            className='flex-1 ml-4'
            defaultValue={params.hash}
          />
        </div>
      </header>

      <div className='px-4'>
        <div className='container mx-auto'>
          <Block/>
        </div>
      </div>


    </div>
  )
}

export default BlockPage
