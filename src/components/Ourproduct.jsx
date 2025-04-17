import React from "react";
import vector_bg from "../assets/image/vector-bg-3.a112de0b.svg";

// Reusable Section Component
const ProductSection = ({ title, description, image, reverse }) => (
  <div className="relative flex flex-col gap-5 my-10 bg-customer-bg">
    <div className={`absolute top-[45%] ${reverse ? "right-[5%]" : "md:left-[5%]"}`}>
      <img loading="lazy" src={vector_bg} alt="" />
    </div>
    <div className={`container flex flex-col mx-auto md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="w-full pt-6 md:pt-0 md:w-6/12">
        <img
          loading="lazy"
          src={image}
          className="object-contain sm:w-[60%] mx-auto h-full"
          alt={title}
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full py-5 text-center md:w-6/12">
        <h4 className="w-full mb-6 uppercase new_font">{title}</h4>
        <div className="w-full text-center">
          <div className="w-[90%] md:w-[60%] mx-auto">
            <p className="mx-2 mb-2 text-14">{description}</p>
          </div>
        </div>
        <div className="flex justify-center w-full my-6">
          <button className="flex items-center gap-2 px-2 py-2 uppercase transition-transform duration-500 ease-in-out transform border rounded-full text-tertiary border-tertiary lg:px-4 hover:bg-tertiary hover:text-secondary hover:scale-110">
            explore
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Ourproduct = () => {
  const products = [
    {
      title: "Natural Diamonds",
      image: "https://motibagems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-product-1.7c96ccda.webp&w=1920&q=75",
      description:
        "Natural diamonds hold significant value due to their rarity, enduring beauty, and cultural significance. Prized for centuries as symbols of wealth & romance as well as love, natural diamonds are cherished for their unique optical properties and durability, making them ideal for use in jewelry. Beyond their intrinsic beauty, diamonds are associated with luxury and exclusivity, often regarded as investments and treasured heirlooms passed down through generations. This combination of scarcity, aesthetic appeal, cultural importance, and economic impact contributes to the enduring value of natural diamonds.",
    },
    {
      title: "Lab-Grown Diamonds",
      image: "https://motibagems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-product-2.cce017d3.webp&w=1080&q=75",
      description:
        "Lab grown diamonds, also known as synthetic or cultured diamonds, are gaining traction in the market due to advancements in technology that allow for their creation in controlled laboratory conditions. While they share the same chemical composition and crystal structure as natural diamonds, lab-grown diamonds are typically less expensive than their natural counterparts. They offer comparable quality in terms of color, clarity, and hardness. Lab-grown diamonds are valued for their ethical and environmental benefits, as they do not require mining and have a smaller ecological footprint compared to natural diamond extraction. They provide consumers with more options and transparency in the diamond industry.",
    },
    {
      title: "Gemstone Jewelry",
      image: "https://motibagems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-product-3.df58f8c3.webp&w=1920&q=75",
      description:
        "Diamond jewelry holds a special place in the world of fashion and personal adornment, valued for its timeless elegance and enduring appeal. diamond jewelry comes in a myriad of designs to suit various tastes and occasions. Beyond their intrinsic beauty, diamond pieces often carry significant sentimental value, marking important milestones such as engagements, weddings, anniversaries, and other celebrations. it admire a symbol of love, a statement of style, or an investment in luxury, diamond jewelry continues to captivate and inspire people around the world, serving as cherished heirlooms passed down through generations.",
    },
  ];

  return (
    <div className="relative pt-5">
      <div className="mx-auto max-w-max">
        <h2 className="mb-1 font-bold uppercase new_font text-primary text-24">
          Our product
        </h2>
        <div className="flex flex-col items-center gap-1">
          <div className="h-[2.5px] w-32 bg-primary"></div>
        </div>
      </div>

      {products.map((product, index) => (
        <ProductSection
          key={index}
          title={product.title}
          description={product.description}
          image={product.image}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Ourproduct;
