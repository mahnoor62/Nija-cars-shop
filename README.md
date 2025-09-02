# RaceHub - Gamified Car Racing Platform

A modern, responsive car racing game built with Next.js, featuring Stripe payment integration and a clean UI using shadcn/ui components.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design using shadcn/ui components
- **Car Collection**: Display cars with images, titles, points, and gaming stats
- **Direct Unlock**: One-click Stripe unlock for immediate car access
- **Stripe Integration**: Secure payment processing with Stripe Checkout
- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Performance**: Optimized with Next.js App Router and Image optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS with shadcn/ui components
- **Payments**: Stripe Checkout
- **Icons**: Lucide React
- **State Management**: React Hooks with localStorage persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Stripe keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Stripe Setup

1. **Create a Stripe account** at [stripe.com](https://stripe.com)
2. **Get your API keys** from the Stripe Dashboard
3. **Update environment variables** with your keys
4. **Test the integration** using Stripe's test card numbers

### Test Card Numbers
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Expiry**: Any future date
- **CVC**: Any 3 digits

## 📱 Features Overview

### Car Display
- Grid layout with responsive breakpoints
- Car images with hover effects
- Category badges
- Gaming stats (Speed, Handling, Power)

### Direct Unlock
- One-click unlock for each car
- Immediate Stripe unlock processing
- No cart management required

### Payment Flow
- Stripe Checkout integration
- Success/cancel pages
- Order confirmation

## 🎨 Customization

### Adding Cars
Edit `src/data/products.js` to add or modify cars:
```javascript
{
  id: 9,
  title: "New Car",
  price: 99999,
  image: "https://example.com/image.jpg",
  description: "Car description",
  category: "Category"
}
```

### Styling
- Colors are defined in `src/app/globals.css`
- Component variants in individual component files
- Responsive breakpoints in `tailwind.config.js`

### Components
All UI components are in `src/components/ui/` following shadcn/ui patterns.

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column car grid
- **Desktop**: Four-column car grid with enhanced spacing

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Add build script and environment variables
- **Docker**: Use the provided Dockerfile

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.jsx      # Root layout
│   └── page.jsx        # Home page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   └── ProductCard.jsx # Product display
├── data/               # Static data
│   └── products.js     # Product catalog
└── lib/                # Utility functions
    └── utils.js        # CSS class utilities
```

## 🐛 Troubleshooting

### Common Issues

1. **Stripe errors**: Check your API keys and environment variables
2. **Build errors**: Ensure all dependencies are installed
3. **Image loading**: Verify image URLs are accessible
4. **Cart persistence**: Check localStorage in browser dev tools

### Getting Help

- Check the console for error messages
- Verify environment variables are set correctly
- Ensure Stripe keys are valid and in test mode
- Check network tab for API call failures

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review Stripe documentation for payment issues

---

Built with ❤️ using Next.js and shadcn/ui
