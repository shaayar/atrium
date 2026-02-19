import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendWaitlistConfirmation } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email.toLowerCase(),
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { success: false, message: 'Email already registered' },
          { status: 409 }
        )
      }
      
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, message: 'Failed to add to waitlist' },
        { status: 500 }
      )
    }

    // Send confirmation email
    console.log('Attempting to send confirmation email to:', email)
    const emailResult = await sendWaitlistConfirmation(email)
    console.log('Email result:', emailResult)
    if (!emailResult.success) {
      console.error('Failed to send confirmation email:', emailResult.error)
      // Continue anyway - the user is added to waitlist
    } else {
      console.log('Confirmation email sent successfully')
    }

    return NextResponse.json(
      { success: true, message: 'Successfully added to waitlist', data },
      { status: 200 }
    )

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
