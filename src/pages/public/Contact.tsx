const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl overflow-hidden">
        
        <div className="p-8 space-y-6 bg-linear-to-br from-orange-500 to-orange-600 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
            <p className="text-sm leading-relaxed text-orange-100">
              Have questions, feedback, or need assistance? We're here to help. 
              Reach out to us and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <p>📍 Angeles City, Philippines</p>
            <p>📞 +63 912 345 6789</p>
            <p>✉️ support@shoplobs.com</p>
          </div>
        </div>

        <div className="p-8">
          <form className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;