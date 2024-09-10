# DevLink Marketplace (With Payments)

![image](https://github.com/user-attachments/assets/d0de5c97-c49d-4c36-9931-cd73ec38eb88)


Available: https://devlink-marketplace.netlify.app/find/employees

## Payments

> [!WARNING]  
> _PAYMENT BUTTON IS DISABLED!_ Do not enable it.

`Stripe` custom JS stripe paymentIntent server for payment integration. Visible on the <a href="https://github.com/mal0ner/devlink/tree/feat/payment">feat/payment</a> branch but not available on the hosted site as this is a demonstration project only. Payments occur when users want to post a full-time/employment post instead of a simple freelancing option.

## Running the payment server

```sh
git clone https://github.com/mal0ner/devlink.git

cd devlink && git checkout feat/payment

echo "A_STRIPE_API_KEY=<KEY>" > .env

npm i

npm run dev

# In a separate shell

cd devlink/src/server/

node paymentServer.cjs
```

After this, filling out the employment form and pressing `Purchase` should bring you to the payments page.
 

