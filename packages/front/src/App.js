import {Route, Switch} from 'wouter'
import {SWRConfig} from 'swr'

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
          <Route path='/block/:hash' component={BlockPage}/>
        </Switch>
      </div>
    </SWRConfig>
  );
}

export default App;
