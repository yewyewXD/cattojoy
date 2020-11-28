const nodemailer = require("nodemailer")

exports.handler = function (event, context, callback) {
  const user = process.env.MAIL_USER
  const pass = process.env.MAIL_PASSWORD

  console.log(user, pass)

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  })

  // Parse data sent in form hook (email, name etc)
  const { email, name } = JSON.parse(event.body)

  // make sure we have data and email
  if (!email || !name) {
    return callback(null, {
      statusCode: 400,
      body: `some error occurred`,
    })
  }

  let mailOptions = {
    from: `"from ${user}`,
    to: email, // send to email from contact form
    subject: "Subject",
    html: "<b> Hello World </b>",
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
      body: "mail sent",
    })
  })
}
