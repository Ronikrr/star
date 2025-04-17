import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';

import bgImage3 from '../assets/image/vector-bg-3.a112de0b.svg';
import { FaArrowLeft } from "react-icons/fa6";

// Sample country list
const countryList = [
    { country: 'India' },
    { country: 'USA' },
    { country: 'Canada' },
    { country: 'Australia' },
];

// Messenger type enum
const EMessengerType = {
    WHATSAPP: 'WhatsApp',
    TELEGRAM: 'Telegram',
    WECHAT: 'WeChat',
    SKYPE: 'Skype',
};

const inState = {
    firstName: '',
    lastname: '',
    companyName: '',
    address: '',
    state: '',
    city: '',
    country: '',
    mobileNumber: '',
    telephone: '',
    email: '',
    messenger: '',
    messengerId: '',
    website: '',
    password: '',
    confirmPassword: '',
    notes: '',
};

const Signup = () => {
    const [formData, setFormData] = useState(inState);
    const [errors, setErrors] = useState({});

    // Handle input changes
    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle phone number change (react-phone-number-input)
    const onChangePhone = (value) => {
        setFormData((prev) => ({ ...prev, mobileNumber: value }));
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        // Basic validation for required fields
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastname.trim()) newErrors.lastname = 'Last name is required';
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const onSubmitClickHandler = (e) => {
        e.preventDefault();  // Prevent form from reloading the page on submit
        if (validateForm()) { // If the form is valid
            console.log('Form submitted:', formData); // Here, submit the form data (e.g., make an API call)

            // Reset form to initial state
            setFormData(inState);
        }
    };


    return (
        <div className="pt-[120px]">
            <div className="max-w-[1398px] w-full px-4 m-auto relative overflow-hidden">
                <div className="flex flex-col justify-center items-center py-[63px] max-w-[943px] m-auto relative">
                    <div className="mb-[40px] relative">
                        <h1 className="text-2xl font-bold leading-7 text-center uppercase font-libre-barskerville">
                            Create an Account
                        </h1>
                        <p className="font-poppins font-normal text-base leading-6 mt-[9px] max-w-[560px] text-center">
                            Join our exclusive B2B diamond marketplace today! Sign up for free
                            to access our wide range of high-quality diamonds at wholesale
                            prices. Fill in your details below to get started.
                        </p>
                    </div>
                    <form className="w-full font-poppins" onSubmit={onSubmitClickHandler}>
                        <div className="grid grid-cols-2 gap-x-9 gap-y-7 max-[768px]:gap-x-5 max-[768px]:gap-y-3">
                            {/* First Name */}
                            <FormInput
                                label="First Name*"
                                name="firstName"
                                value={formData.firstName}
                                onChange={inputChangeHandler}
                                error={errors.firstName}
                                placeholder="Enter Your First Name"
                            />

                            {/* Last Name */}
                            <FormInput
                                label="Last Name*"
                                name="lastname"
                                value={formData.lastname}
                                onChange={inputChangeHandler}
                                error={errors.lastname}
                                placeholder="Enter Your Last Name"
                            />

                            {/* Company Name */}
                            <FormInput
                                label="Company Name*"
                                name="companyName"
                                value={formData.companyName}
                                onChange={inputChangeHandler}
                                error={errors.companyName}
                                placeholder="Enter Your Company Name"
                            />

                            {/* Address */}
                            <FormInput
                                label="Address*"
                                name="address"
                                value={formData.address}
                                onChange={inputChangeHandler}
                                error={errors.address}
                                placeholder="Enter Your Address"
                            />

                            {/* State */}
                            <FormInput
                                label="State or province*"
                                name="state"
                                value={formData.state}
                                onChange={inputChangeHandler}
                                error={errors.state}
                                placeholder="Enter your State or Province"
                            />

                            {/* City */}
                            <FormInput
                                label="City*"
                                name="city"
                                value={formData.city}
                                onChange={inputChangeHandler}
                                error={errors.city}
                                placeholder="Enter Your City"
                            />

                            {/* Country */}
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary">
                                    Country*
                                </label>
                                <select
                                    className="rounded-[1rem] border border-primary/20 px-[1.5rem] py-[1.25rem]"
                                    name="country"
                                    value={formData.country}
                                    onChange={inputChangeHandler}
                                >
                                    <option value="">Select Country</option>
                                    {countryList.map((c, index) => (
                                        <option key={index} value={c.country}>
                                            {c.country}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-red-600 ml-[1rem]">{errors.country}</p>
                            </div>

                            {/* Mobile */}
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary">
                                    Mobile
                                </label>
                                <PhoneInput
                                    defaultCountry="US"
                                    placeholder="Enter phone number"
                                    onChange={onChangePhone}
                                    value={formData.mobileNumber}
                                    international
                                    countryCallingCodeEditable={false}
                                    className="rounded-[1rem] border border-primary/20 px-[1.5rem] py-[1.25rem] "
                                    name="mobileNumber"
                                />
                            </div>

                            {/* Telephone */}
                            <FormInput
                                label="Telephone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={inputChangeHandler}
                                placeholder="Enter Your Telephone Number"
                            />

                            {/* Email */}
                            <FormInput
                                label="Email*"
                                name="email"
                                value={formData.email}
                                onChange={inputChangeHandler}
                                error={errors.email}
                                placeholder="Enter Your Email"
                                type="email"
                            />

                            {/* Messenger */}
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label className="ml-[17px] mb-[4px] text-base font-medium leading-6">
                                    Messenger ID
                                </label>
                                <div className="flex">
                                    <select
                                        className="w-1/3 rounded-l-[1rem] border border-primary/20 px-[1.5rem] py-[1.25rem]"
                                        name="messenger"
                                        value={formData.messenger}
                                        onChange={inputChangeHandler}
                                    >
                                        <option value="">Select</option>
                                        {Object.values(EMessengerType).map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        className="rounded-r-[1rem] w-2/3 border border-primary/20 px-[1.5rem] py-[1.25rem]"
                                        type="text"
                                        name="messengerId"
                                        value={formData.messengerId}
                                        onChange={inputChangeHandler}
                                        placeholder="Enter ID or Number"
                                    />
                                </div>
                            </div>

                            {/* Website */}
                            <FormInput
                                label="Website"
                                name="website"
                                value={formData.website}
                                onChange={inputChangeHandler}
                                placeholder="www.example.com"
                            />

                            {/* Password */}
                            <FormInput
                                label="Password*"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={inputChangeHandler}
                                error={errors.password}
                                placeholder="Enter Your Password"
                            />

                            {/* Confirm Password */}
                            <FormInput
                                label="Confirm Password*"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={inputChangeHandler}
                                error={errors.confirmPassword}
                                placeholder="Confirm Your Password"
                            />

                            {/* Notes */}
                            <div className="flex flex-col col-span-2">
                                <label className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary">
                                    Notes
                                </label>
                                <textarea
                                    className="rounded-[1rem] border border-primary/20 px-[1.5rem] py-[1.25rem]"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={inputChangeHandler}
                                    placeholder="Write Notes"
                                    rows={5}
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col items-center col-span-2">
                                <button
                                    type="submit"
                                    className=" bg-tertiary px-8 rounded-full uppercase text-white py-2.5 flex  items-center gap-2 border   transform transition duration-500 ease-in-out hover:scale-110 mb-[30px]"
                                >
                                    CREATE ACCOUNT
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Background Decorations */}
                    <img
                        src={bgImage3}
                        alt=""
                        className="absolute top-[50%] left-[-110px] -rotate-12"
                    />
                    <img
                        src={bgImage3}
                        alt=""
                        className="absolute top-[75px] right-[-135px] rotate-45"
                    />
                </div>

                {/* Back Button */}
                <Link
                    to="/login"
                    className="absolute top-[0px] left-[26px] rounded-full border-[3px] w-[46px] h-[46px] flex items-center justify-center border-[#212121] transition-all duration-500 md:hover:opacity-50"
                >
                    <FaArrowLeft />
                </Link>
            </div>
        </div>
    );
};

export default Signup;

// Helper Input Component
const FormInput = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    placeholder,
}) => (
    <div className="flex flex-col col-span-2 sm:col-span-1">
        <label
            htmlFor={name}
            className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary"
        >
            {label}
        </label>
        <input
            className="rounded-[1rem] border border-primary/20 px-[1.5rem] py-[1.25rem] "
            type={type}
            name={name}
            id={`inp-${name}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <p className="text-red-600 ml-[1rem]">{error}</p>}
    </div>
);
