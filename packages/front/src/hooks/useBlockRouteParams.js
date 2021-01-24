import {useRoute} from 'wouter'

const useBlockRouteParams = () => {
  const [, params] = useRoute("/block/:hash/tx/page/:page")
  const {page, ...rest} = params

  return {
    page: parseInt(page, 10),
    ...rest
  }
}

export default useBlockRouteParams
