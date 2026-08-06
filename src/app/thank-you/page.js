// pages/thank-you.js
import Link from 'next/link';

export default function ThankYou() {
    return (
        <>
            <section className='thankyou-page'>
                <div className='container'>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <h1>Thank You!</h1>
                        <p>Your submission has been received.</p>

                        <p>We're excited to connect with you and will be in touch shortly. In the meantime, feel free to explore more about what we do or check your inbox for updates.

                            Need help? We're here for you! Reach out anytime. Stay tuned! </p>

                        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
                            Go back to the home page
                        </Link>
                    </div>
                </div>
            </section>
        </>


    );
}
