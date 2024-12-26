const Newsletter = () => {
  return (
    <div>
      {/* Header div */}
      <div>
        <h1 className="text-4xl text-center font-bold">
          Subscribe to our Newsletter
        </h1>
      </div>
      {/* Header div */}

      {/* Newsletter card div */}
      <div className="max-w-[95%] xl:max-w-[50%] mx-auto mt-10 bg-newsletterBg bg-cover bg-no-repeat bg-bottom rounded-2xl p-10">
        <h1 className="text-xl font-bold text-center">Newsletter</h1>
        <p className="text-lg font-semibold text-center mt-4">
          Subscribe to our newsletter to get the latest updates from us. We have
          new queries everyday and You can benefit alot from it
        </p>

        <div className="mt-10">
          <div className="join w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered join-item w-full"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>
      {/* Newsletter card div */}
    </div>
  );
};

export default Newsletter;
