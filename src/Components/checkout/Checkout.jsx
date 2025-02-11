import React from "react";
import { Icon } from "@iconify/react";
import { Global } from "../../Context/GlobalContext";

const CheckoutPage = () => {
  // Destructure the Checkout object and its nested objects
  const { translate } = Global();
  const { checkout } = translate;
  const {
    title,
    orderSummary,
    total,
    placeOrder,
    contact,
    shipping,
    belowTitle,
  } = checkout;

  const {
    title: contactTitle,
    email,
    phone,
    placeholder: { email: emailPlaceholder, phone: phonePlaceholder },
  } = contact;

  const {
    title: shippingTitle,
    firstName,
    secondName,
    address,
    city,
    placeHolder, // ✅ Correct key (was "placeHolder" before)
  } = shipping;

  const { firstNamePlace, lastNamePlace, addressPlace, cityPlace } =
    placeHolder;

  return (
    <div className="min-h-screen mt-12 py-10 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          {/* Header with Icon and Title */}
          <div className="flex justify-center items-center gap-2">
            <Icon
              icon="mdi:cart-check"
              className="text-4xl"
              style={{ color: "var(--secondary-color)" }}
            />
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
          <p className="text-gray-600 mt-2">{belowTitle}</p>
        </div>

        {/* Grid Layout for Checkout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Details and Shipping */}
          <div className="lg:col-span-2">
            {/* User Details Form */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon
                  icon="mdi:account-circle-outline"
                  className="text-2xl"
                  style={{ color: "var(--secondary-color)" }}
                />
                {contactTitle}
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Icon
                      icon="mdi:email-outline"
                      className="text-lg"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    {email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder={emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Icon
                      icon="mdi:phone-outline"
                      className="text-lg"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    {phone}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder={phonePlaceholder}
                  />
                </div>
              </form>
            </div>

            {/* Shipping Address Form */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon
                  icon="mdi:truck-delivery-outline"
                  className="text-2xl"
                  style={{ color: "var(--secondary-color)" }}
                />
                {shippingTitle}
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Icon
                        icon="mdi:account-outline"
                        className="text-lg"
                        style={{ color: "var(--secondary-color)" }}
                      />
                      {firstName}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder={firstNamePlace}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Icon
                        icon="mdi:account-outline"
                        className="text-lg"
                        style={{ color: "var(--secondary-color)" }}
                      />
                      {secondName}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder={lastNamePlace}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Icon
                      icon="mdi:home-outline"
                      className="text-lg"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    {address}
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder={addressPlace}
                  />
                </div>

                <div className="grid w-full md:max-w-72 mx-auto">
                  <div>
                    <label
                      htmlFor="city"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Icon
                        icon="mdi:city-variant-outline"
                        className="text-lg"
                        style={{ color: "var(--secondary-color)" }}
                      />
                      {city}
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder={cityPlace}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white shadow-md h-max rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Icon
                icon="mdi:receipt-text-outline"
                className="text-2xl"
                style={{ color: "var(--secondary-color)" }}
              />
              {orderSummary}
            </h2>

            <div className="space-y-4">
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>{total}</span>
                <span>$443.30</span>
              </div>
            </div>

            <button className="mt-6 w-full px-4 py-2 bg-[--secondary-color] text-white rounded-md hover:bg-[--primary-color] transition-colors duration-300 flex items-center justify-center gap-2">
              <Icon
                icon="mdi:check-circle-outline"
                className="text-xl"
                style={{ color: "white" }}
              />
              {placeOrder}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
