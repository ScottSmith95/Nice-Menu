import { Provider } from 'next-auth/client'

import '../styles/globals.css'

function NiceMenu({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default NiceMenu
