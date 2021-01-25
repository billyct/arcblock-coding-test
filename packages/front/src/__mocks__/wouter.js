const wouter = jest.createMockFromModule('wouter')

let __mockSetLocationFn = 'jest.fn()'

wouter.__mockSetLocation = fn => __mockSetLocationFn = fn
wouter.Link = props => <a {...props}/>
wouter.useLocation = () => ([jest.fn(), __mockSetLocationFn])

module.exports = wouter
