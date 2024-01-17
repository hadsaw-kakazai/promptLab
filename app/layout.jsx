import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
    title: "Prompt Lab",
    description : "Find best prompt that matached with your need"
}

function rootLayout({children}) {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>


            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default rootLayout

