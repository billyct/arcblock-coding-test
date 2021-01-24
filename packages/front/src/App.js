import {Route, Switch, Redirect} from 'wouter'
import {SWRConfig} from 'swr'

import Error from './components/Error'
import IndexPage from './pages/index'
import BlockPage from './pages/block'
import fetcher from './fetcher'

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <div className='font-sans antialiased'>
        <Switch>
          <Route path='/' component={IndexPage}/>

          <Route path='/block/:hash'>
            {params => <Redirect to={`/block/${params.hash}/tx/page/1`}/> }
          </Route>

          <Route path='/block/:hash/tx/page/:page' component={BlockPage}/>

          <Route>
            <Error>
              404 Not Found
            </Error>
          </Route>
        </Switch>
      </div>
    </SWRConfig>
  );
}

export default App;
