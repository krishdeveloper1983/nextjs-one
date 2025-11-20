export const metadata = {
  title: 'Simple Email Form - NewCursorApp',
  description: "A minimal HTML form that collects a visitor's email address.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <section className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-soft space-y-6">
        <header className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Stay in the loop</p>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Build a simple HTML form with email
          </h1>
          <p className="text-gray-600">
            Share your details to receive occasional product updates and early previews right in your inbox.
          </p>
        </header>

        <form className="space-y-4" method="post" action="#">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-[var(--radius)] border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:ring-brand-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              className="w-full rounded-[var(--radius)] border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:ring-brand-500"
            />
              <p className="text-xs text-gray-500">We'll send confirmations and updates to this inbox.</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what you're interested in hearing about."
              className="w-full rounded-[var(--radius)] border border-gray-300 px-4 py-3 text-base focus:border-brand-500 focus:ring-brand-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-[var(--radius)] bg-brand-600 px-4 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
          >
            Join the list
          </button>
        </form>

        <p className="text-xs text-center text-gray-500">
          We respect your privacy and never share your information. Unsubscribe at any time.
        </p>
      </section>
    </main>
  );
}

