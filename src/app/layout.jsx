import './globals.css'

export const metadata = {
  title: 'ShopHub - Premium E-commerce Store',
  description: 'Discover amazing products with secure payments and fast delivery. Shop the latest trends with confidence.',
  keywords: 'e-commerce, shopping, products, online store, secure payments',
  authors: [{ name: 'ShopHub Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
