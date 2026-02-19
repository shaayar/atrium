import nodemailer from 'nodemailer'

export async function sendWaitlistConfirmation(email: string) {
  try {
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Verify transporter configuration
    await transporter.verify()

    const info = await transporter.sendMail({
      from: `"Atrium" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Atrium',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #000;">
          
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="font-size: 32px; font-weight: 300; letter-spacing: 0.2em; margin: 0; color: #000;">
              ATRIUM
            </h1>
            <p style="font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; margin: 10px 0 0 0; color: #666;">
              Architectural Digital Spaces
            </p>
          </div>

          <!-- Main Content -->
          <div style="background: #f8f8f8; padding: 40px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="font-size: 24px; font-weight: 300; margin: 0 0 20px 0; color: #000;">
              You're on the list.
            </h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; color: #333;">
              Thank you for your interest in Atrium. Your personal digital museum is taking shape, and you'll be among the first to enter when the doors open.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 30px 0; color: #333;">
              We're crafting a space where your memories become architecture. No grids. No feeds. Just intentional experiences.
            </p>

            <div style="text-align: center; padding: 20px; background: #000; border-radius: 4px;">
              <p style="color: #fff; font-size: 14px; letter-spacing: 0.1em; margin: 0;">
                Initial doors opening Mid-2026
              </p>
            </div>
          </div>

          <!-- What's Next -->
          <div style="margin-bottom: 30px;">
            <h3 style="font-size: 18px; font-weight: 500; margin: 0 0 15px 0; color: #000;">
              What to expect:
            </h3>
            <ul style="margin: 0; padding-left: 20px; color: #333;">
              <li style="margin-bottom: 10px;">Early access to the immersive gallery experience</li>
              <li style="margin-bottom: 10px;">Updates on architectural development progress</li>
              <li style="margin-bottom: 10px;">Special founding member privileges</li>
            </ul>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 30px; border-top: 1px solid #e0e0e0;">
            <p style="font-size: 12px; color: #666; margin: 0;">
              © 2026 ATRIUM. A personal digital museum.
            </p>
            <p style="font-size: 12px; color: #999; margin: 10px 0 0 0;">
              You're receiving this because you joined our waitlist.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true, data: info }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}
