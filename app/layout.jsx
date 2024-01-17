import '@styles/global.css';

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
                {children}
            </main>
        </body>
    </html>
  )
}

export default rootLayout

