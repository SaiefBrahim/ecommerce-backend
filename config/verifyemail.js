const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const verifyEmail = async (to, fname, lname, token) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.EUSER,
        pass: process.env.EPASS,
      },
    });
    // send mail with defined transport object
    await transporter.sendMail({
      from: process.env.EUSER,
      to: to,
      subject: `${fname.charAt(0).toUpperCase()}${fname
        .slice(1)
        .toLowerCase()} ${lname.charAt(0).toUpperCase()}${lname
        .slice(1)
        .toLowerCase()} Merci de Confirmer Votre Compte Retech Outlet`,
      html: `<html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Confirmer Votre Email Retech Outlet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          /**
       * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
       */
          @media screen {
            @font-face {
              font-family: "Source Sans Pro";
              font-style: normal;
              font-weight: 400;
              src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
                url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff)
                  format("woff");
            }
    
            @font-face {
              font-family: "Source Sans Pro";
              font-style: normal;
              font-weight: 700;
              src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),
                url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff)
                  format("woff");
            }
          }
    
          /**
       * Avoid browser level font resizing.
       * 1. Windows Mobile
       * 2. iOS / OSX
       */
          body,
          table,
          td,
          a {
            -ms-text-size-adjust: 100%; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
          }
    
          /**
       * Remove extra space added to tables and cells in Outlook.
       */
          table,
          td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
          }
    
          /**
       * Better fluid images in Internet Explorer.
       */
          img {
            -ms-interpolation-mode: bicubic;
          }
    
          /**
       * Remove blue links for iOS devices.
       */
          a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
          }
    
          /**
       * Fix centering issues in Android 4.4.
       */
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
    
          body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
    
          /**
       * Collapse table borders to avoid space between cells.
       */
          table {
            border-collapse: collapse !important;
          }
    
          a {
            color: #1a82e2;
          }
    
          img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
          }
        </style>
      </head>
      <body style="background-color: #e9ecef">
        <!-- start preheader -->
        <div
          class="preheader"
          style="
            display: none;
            max-width: 0;
            max-height: 0;
            overflow: hidden;
            font-size: 1px;
            line-height: 1px;
            color: #fff;
            opacity: 0;
          "
        >
          ${fname.charAt(0).toUpperCase()}${fname
        .slice(1)
        .toLowerCase()} ${lname.charAt(0).toUpperCase()}${lname
        .slice(1)
        .toLowerCase()} Merci de Confirmer Votre Compte Retech Outlet
        </div>
        <!-- end preheader -->
    
        <!-- start body -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- start hero -->
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="
                      padding: 36px 24px 0;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      border-top: 3px solid #d4dadf;
                    "
                  >
                    <h1
                      style="
                        margin: 0;
                        font-size: 32px;
                        font-weight: 700;
                        letter-spacing: -1px;
                        line-height: 48px;
                        text-align: center;
                      "
                    >
                      Confirmer Votre Email Retech Outlet
                    </h1>
                  </td>
                </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
            </td>
          </tr>
          <!-- end hero -->
    
          <!-- start copy block -->
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <!-- start copy -->
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="
                      padding: 24px;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      text-align: center;
                    "
                  >
                    <p style="margin: 0">
                      Appuyez sur le bouton ci-dessous pour confirmer votre adresse
                      e-mail. Si vous n'a pas crée un compte
                      <a href="https://seebrand.vercel.app"> Retech Outlet</a>, Vous
                      pouvez <a href="https://seebrand.vercel.app"> Supprimer</a> cette adresse e-mail
                      en toute sécurité.
                    </p>
                  </td>
                </tr>
                <!-- end copy -->
    
                <!-- start button -->
                <tr>
                  <td align="left" bgcolor="#ffffff">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" bgcolor="#ffffff" style="padding: 12px">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td
                                align="center"
                                bgcolor="#1a82e2"
                                style="border-radius: 6px"
                              >
                                <a
                                  href="${
                                    process.env.API_BASE_URL
                                  }/verification?email=${to}&verify_token=${token}"
                                  target="_blank"
                                  style="
                                    display: inline-block;
                                    padding: 16px 36px;
                                    font-family: 'Source Sans Pro', Helvetica, Arial,
                                      sans-serif;
                                    font-size: 16px;
                                    color: #ffffff;
                                    text-decoration: none;
                                    border-radius: 6px;
                                  "
                                  >Confirmer votre email</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end button -->
    
                <!-- start copy -->
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="
                      padding: 24px;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      text-align: center;
                    "
                  >
                    <p style="margin: 0">
                      Si le boutton ne fonctionne pas, Cliquer sur ce
                    </p>
                    <p style="margin: 0">
                      <a href="${
                        process.env.API_BASE_URL
                      }/verification?email=${to}&verify_token=${token}" target="_blank">Lien de verification</a>
                    </p>
                  </td>
                </tr>
                <!-- end copy -->
              </table>
              <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
            </td>
          </tr>
          <!-- end copy block -->
    
          <!-- start footer -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 24px">
              <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <!-- start permission -->
                <tr>
                  <td
                    align="center"
                    bgcolor="#e9ecef"
                    style="
                      padding: 12px 24px;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      font-size: 14px;
                      line-height: 20px;
                      color: #666;
                    "
                  >
                    <p style="margin: 0">
                      Vous avez reçu cet e-mail car nous avons reçu une demande
                      d'inscription, Si vous n'avez pas demandé de s'inscrir vous
                      pouvez supprimer cet e-mail en toute sécurité.
                    </p>
                  </td>
                </tr>
                <!-- end permission -->
    
                <!-- start unsubscribe -->
                <tr>
                  <td
                    align="center"
                    bgcolor="#e9ecef"
                    style="
                      padding: 12px 24px;
                      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                      font-size: 14px;
                      line-height: 20px;
                      color: #666;
                    "
                  >
                    <p style="margin: 0">
                      To stop receiving these emails, you can
                      <a href="${
                        process.env.FRONT_END_URL
                      }/unsubscribe" target="_blank">unsubscribe</a>
                      at any time.
                    </p>
                    <p style="margin: 0">
                      22 Rue 8609 Imm. Ksontini ZI Charguia 1 Tunis, Tunisie
                    </p>
                  </td>
                </tr>
                <!-- end unsubscribe -->
              </table>
              <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
            </td>
          </tr>
          <!-- end footer -->
        </table>
        <!-- end body -->
      </body>
    </html>
    `,
    });
  } catch (err) {
    return res.status(400).json({ msg: "Email not sent", error: err });
  }
};
module.exports = verifyEmail;
