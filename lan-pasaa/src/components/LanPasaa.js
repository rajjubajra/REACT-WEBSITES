import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import RouteLanPasaa from './contents/RouteLanPasaa';


/** LAN PASAA */
const LanPasaa = () => {


  return (
    <Provider store={store}>
      <RouteLanPasaa />
    </Provider>

  )
}
export default LanPasaa