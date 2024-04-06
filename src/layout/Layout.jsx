import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Main from "../components/main/Main"
import NavigationBar from "../components/navigationBar/NavigationBar"
import SecondMain from "../components/secondMain/SecondMain"

import "./layout.scss"

function Layout() {
  return (
    <>
      <nav className="navBackground"> 
        <NavigationBar/>
      </nav>
      <header className="headerBackground px-4">
        <Header/>
      </header>
      <section>
        <main className="mainBackground px-4">
          <Main/>
        </main>
        <main className="secondMainBackground px-4">
          <SecondMain/>
        </main>
      </section>
      <footer className="footerBackground">
        <Footer/>
      </footer>
    </>
  )
}

export default Layout
