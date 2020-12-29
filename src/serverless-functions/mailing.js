const nodemailer = require("nodemailer")
const { ContactMail } = require("../templates/ContactMail")

require("dotenv").config({
  path: `.env.development`,
})

exports.handler = function (event, context, callback) {
  const user = process.env.MAIL_USER
  const pass = process.env.MAIL_PW

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  })

  // Parse data sent from frontend and validate
  const { email, name, type } = JSON.parse(event.body)
  if (!email || !name || !type) {
    return callback(null, {
      statusCode: 400,
      body: "No email, name, or email type is detected",
    })
  }

  const mailOptions = {
    from: `Catto Joy ${user}`,
    to: name,
    subject: "Welcome to Catto Joy Test",
    html: ContactMail(),
  }

  if (type === "purchase") {
    mailOptions.subject = "Thank you for choosing Catto Joy"
    mailOptions.html = ContactMail()
  }

  transporter.sendMail(mailOptions, (error, info) => {
    // handle errors
    if (error) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      })
    }

    // success!
    callback(null, {
      statusCode: 200,
      body: "Successfully sent mail!",
    })
  })
}
