

import vector_bg from '../assets/image/vector-bg.svg'
import contact_secrtion_image from '../assets/image/contact-section-bg.jpeg'
import message from '../assets/image/ic-message.5ee0ca3d.svg'
import phone from '../assets/image/ic-phone.f67e287d.svg'
const ContactUsSection = () => {
    return (
        <section className="relative">
            <div className="absolute w-full -z-[1] h-[50%] sm:h-[75%]">
                <div className="absolute w-full h-full bg-black/60" />
                <img
                    src={contact_secrtion_image}
                    alt="contact section background"
                    className="w-full h-full "
                />
            </div>
            <div className="px-3 py-14">
                <h3 className="mb-5 text-center text-secondary sub-title new_font text-[20px] ">
                    CONTACT US
                </h3>
            </div>
            <div className="pb-8 flex flex-col sm:flex-row gap-5 lg:w-[40vw] justify-center items-center lg:justify-between lg:mx-auto">
                <a
                    href={`tel:+919601600500`}
                    className="bg-white w-[250px] border border-tertiary/20 hover:border-tertiary rounded-3xl py-4 grid place-items-center hover:scale-105 hover:-translate-y-1 transition-transform duration-500"
                >
                    <div className="w-[75px] h-[75px] relative flex justify-center items-center mb-3">
                        <div className="absolute w-full h-full bg-no-repeat bg-contain " >
                            <img loading="lazy" src={vector_bg} alt="" />
                        </div>
                        <img loading="lazy" src={phone} alt="phone icon" width={35} height={35} />
                    </div>
                    <span>+919601600500</span>
                </a>
                <a
                    href={`mailto:info@starimpex.store`}
                    className="bg-white w-[250px] border border-tertiary/20 hover:border-tertiary rounded-3xl py-4 grid place-items-center hover:scale-105 hover:-translate-y-1 transition-transform duration-500"
                >
                    <div className="w-[75px] h-[75px] relative flex justify-center items-center mb-3">
                        <div className="absolute w-full h-full bg-no-repeat bg-contain " >
                            <img loading="lazy" src={vector_bg} alt="" />
                        </div>
                        <img
                            src={message}
                            alt="message icon"
                            width={35}
                            height={35}
                        />
                    </div>
                    <span>info@starimpex.store</span>
                </a>
            </div>
        </section>
    );
};

export default ContactUsSection;
