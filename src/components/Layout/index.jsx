import Header from './Header'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default Layout