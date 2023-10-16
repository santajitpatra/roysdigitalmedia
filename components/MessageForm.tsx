
function MessageForm() {
  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6 ">
      <div className="w-full px-8 py-10 mx-auto overflow-hidden shadow-2xl rounded-xl lg:max-w-xl bg-primary-light">
        <h1 className="text-2xl font-medium">Contact form</h1>
        <form
          className="mt-6"
          action=""
          method="POST"
        >
          <div className="grid grid-cols-2 gap-6 mt-4 ">
            <div>
              <label className="block mb-2 text-sm">First Name<em className="text-red-500">&#42;</em></label>
              <input
                id="first-name"
                name="first-name"
                required
                type="text"
                placeholder="Emma"
                className="block w-full px-5 py-3 mt-2 border rounded-md  focus:ring-opacity-40 focus:outline-none focus:ring text-black"
              /></div>
            <div>
              <label className="block mb-2 text-sm">Last Name<em className="text-red-500">&#42;</em></label>
              <input
                id="last-name"
                name="last-name"
                required
                type="text"
                placeholder="Roys"
                className="block w-full px-5 py-3 mt-2 border rounded-md  focus:ring-opacity-40 focus:outline-none focus:ring text-black"
              />
            </div>

          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm">Email address<em className="text-red-500">&#42;</em></label>
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="example@example.com"
              className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring-opacity-40 focus:outline-none focus:ring text-black"
            />
          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm">Phone<em className="text-red-500">&#42;</em></label>
            <input
              id="phone"
              name="phone"
              required
              type="tel"
              placeholder="+1234567890"
              className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring-opacity-40 focus:outline-none focus:ring text-black"
            />
          </div>
          <div className="w-full mt-6">
            <label className="block mb-2 text-sm">How did you hear about us?<em className="text-red-500">&#42;</em></label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 rounded-md md:h-48 focus:ring-opacity-40 focus:outline-none focus:ring text-black"
              placeholder="How did you hear about us?"
              defaultValue={""}
              id="message"
              name="message"
            />
          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm">Business Name</label>
            <input
              id="business"
              name="business"
              required
              type="text"
              placeholder="roys digital media"
              className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring-opacity-40 focus:outline-none focus:ring text-black"
            />
          </div>
          <div className="w-full mt-6">
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 rounded-md md:h-48 focus:ring-opacity-40 focus:outline-none focus:ring text-black"
              placeholder="Message"
              defaultValue={""}
              id="message"
              name="message"
            />
          </div>
          <button className="mt-6 rounded-full border-2 border-primary-dark px-4 py-2 xl:px-4 text-primary-dark transition-colors hover:bg-primary-dark_l hover:text-primary-text">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageForm