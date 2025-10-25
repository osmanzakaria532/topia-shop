import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigation, Link } from "react-router";

import sliderImg_1 from "../../src/assets/1.jpg";
import sliderImg_2 from "../../src/assets/2.jpg";
import sliderImg_3 from "../../src/assets/3.jpg";

const Slider = () => {
  const navigate = useNavigation();
  const handleShopNow = () => {
    // Handle the "Shop Now" button click
    navigate("/products");
  };
  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={600}
      >
        {/*  Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src={sliderImg_1}
            alt=""
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
            <h2 className="text-4xl font-bold mb-3">
              Fresh Groceries Delivered to Your Doorstep 🥬
            </h2>
            <p className="max-w-xl text-lg mb-4">
              Order fresh vegetables, fruits, and daily essentials online. Get
              same-day delivery at your convenience.
            </p>
            <Link
              to="/products"
              //   onClick={handleShopNow}
              className="mt-2 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-semibold transition-all"
            >
              Shop Now
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src={sliderImg_2}
            alt=""
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
            <h2 className="text-4xl font-bold mb-3">
              100% Organic & Healthy Food 🍞
            </h2>
            <p className="max-w-xl text-lg mb-4">
              Eat clean and stay healthy with our farm-fresh organic items.
              Perfect for your family’s daily nutrition.
            </p>
            <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-full font-semibold transition-all">
              Explore Products
            </button>
          </div>
        </SwiperSlide>

        {/*  Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src={sliderImg_3}
            alt=""
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
            <h2 className="text-4xl font-bold mb-3">
              Save More with Our Weekly Offers 💰
            </h2>
            <p className="max-w-xl text-lg mb-4">
              Enjoy exclusive discounts and bundle deals on your favorite
              grocery items. Order today and save big!
            </p>
            <button className="mt-2 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition-all">
              View Offers
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
