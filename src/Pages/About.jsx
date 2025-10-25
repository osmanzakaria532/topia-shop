import React from "react";

/**
 * GroceryAboutUs – About Us section for a grocery shop
 * TailwindCSS-only, no external UI libs required.
 *
 * Usage example:
 * <About />  // uses sensible Bangladeshi defaults
 * // or pass your own props to override any field
 */

const About = ({
  shopName = "Topia Shop",
  tagline = "Freshness • Fair Prices • Friendly Service",
  description = "We began with a simple promise: make daily grocery shopping easier, fresher, and more affordable for families in Dhaka. From farm‑fresh vegetables and seasonal fruits to rice, lentils, spices, dairy and household essentials, we handpick quality so you don’t have to compromise.",
  highlights = [
    "Daily-checked freshness & hygiene",
    "60‑minute delivery within 3 km (Dhaka)",
    "Weekly bundle deals & fair prices",
    "Easy returns within 48 hours",
  ],
  address = "House 12, Road 3, Mirpur-10, Dhaka 1216",
  hours = "Everyday 8:00 AM – 10:00 PM (BST)",
  phone = "01711-234567",
  email = "care@greenbasket.bd",
  deliveryOptions = "In‑store pickup • Same‑day Dhaka delivery • Cash/Card/Online (bKash/Nagad)",
}) => {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-emerald-50 via-white to-white">
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[1200px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
        {/* Hero */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
            🛒 About Us
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Welcome to <span className="text-emerald-700">{shopName}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base text-gray-600 sm:text-lg">
            {tagline}
          </p>

          <div className="mx-auto mt-6 max-w-3xl text-left text-gray-700">
            <p className="leading-7">{description}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Contact Us
            </a>
            <a
              href="#offers"
              className="rounded-2xl border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              See Offers
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                  {"🥦"}
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">Why us? </span>
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Our Promise</h2>
            <p className="mt-3 text-gray-700">
              We combine modern convenience with the warmth of local service.
              Whether you’re visiting our store or ordering online, we ensure a
              smooth experience with fair prices and friendly support.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              What You’ll Find
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-700">
              <li>Daily‑fresh vegetables, fruits & herbs</li>
              <li>Rice, lentils, spices & pantry staples</li>
              <li>Dairy, eggs, bread & beverages</li>
              <li>Frozen foods & household essentials</li>
            </ul>
          </div>
        </div>

        {/* Contact & Logistics */}
        <div
          id="contact"
          className="mt-12 grid gap-6 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm md:grid-cols-2"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Find Us</h3>
            <dl className="mt-3 space-y-2 text-gray-700">
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-gray-500">Address</dt>
                <dd className="flex-1">{address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-gray-500">Hours</dt>
                <dd className="flex-1">{hours}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Get in Touch
            </h3>
            <dl className="mt-3 space-y-2 text-gray-700">
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-gray-500">Phone</dt>
                <dd className="flex-1">{phone}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-gray-500">Email</dt>
                <dd className="flex-1">{email}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-gray-500">Delivery</dt>
                <dd className="flex-1">{deliveryOptions}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Thank you for trusting{" "}
          <span className="font-semibold text-gray-700">{shopName}</span> as
          your daily grocery partner — we’re here to make life a little easier,
          one bag at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
