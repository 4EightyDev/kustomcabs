import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Luxury Cabinetry | Premium Kitchen Design',
  description: 'Experience the pinnacle of kitchen craftsmanship with our luxury cabinetry collection',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vuq3jpf.css" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}