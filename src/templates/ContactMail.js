const ContactMail = () => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>w3newbie HTML Email</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f6f9fc">
      <center
        style="
          width: 100%;
          table-layout: fixed;
          background-color: #f6f9fc;
          padding-bottom: 40px;
        "
      >
        <div style="max-width: 600px; background-color: #ffffff">
          <table
            align="center"
            style="
              margin: 0 auto;
              width: 100%;
              max-width: 600px;
              border-spacing: 0;
              font-family: sans-serif;
              color: #4a4a4a;
            "
          >
            <!-- 1st row -->
            <tr>
              <td style="padding: 0">
                <img
                  src="https://res.cloudinary.com/dnkkw3nqk/image/upload/v1606958375/cattojoy/email-contact-hero_eld8nb.png"
                  alt="Email Received"
                  width="600"
                  style="border: 0"
                />
              </td>
            </tr>
  
            <!-- 2nd row -->
            <tr>
              <td style="padding: 0; padding-top: 20px; padding-bottom: 10px">
                <img
                  src="https://res.cloudinary.com/dnkkw3nqk/image/upload/v1609244122/cattojoy/connect-banner_zuanmd.png"
                  alt="Email Received"
                  width="600"
                  style="border: 0"
                />
              </td>
            </tr>
  
            <!-- 3rd row -->
            <tr>
              <td>
                <table width="100%" style="border-spacing: 0; text-align: center">
                  <tr>
                    <td style="padding-bottom: 20px">
                      <a href="https://www.facebook.com/cattojoy"
                        ><img
                          src="https://res.cloudinary.com/dnkkw3nqk/image/upload/v1609239064/cattojoy/facebook_rk14jd.png"
                          alt="Facebook"
                          width="36"
                      /></a>
                      <a href="https://www.instagram.com/catto_joy/"
                        ><img
                          src="https://res.cloudinary.com/dnkkw3nqk/image/upload/v1609239109/cattojoy/instagram_qh9w0z.png"
                          alt="Instagram"
                          width="36"
                      /></a>
                      <a href="https://www.linkedin.com/company/cattojoy"
                        ><img
                          src="https://res.cloudinary.com/dnkkw3nqk/image/upload/v1609239133/cattojoy/linkedin_osebz2.png"
                          alt="LinkedIn"
                          width="36"
                      /></a>
                      <a href="https://twitter.com/cattojoy"
                        ><img
                          src="https://res.cloudinary.com/dnkkw3nqk/image/upload/v1609239136/cattojoy/twitter_hoz5ej.png"
                          alt="Twitter"
                          width="36"
                      /></a>
                      <a href="https://www.tiktok.com/@cattojoy"
                        ><img
                          src="https://res.cloudinary.com/dnkkw3nqk/image/upload/v1609239135/cattojoy/tiktok_r02elj.png"
                          alt="TikTok"
                          width="36"
                      /></a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  
            <!-- 4th row -->
            <tr>
              <td height="36" style="padding: 0; background-color: #ff66c4"> </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>
  `
}

module.exports = { ContactMail }
