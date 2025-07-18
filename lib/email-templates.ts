export const getAdminEmailTemplate = (data: {
  fullName: string
  email: string
  subject: string
  message: string
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0062ff, #00a3ff); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">MidasCreed Website</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0062ff; margin-top: 0; border-bottom: 2px solid #0062ff; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 8px 0;"><strong style="color: #555; width: 100px; display: inline-block;">Name:</strong> ${data.fullName}</p>
              <p style="margin: 8px 0;"><strong style="color: #555; width: 100px; display: inline-block;">Email:</strong> <a href="mailto:${data.email}" style="color: #0062ff; text-decoration: none;">${data.email}</a></p>
              <p style="margin: 8px 0;"><strong style="color: #555; width: 100px; display: inline-block;">Subject:</strong> ${data.subject}</p>
            </div>
            
            <h3 style="color: #0062ff; margin: 25px 0 15px 0; border-bottom: 1px solid #e9ecef; padding-bottom: 8px;">Message</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #0062ff;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Reply directly to this email to respond to ${data.fullName}
              </p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This email was sent from the MidasCreed contact form</p>
          <p style="margin: 5px 0;">© 2025 MidasCreed. All rights reserved.</p>
        </div>
      </body>
    </html>
  `
}

export const getUserEmailTemplate = (data: {
  firstName: string
  subject: string
  message: string
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting MidasCreed</title>
      </head>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0062ff, #00a3ff); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">A Touch of Your Future Today</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0062ff; margin-top: 0;">Hi ${data.firstName}!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin: 20px 0;">
              Thank you for contacting <strong>MidasCreed</strong>. We've received your message and our team will get back to you within <strong>24 hours</strong>.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #0062ff; margin: 25px 0;">
              <h3 style="margin: 0 0 10px 0; color: #0062ff; font-size: 16px;">Your Message Summary:</h3>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${data.subject}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; font-style: italic; color: #666;">"${data.message.length > 100 ? data.message.substring(0, 100) + "..." : data.message}"</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #0062ff, #00a3ff); padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: white; margin: 0 0 15px 0; font-size: 18px;">What's Next?</h3>
              <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px;">
                <li style="margin: 8px 0;">Our team will review your inquiry</li>
                <li style="margin: 8px 0;">We'll prepare a personalized response</li>
                <li style="margin: 8px 0;">You'll hear from us within 24 hours</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 25px 0;">
              <p style="color: #666; margin: 10px 0;">In the meantime, feel free to explore our services:</p>
              <div style="margin: 20px 0;">
                <a href="https://midascreed.com/services/ai" style="display: inline-block; margin: 5px 10px; padding: 8px 16px; background: #0062ff; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">AI Solutions</a>
                <a href="https://midascreed.com/services/ar" style="display: inline-block; margin: 5px 10px; padding: 8px 16px; background: #0062ff; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">AR Experience</a>
                <a href="https://midascreed.com/services/web3" style="display: inline-block; margin: 5px 10px; padding: 8px 16px; background: #0062ff; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">Web3 Integration</a>
              </div>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>Follow us on social media:</p>
          <p style="margin: 10px 0;">
            <a href="https://x.com/MidasCreed" style="color: #0062ff; text-decoration: none; margin: 0 10px;">X (Twitter)</a> |
            <a href="https://www.linkedin.com/company/MidasCreed/" style="color: #0062ff; text-decoration: none; margin: 0 10px;">LinkedIn</a>
          </p>
          <p style="margin: 15px 0 5px 0;">© 2025 MidasCreed. All rights reserved.</p>
          <p style="margin: 0; font-size: 11px;">Lilongwe, Malawi | +265 995 22 82 64 | info@midascreed.com</p>
        </div>
      </body>
    </html>
  `
}
