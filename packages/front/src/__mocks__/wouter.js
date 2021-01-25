const wouter = jest.createMockFromModule('wouter')

let __setLocationFn = jest.fn()
let __useRouteFn = jest.fn()

wouter.__mockUseRoute = fn => __useRouteFn = fn
wouter.__mockSetLocation = fn => __setLocationFn = fn
wouter.Link = props => <a {...props}/>
wouter.useLocation = () => ([jest.fn(), __setLocationFn])
wouter.useRoute = r => __useRouteFn(r)

module.exports = wouter
