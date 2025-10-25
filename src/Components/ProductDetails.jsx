import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import FeedBackForm from "./FeedBackForm";
import Container from "./ui_layout/Container";

import { CheckCircle2, Heart, ShieldCheck } from "lucide-react";
import { FaStar } from "react-icons/fa";

function PaymentBadge({ label }) {
  return (
    <span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-700 inline-block">
      {label}
    </span>
  );
}

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  // loader থেকে আসা ডেটা (ধরা হলো এটা products-এর অ্যারে)
  const data = useLoaderData();
  const { id } = useParams();

  const productDetails = data.find((p) => p.Id === parseInt(id));
  // console.log(productDetails);

  return (
    <div>
      <h2 className="bg-linear-to-r from-[rgb(2,178,144)] to-[rgb(0,128,100)] bg-clip-text p-6 text-2xl font-bold text-transparent">
        Product Details
      </h2>

      <Container>
        <div>
          <div className="flex items-end gap-10 mx-auto my-5 p-4 shadow-md">
            {/* Product Image */}
            <div className="w-1/2 flex items-center justify-center h-96 border border-gray-300">
              <img
                src={productDetails.pictureURL}
                alt={productDetails.ProductName}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="w-1/2 space-y-2.5">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {productDetails.ProductName}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="badgeClass border-emerald-200 text-emerald-700 bg-emerald-50">
                  <CheckCircle2 className="h-4 w-4" /> In Stock,{" "}
                  {productDetails.availableQuantity}
                </span>
                <span className="badgeClass border-slate-200 text-slate-700 bg-slate-50">
                  SKU: ALT00007
                </span>
                <span className="badgeClass border-slate-200 text-slate-700 bg-slate-50">
                  🏷️ {productDetails.subCategory}
                </span>
              </div>

              <div className="mt-4 flex items-end justify-between gap-6">
                <div className="">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-slate-900">
                      ${productDetails.price.toFixed(0)}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      $71.65
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <div className="flex items-center gap-0.5">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <span>4.5</span>
                    <span className="text-slate-300">•</span>
                    <Link
                      className="underline-offset-2 hover:underline"
                      to="#"
                    >
                      321 reviews
                    </Link>
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    93% of buyers recommend this.
                  </div>
                </div>

                <div className="hidden text-right md:block">
                  <div className="text-xs text-slate-500">
                    MFR Part No:{" "}
                    <span className="font-medium text-slate-700">627224</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    UNSPSC:{" "}
                    <span className="font-medium text-slate-700">27111704</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    UPC:{" "}
                    <span className="font-medium text-slate-700">
                      4010886627228
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                {productDetails.shortDescription}
              </p>

              <div className="flex items-center gap-4">
                <button className="w-full py-3 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition">
                  Add to Cart
                </button>

                <button className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50">
                  <Heart className="h-5 w-5 text-slate-700" />
                </button>
              </div>

              <div className="mt-6 flex gap-1 justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <ShieldCheck className="h-5 w-5" /> 30‑day returns • 2‑year
                  warranty
                </div>
                <div className="flex items-center gap-1.5">
                  <PaymentBadge label="VISA" />
                  <PaymentBadge label="Mastercard" />
                  <PaymentBadge label="GPay" />
                  <PaymentBadge label="Apple Pay" />
                  <PaymentBadge label="UPI" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">{productDetails.longDescription}</div>
        </div>

        <FeedBackForm />
      </Container>
    </div>
  );
};

export default ProductDetails;
