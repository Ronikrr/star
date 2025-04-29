import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
import "react-phone-number-input/style.css";
import { countryList } from '../utils/countrylist.utils';
import emailjs from '@emailjs/browser';
const initalState = {
    firstname: '',
    lastname: '',
    phoneno: '',
    country: "",
    email: '',
    message: ''
}
const Contactusfrom = () => {
    const [fromdata, setFromdata] = useState(initalState)

    const onChange = (e) => {
        const { name, value } = e.target
        setFromdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const onsubmit = (e) => {
        e.preventDefault()
        console.log(fromdata)
        emailjs.send('service_csia6iy', 'template_3yxpude', fromdata, 'NuQv9XskxV05oXLmu')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Form Submited Successfully!")
                setFromdata(initalState)
                
            }, (err) => {
                console.error('FAILED...', err);
                alert("FAILED")
            });
    }   
    const handlePhoneChange = (value) => {
        setFromdata((prev) => ({
            ...prev,
            phoneno: value,
        }));
    };

    return (
        <form onSubmit={onsubmit}
            className="grid gap-5 py-10 bg-white sm:grid-cols-2 sm:place-content-center max-md:px-6 lg:px-6"
        >
            <div className="grid gap-[.25rem]">
                <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="firstname">
                    First Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    type="text"
                    name="firstname"
                    value={fromdata.firstname}
                    onChange={onChange}
                    id="firstname"
                    placeholder="Enter your first name" />

            </div>
            <div className="grid gap-[.25rem]">
                <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="lastname">
                    Last Name
                </label>
                <input
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    type="text"
                    value={fromdata.lastname}
                    onChange={onChange}
                    name="lastname"
                    id="lastname"
                    placeholder="Enter your last name"
                />

            </div>
            <div className="grid gap-5">
                <div className="grid gap-[.25rem]">
                    <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="phoneno">
                        Phone
                    </label>
                    <PhoneInput
                        id="phoneno"
                        defaultCountry="US"
                        placeholder="Enter phone number"
                        international
                        value={fromdata.phoneno}
                        onChange={handlePhoneChange}
                        countryCallingCodeEditable={false}
                        className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    />
                </div>
                <div className="grid gap-[.25rem]">
                    <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="country">
                        Country
                    </label>
                    <div>
                        <select
                            className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                            name="country"
                            value={fromdata.country}
                            onChange={onChange}
                            id="country"
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
                <div className="grid gap-[.25rem]">
                    <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                        type="text"
                        name="email"
                        value={fromdata.email}
                        onChange={onChange}
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
            </div>
            <div className="grid grid gap-[.25rem]">
                <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                    name="message"
                    id="message"
                    value={fromdata.message}
                    onChange={onChange}
                    placeholder="Describe your message..."
                    rows={7}

                />

            </div>
            <div className="mx-auto md:col-span-2">
                <button className=" bg-tertiary px-8 rounded-full uppercase text-white py-2.5 flex  items-center gap-2 border   transform transition duration-500 ease-in-out hover:scale-110 ">Submit</button>
            </div>
        </form>
    )
}

export default Contactusfrom