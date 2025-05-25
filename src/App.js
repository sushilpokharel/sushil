import React, { useEffect } from 'react';
import './App.css';
const PrivacyTerms = () => {
  useEffect(() => {
    // Hide loader when component is mounted
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }, []);

  return (
    <>
      {/* Loader Spinner */}
      <div id="loader" role="status" aria-live="polite">
        <div className="spinner"></div>
      </div>

      <div className="container">
        <h1>Privacy Policy</h1>
        <p>Last Updated: May 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to the official website of Sushil Pokharel. We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, phone number, address (if provided), and other identifiable information.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, operating system, and website usage data.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies to improve functionality and analyze website traffic.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To deliver and improve our services.</li>
            <li>To send updates, newsletters, and promotional materials (only with consent).</li>
            <li>To comply with legal obligations.</li>
            <li>To customize user experience.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We apply strong security measures to protect your information from unauthorized access, modification, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies Policy</h2>
          <p>
            You can control cookie settings through your browser. However, disabling cookies may limit website features.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Services</h2>
          <p>
            We may use services such as Google Analytics and payment gateways, which have their own privacy policies.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. All updates will be posted on this page.
          </p>
        </section>

        <h2>Terms & Conditions</h2>

        <section>
          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing or using our website, you agree to comply with these Terms and Conditions.
          </p>
        </section>

        <section>
          <h3>2. Intellectual Property Rights</h3>
          <p>
            All content on this website, including text, graphics, logos, and code, is the property of Sushil Pokharel. Unauthorized use is prohibited.
          </p>
        </section>

        <section>
          <h3>3. User Responsibilities</h3>
          <p>
            You agree not to misuse the website, engage in unlawful activities, or attempt to compromise security.
          </p>
        </section>

        <section>
          <h3>4. Limitation of Liability</h3>
          <p>
            We are not liable for any damages arising from the use of this website.
          </p>
        </section>

        <section>
          <h3>5. External Links</h3>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.
          </p>
        </section>

        <section>
          <h3>6. Governing Law</h3>
          <p>
            These terms are governed by the laws of Nepal. Any disputes will be resolved under Nepalese jurisdiction.
          </p>
        </section>

        <section>
          <h3>7. Contact Information</h3>
          <p>If you have any questions or concerns, please contact us:</p>
          <ul>
            <li>Email: support@sushilpokharel00.com.np</li>
            <li>Phone: 9765226385</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default PrivacyTerms;
