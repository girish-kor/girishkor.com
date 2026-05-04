/**
 * EmailJS Integration Test
 * Tests the EmailJS setup to verify credentials and template configuration
 */

// Load env vars from .env file
import dotenv from 'dotenv'
dotenv.config()

const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY
const RUN_LIVE_TEST = process.env.EMAILJS_TEST_LIVE === 'true'

console.log('📧 EmailJS Configuration Test')
console.log('============================\n')

// Validate env vars
if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  console.error('❌ Missing environment variables!')
  console.error(`SERVICE_ID: ${SERVICE_ID ? '✓' : '✗'}`)
  console.error(`TEMPLATE_ID: ${TEMPLATE_ID ? '✓' : '✗'}`)
  console.error(`PUBLIC_KEY: ${PUBLIC_KEY ? '✓' : '✗'}`)
  process.exit(1)
}

console.log('✓ Environment variables loaded')
console.log(`  SERVICE_ID: ${SERVICE_ID}`)
console.log(`  TEMPLATE_ID: ${TEMPLATE_ID}`)
console.log(`  PUBLIC_KEY: ${PUBLIC_KEY}\n`)

if (!RUN_LIVE_TEST) {
  console.log('Live EmailJS request skipped.')
  console.log('Set EMAILJS_TEST_LIVE=true to send a real test email from this script.')
  process.exit(0)
}

// Test API call
const testEmail = async () => {
  console.log('📤 Sending test email...\n')
  
  const payload = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      name: 'Test User',
      email: 'test@example.com',
      title: 'This is a test message from email.test.js'
    }
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      console.log('✅ Email sent successfully!')
      console.log(`Status: ${response.status} ${response.statusText}\n`)
      console.log('Test Payload:')
      console.log(JSON.stringify(payload.template_params, null, 2))
    } else {
      const error = await response.text()
      console.error(`❌ Email send failed!`)
      console.error(`Status: ${response.status} ${response.statusText}`)
      console.error(`Error: ${error}\n`)
      console.error('Payload sent:')
      console.error(JSON.stringify(payload.template_params, null, 2))
      process.exit(1)
    }
  } catch (err) {
    console.error('❌ Network error:')
    console.error(err.message)
    process.exit(1)
  }
}

testEmail()
