import {ReactComponent as LoadingIcon} from '../assets/loading.svg'

const Loading = () => (
  <div className='w-full py-20 text-center'>
    <LoadingIcon className='animate-spin h-12 w-12 inline-block'/>
  </div>
)

export default Loading
