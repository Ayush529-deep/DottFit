function PolicyHero({ title }) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}

export function PrivacyPage() {
  return (
    <>
      <PolicyHero title="Privacy Policy – DottFit" />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8 font-semibold">Last Updated: January 2026</p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              At DottFit, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, services, or applications.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect:</p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Name, email address, phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Age, height, weight, fitness goals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Health and lifestyle details (only for fitness guidance)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Payment information (processed securely via third-party gateways)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Usage data (website/app interactions)</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">Your data is used to:</p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Create personalized fitness and wellness plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Improve our services and user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Communicate updates, support, and offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Track progress and performance</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Data Protection</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We use secure systems and industry-standard practices to protect your information. Your data is never sold or shared with unauthorized third parties.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We may use trusted tools for:</p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Payments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Communication</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-8">All third parties follow strict data protection standards.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Your Consent</h2>
            <p className="text-gray-700 mb-8">By using DottFit, you consent to this Privacy Policy.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              For privacy concerns, contact:<br />
              <span className="font-semibold text-blue-600">📧 support@dottfit.com</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <PolicyHero title="Terms & Conditions – DottFit" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <p className="text-gray-600 mb-8 font-semibold">
              Last Updated: January 2026
            </p>

            {/* Intro */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              By accessing or using DottFit, you agree to these Terms & Conditions.
              If you do not agree, please do not use our website, app, or services.
            </p>

            {/* General Disclaimer */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              General Disclaimer
            </h2>
            <p className="text-gray-700 mb-8">
              DottFit provides fitness and wellness guidance for educational
              purposes only. Individual results may vary based on consistency,
              lifestyle, and personal factors.
            </p>

            {/* Medical Disclaimer */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Health & Medical Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
              <p className="text-gray-700">
                DottFit does not provide medical advice, diagnosis, or treatment.
                Always consult a qualified healthcare professional before
                beginning any fitness or wellness program.
              </p>
            </div>

            {/* Participation */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Participation Responsibility
            </h2>
            <p className="text-gray-700 mb-8">
              By using DottFit, you acknowledge that participation is voluntary
              and undertaken at your own discretion.
            </p>

            {/* App Usage */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              App Usage Disclaimer
            </h2>
            <p className="text-gray-700 mb-8">
              Guidance provided through the DottFit app is designed to support
              general wellness and healthy habits and does not replace
              professional medical care.
            </p>

            {/* Results */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Results Disclaimer
            </h2>
            <p className="text-gray-700 mb-8">
              Progress and outcomes depend on individual effort, consistency,
              and personal circumstances. DottFit does not guarantee specific
              results.
            </p>

            {/* Responsibility */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Personal Responsibility
            </h2>
            <p className="text-gray-700 mb-8">
              Users are responsible for listening to their bodies and exercising
              within their personal limits.
            </p>

            {/* Programs */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Program Adjustments
            </h2>
            <p className="text-gray-700 mb-8">
              Programs, features, and content may be updated or adjusted over
              time to improve user experience and effectiveness.
            </p>

            {/* Payments */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Payments & Subscriptions
            </h2>
            <p className="text-gray-700 mb-8">
              Subscription fees are billed according to the selected plan.
              Details regarding renewals, cancellations, and refunds are
              available in our subscription policy.
            </p>

            {/* Pause / Cancel */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Pause & Cancellation
            </h2>
            <p className="text-gray-700 mb-8">
              You may pause or cancel your subscription according to the terms
              outlined in your account settings.
            </p>

            {/* Privacy */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Data & Privacy
            </h2>
            <p className="text-gray-700 mb-8">
              Your personal information is handled with care and used only in
              accordance with our Privacy Policy.
            </p>

            {/* Availability */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Accessibility & Availability
            </h2>
            <p className="text-gray-700 mb-8">
              Features and content availability may vary by location, device,
              and subscription plan.
            </p>

            {/* Support */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Support
            </h2>
            <p className="text-gray-700">
              If you have questions or need assistance, our support team is here
              to help.
              <br />
              <span className="font-semibold text-blue-600">
                support@dottfit.com
              </span>
            </p>

          </div>
        </div>
      </section>
    </>
  );
}



export function RefundPage() {
  return (
    <>
      <PolicyHero title="Refund & Cancellation Policy – DottFit" />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8 font-semibold">Last Updated: January 2026</p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              We value transparency and fairness.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. No Refund Policy</h2>
            <p className="text-gray-700 mb-4">Due to the personalized and digital nature of our services:</p>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-8">
              <p className="text-red-700 font-semibold">❌ No refunds once a plan is activated.</p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Plan Modifications</h2>
            <ul className="space-y-2 text-gray-700 mb-8 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>You may upgrade or modify plans (subject to terms)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Pausing plans may be allowed in special cases (management decision)</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Exceptions</h2>
            <p className="text-gray-700 mb-4">Refunds may be considered only if:</p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Payment was deducted multiple times</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Technical error occurred from our side</span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Contact for Support</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                <span className="font-semibold text-blue-600">📧 support@dottfit.com</span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-blue-600">📱 WhatsApp / Phone: +91 98765 43210</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}