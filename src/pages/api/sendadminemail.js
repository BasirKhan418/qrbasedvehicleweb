

const nodemailer = require("nodemailer");
const handler = async (req, res) => {
    console.log(req.body);
    const transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER_NAME,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        }
      });

      const info = await transporter.sendMail({
        from: '<support@Quvehl.com>', // sender address
        to: `khanbasir5555@gmail.com,prasadrudra279@gmail.com,nyayabrata09@gmail.com`, // list of receivers
        subject: `🚗 Quvehl: New Vehicle Rental Alert! 🎉`, // Subject line
        text: "Quvehl: New Vehicle Rental Alert!", // plain text body
        html: `
        <body style="background-color: #f4f4f4; font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <table role="presentation" align="center" style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse;">
            <tr>
                <td style="background-color: #009688; padding: 20px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0;">New Vehicle Rental</h1>
                </td>
            </tr>
            <tr>
                <td style="background-color: #ffffff; padding: 20px; color: #333333; text-align: left;">
                    <p style="margin: 0; margin-bottom: 16px;">Dear Team,</p>
                    <p style="margin: 0; margin-bottom: 16px;">This is to notify you that a user has just rented a vehicle through your website. Here are the details:</p>
                    <ul style="padding-left: 20px; margin: 16px 0;">
                        <li><strong>User Name:</strong> ${req.body.name}</li>
                        <li><strong>User Email:</strong> ${req.body.email}</li>
                        <li><strong>Vehicle Type:</strong> ${req.body.type}</li>
                        <li><strong>Order Id:</strong> ${req.body.orderid}</li>
                        <li><strong>Price:</strong> ${req.body.price}</li>
                        <li><strong>Distance:</strong> ${req.body.km}</li>
                    </ul>
                    <p style="margin: 0;">Please log in to your admin panel to view more details and take necessary actions.</p>
                </td>
            </tr>
            <tr>
                <td style="background-color: #009688; color: #ffffff; padding: 20px; text-align: center;">
                    <p style="margin: 0;">Best regards,<br>QuVehl Team</p>
                </td>
            </tr>
            <tr>
                <td style="background-color: #e0f2f1; text-align: center; padding: 10px; color: #333333;">
                    <p style="margin: 0;">&copy; 2024 Quvehl.com. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </body>
        `, 
      });
      res.status(200).json({ Success: true});
}
export default handler;