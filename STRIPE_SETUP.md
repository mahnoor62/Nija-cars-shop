# Stripe Payment Integration Setup

This project has been configured with Stripe payment processing. Follow these steps to complete the setup:

## 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Stripe Configuration
# Get these from your Stripe Dashboard: https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Base URL for your application (used in success/cancel redirects)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 2. Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Sign up or log in to your Stripe account
3. Copy your API keys:
   - **Publishable key** (starts with `pk_test_` for testing)
   - **Secret key** (starts with `sk_test_` for testing)

## 3. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to your products page
3. Click "BUY NOW" on any product
4. You'll be redirected to Stripe Checkout
5. Use test card numbers:
   - **Success**: 4242 4242 4242 4242
   - **Decline**: 4000 0000 0000 0002

## 4. Production Deployment

When deploying to production:
1. Switch to live keys in your Stripe dashboard
2. Update environment variables with live keys
3. Update `NEXT_PUBLIC_BASE_URL` to your production domain
4. Test the complete payment flow

## 5. Features Implemented

- ✅ Stripe Checkout integration
- ✅ Product display with pricing
- ✅ Loading states during payment processing
- ✅ Success and cancel page redirects
- ✅ Responsive product grid
- ✅ Error handling for failed payments

## 6. Test Card Numbers

Use these test card numbers for testing:

| Card Number | Result | Description |
|-------------|--------|-------------|
| 4242 4242 4242 4242 | ✅ Success | Visa (any future date) |
| 4000 0000 0000 0002 | ❌ Decline | Generic decline |
| 4000 0000 0000 9995 | ❌ Decline | Insufficient funds |

## 7. Troubleshooting

- **"Failed to create checkout session"**: Check your `STRIPE_SECRET_KEY`
- **"Invalid publishable key"**: Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- **Redirect issues**: Ensure `NEXT_PUBLIC_BASE_URL` is correct

## 8. Security Notes

- Never commit your `.env.local` file to version control
- Keep your secret key secure and private
- Use test keys for development, live keys for production
- Stripe handles all sensitive payment data securely
