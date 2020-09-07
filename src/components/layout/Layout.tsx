import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-white antialiased lg:min-h-screen font-sans overflow-auto">
      <Header />
      <div className="my-4">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
