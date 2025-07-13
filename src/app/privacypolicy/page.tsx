// app/privacy/page.tsx
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>

      <p className="mb-4">
        At <span className="font-semibold">Countdown Timer X</span>, your privacy is important to us. We are committed to being transparent about what data we collect — and more importantly, what we don't.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">1. No Personal Data Collected</h2>
      <p className="mb-4">
        We do not collect, store, or share any personal data. You can use Countdown Timer X freely without creating an account or providing any personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">2. Cookies & Analytics</h2>
      <p className="mb-4">
        We do not use cookies for tracking or analytics. Your session is completely private and not monitored.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">3. Ads & Monetization</h2>
      <p className="mb-4">
        This site may display clean, non-intrusive ads to help support development and cover basic costs. We do not use personalized ad tracking or sell user data. It's just a way to earn a little pocket money while keeping the tool free for everyone.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">4. Third-Party Services</h2>
      <p className="mb-4">
        We currently do not integrate with any third-party services that collect user data. If this changes, the policy will be updated accordingly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">5. Updates to This Policy</h2>
      <p className="mb-4">
        We may occasionally update this Privacy Policy to reflect changes to the site. Any updates will be posted here, with the effective date clearly shown.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">6. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, feel free to reach out via our <a href="/contact" className="text-blue-600 underline">Contact</a> page.
      </p>
    </main>
  );
}
