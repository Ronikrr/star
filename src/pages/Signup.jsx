// import { fireEvent } from '@testing-library/dom'
// import React, { useState } from 'react'
// import bgImage3 from '../assets/image/vector-bg-3.a112de0b.svg'
// import { Link } from 'react-router-dom'
// const Signup = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastname: "",
//         companyName: "",
//         address: '',
//         state: "",
//         city: "",
//         country: "",
//         mobileNumber: '',
//         telephone: '',
//         email: '',
//         messenger: '',
//         messengerId: '',
//         website: '',
//         password: '',
//         confirmPassword: '',
//         notes:''
//     })

    
//   return (
//       <div className="pt-[120px]">
//           <div className="max-w-[1398px] w-full px-4 m-auto relative overflow-hidden">
//               <div className="flex flex-col justify-center items-center py-[63px] max-w-[943px] m-auto relative">
//                   <div className="mb-[40px] relative">
//                       <h1 className="text-2xl font-bold leading-7 text-center uppercase font-libre-barskerville">
//                           Create an Account
//                       </h1>
//                       <p className="font-poppins font-normal text-base leading-6 mt-[9px] max-w-[560px] text-center">
//                           Join our exclusive B2B diamond marketplace today! Sign up for free
//                           to access our wide range of high-quality diamonds at wholesale
//                           prices. Fill in your details below to get started.
//                       </p>
//                   </div>
//                   <div className="w-full">
//                       <form className="font-poppins" onSubmit={onSubmitClickHandler}>
//                           <div className="grid grid-cols-2 gap-x-9 gap-y-7 max-[768px]:gap-x-5 max-[768px]:gap-y-3 ">
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="inp-first-name"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           First Name*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="text"
//                                           name="firstName"
//                                           id="inp-first-name"
//                                           placeholder="Enter Your First Name "
//                                           value={firstName}
//                                           onChange={inputChangeHandler}
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{firstNameError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="inp-last-name"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Last Name*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="text"
//                                           name="lastName"
//                                           id="inp-last-name"
//                                           placeholder="Enter Your Last Name "
//                                           value={lastName}
//                                           onChange={inputChangeHandler}
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{lastNameError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="company-name"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Company Name*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="text"
//                                           name="companyName"
//                                           placeholder="Enter Your Company Name"
//                                           value={companyName}
//                                           onChange={inputChangeHandler}
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{companyNameError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="address"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Address*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="address"
//                                           name="address"
//                                           placeholder="Enter Your Address"
//                                           value={address}
//                                           onChange={inputChangeHandler}
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{addressError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="state"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           State or province*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="text"
//                                           name="state"
//                                           value={state}
//                                           onChange={inputChangeHandler}
//                                           placeholder="Enter your State or province "
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{stateError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="city"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           City*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="text"
//                                           name="city"
//                                           value={city}
//                                           onChange={inputChangeHandler}
//                                           placeholder="Enter Your City"
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{cityError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="country"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Country*
//                                       </label>
//                                       <select
//                                           className="cursor-pointer login-form-input"
//                                           name="country"
//                                           value={country}
//                                           onChange={inputChangeHandler}
//                                       >
//                                           <option value="">Select Country</option>
//                                           {countryList.map((data, index) => (
//                                               <option value={data.country} key={`country-${index}`}>
//                                                   {data.country}
//                                               </option>
//                                           ))}
//                                       </select>
//                                       <p className="text-red-600 ml-[1rem]">{countryError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="mobile"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Mobile
//                                       </label>
//                                       <PhoneInput
//                                           defaultCountry="US"
//                                           placeholder="Enter phone number"
//                                           onChange={onChangePhone}
//                                           value={mobileNumber}
//                                           international
//                                           countryCallingCodeEditable={false}
//                                           className="login-form-input "
//                                           name="mobileNumber"
//                                       />
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="telephone"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Telephone
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="string"
//                                           name="telephoneNumber"
//                                           value={telephone}
//                                           onChange={inputChangeHandler}
//                                           placeholder="Enter Your Telephone Number"
//                                       />
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="email"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Email*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="email"
//                                           name="email"
//                                           value={email}
//                                           onChange={inputChangeHandler}
//                                           placeholder="Enter Your Email"
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{emailError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="messenger"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Messenger ID
//                                       </label>
//                                       <div className="flex">
//                                           <select
//                                               className="w-1/3 text-sm capitalize cursor-pointer login-form-input rounded-e-none"
//                                               name="messengerType"
//                                               value={messenger}
//                                               onChange={inputChangeHandler}
//                                           >
//                                               {Object.values(EMessengerType).map((type) => (
//                                                   <option
//                                                       value={type}
//                                                       key={type}
//                                                       className="capitalize"
//                                                   >
//                                                       {type}
//                                                   </option>
//                                               ))}
//                                           </select>
//                                           <input
//                                               className="w-2/3 login-form-input rounded-s-none"
//                                               type="text"
//                                               name="messengerIdNumber"
//                                               value={messengerId}
//                                               onChange={inputChangeHandler}
//                                               placeholder="Enter ID or Number"
//                                           />
//                                       </div>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="website"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Website
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="text"
//                                           value={website}
//                                           onChange={inputChangeHandler}
//                                           name="website"
//                                           placeholder="Www.example.com"
//                                       />
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="password"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Password*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="password"
//                                           name="password"
//                                           value={password}
//                                           onChange={inputChangeHandler}
//                                           placeholder="Enter Your Password"
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">{passwordError}</p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2 sm:col-span-1 ">
//                                   <div className="flex flex-col">
//                                       <label
//                                           htmlFor="inp-confirmPassword"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Confirm Password*
//                                       </label>
//                                       <input
//                                           className="login-form-input"
//                                           type="password"
//                                           id="inp-confirmPassword"
//                                           name="confirmPassword"
//                                           value={confirmPassword}
//                                           onChange={inputChangeHandler}
//                                           placeholder="Confirm your Password "
//                                       />
//                                       <p className="text-red-600 ml-[1rem]">
//                                           {confirmPasswordError}
//                                       </p>
//                                   </div>
//                               </div>
//                               <div className="col-span-2">
//                                   <div className="flex flex-col ">
//                                       <label
//                                           htmlFor="notes"
//                                           className="font-medium text-base leading-6 ml-[17px] mb-[4px]"
//                                       >
//                                           Notes
//                                       </label>
//                                       <textarea
//                                           className="h-auto login-form-input"
//                                           name="notes"
//                                           value={notes}
//                                           onChange={inputChangeHandler}
//                                           placeholder="Write Notes"
//                                           rows={5}
//                                       />
//                                   </div>
//                               </div>
//                               <div className="col-span-2">
//                                   <div className="flex flex-col items-center">
//                                       <button
//                                           type="submit"
//                                           className="btn btn-tertiary font-poppins !px-[54px] !py-[14px] mb-[30px]"
//                                       >
//                                           CREATE ACCOUNT
//                                       </button>
//                                   </div>
//                               </div>
//                           </div>
//                       </form>
//                   </div>

//                   <img
//                       src={bgImage3}
//                       alt=""
//                       className="absolute top-[50%] left-[-110px] -rotate-12"
//                   />
//                   <img
//                       src={bgImage3}
//                       alt=""
//                       className="absolute top-[75px] right-[-135px] rotate-45"
//                   />
//               </div>
//               <Link
//                   href={"/login"}
//                   className="absolute top-[0px] left-[26px] rounded-full border-[3px] w-[46px] h-[46px] flex items-center justify-center border-[#212121] transition-all duration-500 md:hover:opacity-50"
//               >
//                   <Image src={arrow_img} alt="" />
//               </Link>
//           </div>
//       </div>
//   )
// }

// export default Signup
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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

const Signup = () => {
    const [formData, setFormData] = useState({
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
    });

    const [errors, setErrors] = useState({});

    const {
        firstName,
        lastname,
        companyName,
        address,
        state,
        city,
        country,
        mobileNumber,
        telephone,
        email,
        messenger,
        messengerId,
        website,
        password,
        confirmPassword,
        notes,
    } = formData;

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onChangePhone = (value) => {
        setFormData((prev) => ({ ...prev, mobileNumber: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = 'First name is required';
        if (!lastname.trim()) newErrors.lastname = 'Last name is required';
        if (!companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!address.trim()) newErrors.address = 'Address is required';
        if (!state.trim()) newErrors.state = 'State is required';
        if (!city.trim()) newErrors.city = 'City is required';
        if (!country.trim()) newErrors.country = 'Country is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (password !== confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmitClickHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Proceed with API call or next step
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
                                value={firstName}
                                onChange={inputChangeHandler}
                                error={errors.firstName}
                                placeholder="Enter Your First Name"
                            />

                            {/* Last Name */}
                            <FormInput
                                label="Last Name*"
                                name="lastname"
                                value={lastname}
                                onChange={inputChangeHandler}
                                error={errors.lastname}
                                placeholder="Enter Your Last Name"
                            />

                            {/* Company Name */}
                            <FormInput
                                label="Company Name*"
                                name="companyName"
                                value={companyName}
                                onChange={inputChangeHandler}
                                error={errors.companyName}
                                placeholder="Enter Your Company Name"
                            />

                            {/* Address */}
                            <FormInput
                                label="Address*"
                                name="address"
                                value={address}
                                onChange={inputChangeHandler}
                                error={errors.address}
                                placeholder="Enter Your Address"
                            />

                            {/* State */}
                            <FormInput
                                label="State or province*"
                                name="state"
                                value={state}
                                onChange={inputChangeHandler}
                                error={errors.state}
                                placeholder="Enter your State or Province"
                            />

                            {/* City */}
                            <FormInput
                                label="City*"
                                name="city"
                                value={city}
                                onChange={inputChangeHandler}
                                error={errors.city}
                                placeholder="Enter Your City"
                            />

                            {/* Country */}
                            <div className="flex flex-col col-span-2 sm:col-span-1">
                                <label className="ml-[17px] mb-[4px] text-base font-medium leading-6">
                                    Country*
                                </label>
                                <select
                                    className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]"
                                    name="country"
                                    value={country}
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
                                <label className="ml-[17px] mb-[4px] text-base font-medium leading-6">
                                    Mobile
                                </label>
                                <PhoneInput
                                    defaultCountry="US"
                                    placeholder="Enter phone number"
                                    onChange={onChangePhone}
                                    value={mobileNumber}
                                    international
                                    countryCallingCodeEditable={false}
                                    className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]"
                                    name="mobileNumber"
                                />
                            </div>

                            {/* Telephone */}
                            <FormInput
                                label="Telephone"
                                name="telephone"
                                value={telephone}
                                onChange={inputChangeHandler}
                                placeholder="Enter Your Telephone Number"
                            />

                            {/* Email */}
                            <FormInput
                                label="Email*"
                                name="email"
                                value={email}
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
                                        className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]"
                                        name="messenger"
                                        value={messenger}
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
                                        className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]"
                                        type="text"
                                        name="messengerId"
                                        value={messengerId}
                                        onChange={inputChangeHandler}
                                        placeholder="Enter ID or Number"
                                    />
                                </div>
                            </div>

                            {/* Website */}
                            <FormInput
                                label="Website"
                                name="website"
                                value={website}
                                onChange={inputChangeHandler}
                                placeholder="www.example.com"
                            />

                            {/* Password */}
                            <FormInput
                                label="Password*"
                                name="password"
                                type="password"
                                value={password}
                                onChange={inputChangeHandler}
                                error={errors.password}
                                placeholder="Enter Your Password"
                            />

                            {/* Confirm Password */}
                            <FormInput
                                label="Confirm Password*"
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={inputChangeHandler}
                                error={errors.confirmPassword}
                                placeholder="Confirm Your Password"
                            />

                            {/* Notes */}
                            <div className="flex flex-col col-span-2">
                                <label className="ml-[17px] mb-[4px] text-base font-medium leading-6">
                                    Notes
                                </label>
                                <textarea
                                    className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]"
                                    name="notes"
                                    value={notes}
                                    onChange={inputChangeHandler}
                                    placeholder="Write Notes"
                                    rows={5}
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col items-center col-span-2">
                                <button
                                    type="submit"
                                    className=" bg-tertiary px-8 rounded-full uppercase text-white py-2.5 flex  items-center gap-2 border   transform transition duration-500 ease-in-out hover:scale-110 "
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
            className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary "
        >
            {label}
        </label>
        <input
            className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]"
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
