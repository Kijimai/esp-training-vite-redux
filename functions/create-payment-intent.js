require("dotenv").config()

const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
  if (event.body) {
    const { cost, email } = JSON.parse(event.body)
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: cost,
        receipt_email: email,
        currency: "usd",
      })

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      }
    }
  }

  return {
    statusCode: 200,
    body: "payment intent",
  }
}
