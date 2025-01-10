import Swal from "sweetalert2";

const Newsletter = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    const form = e.target;
    Swal.fire({
      title: "Good job!",
      text: "We have received your email, Stay tuned for more news!",
      icon: "success"
    });
    form.reset();
  }
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
          <form onSubmit={handleNewsletter} className="join w-full">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered join-item w-full"
            />
            <button className="btn bg-[#ff7519] join-item">Subscribe</button>
          </form>
        </div>
      </div>
      {/* Newsletter card div */}
    </div>
  );
};

export default Newsletter;
