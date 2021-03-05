require("dotenv").config({
  path: `.env.development`,
})

const stripe = require("stripe")(process.env.STRIPE_SECRET)

exports.handler = async function (event, context, callback) {
  // Parse data sent from frontend and validate
  const { amount } = JSON.parse(event.body)
  if (!amount) {
    callback(null, {
      statusCode: 400,
      body: "No total amount",
    })
  } else {
    console.log({ amount })
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "myr",
      payment_method_types: ["card"],
    })

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    })
  } catch (err) {
    console.log("error:", err)
    callback(null, {
      statusCode: 500,
      body: "Internal server error",
    })
  }
}
