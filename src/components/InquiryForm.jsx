import React from 'react'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { countryList } from '../utils/countrylist.utils';
const InquiryForm = () => {
    return (
        <form
            className="grid gap-5 py-10 bg-white sm:grid-cols-2 sm:place-content-center max-md:px-6 lg:px-6"

        >
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-name">
                    First Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary px-[1rem] py-[0.75rem] "
                    type="text"
                    name="name"
                    id="inp-name"
                    placeholder="Enter your first name"

                />

            </div>
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-surname">
                    Last Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary px-[1rem] py-[0.75rem] "
                    type="text"
                    name="surname"
                    id="inp-surname"
                    placeholder="Enter your last name"

                />

            </div>
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-phone">
                    Phone
                </label>
                <PhoneInput
                    id="inp-phone"
                    defaultCountry="US"
                    focusInputOnCountrySelection={false}

                    international
                    countryCallingCodeEditable={false}
                    className="rounded-[1rem] border border-primary px-[1rem] py-[0.75rem]  !px-2 !outline-none focus:!outline-none"
                />
            </div>
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-email">
                    Email
                </label>
                <input
                    className="rounded-[1rem] border border-primary px-[1rem] py-[0.75rem] "
                    type="text"
                    name="email"
                    id="inp-email"
                    placeholder="Enter your email"
                />
            </div>

            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-companyname">
                    Company Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary px-[1rem] py-[0.75rem] "
                    type="text"
                    name="company-name"
                    id="inp-companyname"
                    placeholder="Enter your company name"
                />
            </div>

            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-diamond-type">
                    Diamond Type
                </label>
                <div>
                    <select
                        id="inp-diamond-type"
                        name="diamond-type"
                        className="w-full rounded-[1rem] border border-primary px-[1rem] py-[0.75rem] "
                    >
                        <option disabled value="">
                            Select Diamond Type
                        </option>
                        <option value={""}>
                            Natural Diamonds
                        </option>
                        <option value={""}>
                            Lab Grown Diamonds (CVD)
                        </option>
                        <option value={""}>
                            Lab Grown Diamonds (HPHT)
                        </option>
                    </select>
                </div>
            </div>

            <div className="grid gap-[.25rem] sm:col-span-2">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-country">
                    Country
                </label>
                <div>
                    <select
                        id="inp-country"
                        name="country"
                        className="w-full rounded-[1rem] border border-primary px-[1rem] py-[0.75rem] "

                    >
                        <option disabled value="">
                            Select Country
                        </option>
                        {countryList.map((data, index) => (
                            <option value={data.country} key={`country-${index}`}>
                                {data.country}
                            </option>
                        ))}
                    </select>

                </div>
            </div>
            <div className="grid gap-[.25rem] sm:col-span-2">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="inp-message">
                    Message
                </label>
                <textarea
                    className="rounded-[1rem] border border-primary px-[1rem] py-[0.75rem] "
                    name="message"
                    id="inp-message"
                    placeholder="Describe your message..."
                    rows={7}

                />
            </div>
            <div className="mx-auto sm:col-span-2">
                <button className=" bg-tertiary px-8 rounded-full uppercase text-white py-2.5 flex  items-center gap-2 border   transform transition duration-500 ease-in-out hover:scale-110 ">Submit</button>
            </div>
        </form>
    )
}

export default InquiryForm