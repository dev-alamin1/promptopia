import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';


export const metadata ={
    title:"Promptopia",
    discription: "Discover and Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className="gradient"/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;