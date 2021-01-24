import NextButton from './NextButton'
import PrevButton from './PrevButton'
import useBlockRouteParams from '../hooks/useBlockRouteParams'
import useBlock from '../hooks/useBlock'

const Paginate = () => {

  const {block} = useBlock()
  const {page} = useBlockRouteParams()

  // 页面少于 10 则不需要分页按钮
  if (block.transactionsCount <= 10) {
    return null
  }

  return (
    <div className='flex justify-between p-6 pb-0 border-t border-gray-200'>
      <div>
        Showing {(page - 1) * 10 + 1} to {page * 10} of {block.transactionsCount} results
      </div>
      <div className='flex justify-end items-center'>
        <PrevButton/>
        <div className='border-r-2 border-gray-200 mx-2 inline-block h-4 '>
        </div>
        <NextButton/>
      </div>
    </div>
  )
}

export default Paginate
