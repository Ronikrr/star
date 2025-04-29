import React, { useState } from 'react'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { countryList } from '../utils/countrylist.utils';
import emailjs from '@emailjs/browser';
const initalState = {
    firstname: '',
    lastname: '',
    phoneno: '',
    email: "",
    companyname: '',
    diamondtype: '',
    country: "",
    message: ''
}
const InquiryForm = () => {
    const [FromData, setFromData] = useState(initalState)

    const onChange = (e) => {
        const { name, value } = e.target
        setFromData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(FromData)
        emailjs.send('service_csia6iy', 'template_confirmation', FromData, 'NuQv9XskxV05oXLmu')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Form Submited Successfully!")
                setFromData(initalState)

            }, (err) => {
                console.error('FAILED...', err);
                alert("FAILED")
            });
    }
    const handlePhoneChange = (value) => {
        setFromData((prev) => ({
            ...prev,
            phoneno: value,
        }));
    };
    return (
        <form onSubmit={onSubmit}
            className="grid gap-5 py-10 bg-white sm:grid-cols-2 sm:place-content-center max-md:px-6 lg:px-6"

        >
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="firstname">
                    First Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    type="text"
                    name="firstname"
                    value={FromData.firstname}
                    onChange={onChange}
                    id="firstname"
                    placeholder="Enter your first name"

                />

            </div>
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="lastname">
                    Last Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    type="text"
                    name="lastname"
                    value={FromData.lastname}
                    onChange={onChange}
                    id="lastname"
                    placeholder="Enter your last name"

                />

            </div>
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="phoneno">
                    Phone
                </label>
                <PhoneInput
                    id="phoneno"
                    defaultCountry="US"
                    focusInputOnCountrySelection={false}
                    international
                    value={FromData.phoneno}
                    onChange={handlePhoneChange}
                    countryCallingCodeEditable={false}
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]  !px-2 !outline-none focus:!outline-none"
                />
            </div>
            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="email">
                    Email
                </label>
                <input
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    type="text"
                    name="email"
                    value={FromData.email}
                    onChange={onChange}
                    id="email"
                    placeholder="Enter your email"
                />
            </div>

            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="companyname">
                    Company Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    type="text"
                    value={FromData.companyname}
                    onChange={onChange}
                    name="companyname"
                    id="companyname"
                    placeholder="Enter your company name"
                />
            </div>

            <div className="grid gap-[.25rem]">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="diamondtype">
                    Diamond Type
                </label>
                <div>
                    <select
                        id="diamondtype"
                        name="diamondtype"
                        value={FromData.diamondtype}
                        onChange={onChange}
                        className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    >
                        <option disabled value="">
                            Select Diamond Type
                        </option>
                        <option value={" Natural Diamonds"}>
                            Natural Diamonds
                        </option>
                        <option value={"Lab Grown Diamonds (CVD)"}>
                            Lab Grown Diamonds (CVD)
                        </option>
                        <option value={"Lab Grown Diamonds (HPHT)"}>
                            Lab Grown Diamonds (HPHT)
                        </option>
                    </select>
                </div>
            </div>

            <div className="grid gap-[.25rem] sm:col-span-2">
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="country">
                    Country
                </label>
                <div>
                    <select
                        id="country"
                        name="country"
                        className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                        value={FromData.country}
                        onChange={onChange}
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
                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary  " htmlFor="message">
                    Message
                </label>
                <textarea
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    name="message"
                    id="message"
                    value={FromData.message}
                    onChange={onChange}
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