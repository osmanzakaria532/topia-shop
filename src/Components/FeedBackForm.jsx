import { toast } from "react-toastify";

const FeedBackForm = () => {
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log({ name, email, message });

    e.target.reset();
    toast.success("Feedback submitted successfully!");
  };
  return (
    <div className="my-12 p-6 rounded-2xl border bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-center">Feedback Form</h2>
      <form
        className="mt-6 space-y-4"
        onSubmit={handleFeedbackSubmit}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full h-10 rounded-md border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              className="w-full h-10 rounded-md border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Enter your message..."
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full h-10 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default FeedBackForm;
