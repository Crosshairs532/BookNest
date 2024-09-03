const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Privacy Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Introduction
        </h2>
        <p className="text-gray-600">
          Welcome to our Privacy Policy. Your privacy is critically important to
          us. We are committed to protecting the personal information you share
          with us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We collect information that you provide to us directly, such as when
          you create an account, fill out a form, or contact us. This may
          include your name, email address, phone number, and any other
          information you choose to provide.
        </p>
        <p className="text-gray-600">
          We also collect information automatically when you use our services,
          such as IP addresses, browser types, and pages viewed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect to provide, maintain, and improve
          our services, to communicate with you, and to protect our users.
        </p>
        <p className="text-gray-600">
          We may also use your information to send you promotional messages and
          other information that may be of interest to you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Sharing Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We do not share your personal information with third parties except as
          necessary to provide our services, comply with the law, or protect our
          rights.
        </p>
        <p className="text-gray-600">
          In the event of a merger, acquisition, or sale of assets, we may
          transfer your information to the successor organization.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Security</h2>
        <p className="text-gray-600">
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no internet
          transmission is completely secure or error-free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Your Choices
        </h2>
        <p className="text-gray-600">
          You have the right to access, correct, or delete your personal
          information at any time. You may also opt out of receiving promotional
          communications from us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 underline"
          >
            support@example.com
          </a>
          .
        </p>
      </section>

      <section>
        <p className="text-gray-500 text-sm">Last updated: September 1, 2024</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
