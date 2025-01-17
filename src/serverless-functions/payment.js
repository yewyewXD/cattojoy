require("dotenv").config({
  path: `.env.development`,
})

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_TEST)

exports.handler = async function (event, context, callback) {
  // Parse data sent from frontend and validate
  const { amount } = JSON.parse(event.body)
  if (!amount) {
    return {
      statusCode: 400,
      body: "No total amount",
    }
  } else {
    console.log({ amount })
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "myr",
      payment_method_types: ["card"],
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    }
  } catch (err) {
    console.log("error:", err)
    return {
      statusCode: 500,
      body: "Internal server error",
    }
  }
}
