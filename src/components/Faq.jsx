const Faq = () => {
  return (
    <div>
      {/* Header div  */}
      <div>
        <h1 className="text-4xl text-center font-bold">FAQ Section</h1>
      </div>
      {/* Header div  */}

      {/* FAQ */}
      <div className="mt-10 max-w-[95%] xl:max-w-[80%] mx-auto flex flex-col gap-8">
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is Querious, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              Querious is a product recommendation platform designed to provide
              personalized product suggestions based on user preferences,
              queries, and feedback. Users can create accounts, submit
              product-related queries, and receive tailored recommendations. The
              platform analyzes user data such as browsing history, query
              keywords, and previous interactions to deliver results aligned
              with user interests. Querious leverages machine learning
              algorithms and natural language processing to understand user
              intent and provide contextually relevant suggestions.
              Additionally, users can explore trending products, view others’
              recommendations, and save their favorite items for future
              reference. Its user-friendly interface ensures smooth navigation,
              even for beginners.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I create an account on Querious?
          </div>
          <div className="collapse-content">
            <p>
              Creating an account on Querious is straightforward. Start by
              clicking the Register button in the navigation bar. You will be
              directed to a registration form requiring basic details such as
              your name, email address, and a secure password. After filling in
              the required fields, click Submit. You may receive an email with a
              verification link; clicking it will activate your account. If you
              prefer, you can also register using your Google or Facebook
              account for a quicker signup process. Once registered, you will
              gain access to features like personalized recommendations, the
              ability to save queries, and interaction with the community.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What types of recommendations can I expect from Querious?
          </div>
          <div className="collapse-content">
            <p>
              Querious offers a diverse range of recommendations tailored to
              your preferences. Whether you’re looking for electronics,
              clothing, sports gear, or household items, the platform has you
              covered. Recommendations are generated based on your submitted
              queries, past searches, and feedback on previous suggestions. For
              example, if you inquire about the best laptops under $1000,
              Querious will analyze your needs and suggest devices meeting your
              budget and performance expectations. The platform also considers
              trending products and expert reviews to refine its recommendations
              further. You can refine results by adjusting filters for price,
              brand, and other specifications.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How does Querious ensure my data is secure?
          </div>
          <div className="collapse-content">
            <p>
              Querious prioritizes user privacy and data security. The platform
              employs advanced encryption protocols to safeguard personal
              information and prevent unauthorized access. Passwords are stored
              securely using hashing techniques, ensuring they cannot be easily
              deciphered. Querious also adheres to strict data privacy policies
              and complies with GDPR regulations. Your data is only used to
              improve recommendation quality and is never shared with third
              parties without your explicit consent. Regular security audits and
              updates further protect the system from vulnerabilities. Users are
              encouraged to enable two-factor authentication for an additional
              layer of security.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I track my previous queries and recommendations?
          </div>
          <div className="collapse-content">
            <p>
              Yes, Querious allows users to track their previous queries and
              recommendations. Once logged in, navigate to the My Queries
              section in your account dashboard. Here, you’ll find a history of
              all the questions you’ve asked and the corresponding
              recommendations provided. Each query is time-stamped and organized
              for easy reference. You can revisit these recommendations anytime
              and save your favorite suggestions for future consideration.
              Additionally, Querious enables you to leave feedback on past
              recommendations, helping the platform refine its suggestions and
              offer even more personalized results in the future.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How does Querious generate recommendations?
          </div>
          <div className="collapse-content">
            <p>
              Querious generates recommendations using a blend of algorithms,
              including machine learning, natural language processing (NLP), and
              collaborative filtering. When a query is submitted, the platform
              analyzes keywords and context to understand your needs. It then
              cross-references this information with a database of products,
              reviews, and trends. Collaborative filtering considers other users
              with similar preferences and suggests products they found useful.
              Meanwhile, NLP ensures queries in natural language are accurately
              interpreted. The system also factors in user feedback, past
              interactions, and product popularity to deliver recommendations
              that align closely with your interests.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Is Querious free to use?
          </div>
          <div className="collapse-content">
            <p>
              Yes, Querious is free to use for all users. You can create an
              account, submit queries, and receive personalized recommendations
              without any cost. However, Querious also offers a premium
              subscription for users seeking advanced features, such as priority
              support, access to exclusive deals, and early access to new
              products. The premium plan is optional and enhances the user
              experience but does not restrict the core functionality of the
              platform. This ensures that everyone, regardless of their budget,
              can benefit from Querious features and find the best products for
              their needs.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I improve the quality of my recommendations?
          </div>
          <div className="collapse-content">
            <p>
              To improve the quality of your recommendations on Querious, start
              by submitting clear and specific queries. For instance, instead of
              asking for good headphones, specify your budget, usage (e.g.,
              gaming, travel), and preferred features like noise cancellation.
              Regularly interact with the platform by saving products, leaving
              feedback on suggestions, and marking items you like or dislike.
              Keeping your profile updated with accurate preferences also helps
              Querious understand your needs better. Lastly, enabling browsing
              history and purchasing data (if comfortable) allows the system to
              refine its suggestions further and provide more accurate
              recommendations.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What should I do if I don’t find relevant recommendations?
          </div>
          <div className="collapse-content">
            <p>
              If Querious fails to provide relevant recommendations, start by
              refining your query to make it more specific. For example, include
              details like price range, intended use, or preferred brands. Use
              the available filters to narrow down results further. You can also
              try rephrasing your query or breaking it into smaller, more
              focused questions. If the issue persists, contact Querious support
              through the Help section. The support team is equipped to assist
              with query optimization and address any system-related issues.
              Your feedback also helps Querious improve its algorithms to better
              serve your needs.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I contact Querious for support?
          </div>
          <div className="collapse-content">
            <p>
              Querious offers multiple channels for support to address your
              concerns. Navigate to the Help section on the website, where
              you’ll find an FAQ database for common issues. If your concern
              isn’t listed, submit a support ticket through the Contact Us form,
              detailing your problem and providing any relevant screenshots or
              links. You can also email support directly or use the live chat
              feature during business hours for immediate assistance. Querious
              aims to respond to all queries within 24-48 hours. For
              account-related issues, ensure you have your account details handy
              to expedite the resolution process.
            </p>
          </div>
        </div>
      </div>
      {/* FAQ */}
    </div>
  );
};

export default Faq;
