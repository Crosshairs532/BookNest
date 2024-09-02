const Terms = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
          Terms of Service
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-10 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to our service. By accessing or using our website, you
              agree to be bound by these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. User Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              As a user, you are responsible for maintaining the confidentiality
              of your account and password, and for restricting access to your
              computer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Prohibited Activities
            </h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Engaging in any form of fraudulent activity.</li>
              <li>Posting content that is unlawful or offensive.</li>
              <li>Attempting to disrupt or hack our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, graphics, and code,
              is the intellectual property of our company.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate your access to our service if
              you violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms shall be governed and construed in accordance with the
              laws of [Your Country].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these terms, please contact us at
              [Your Contact Information].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
