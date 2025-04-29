import naturalDiamondsImage from '../assets/image/product/our-product-natural-diamonds.webp'
import labGrownDiamondsImage from '../assets/image/product/our-product-lab-grown-diamonds.webp'
import jewelryDiamondsImage from '../assets/image/product/our-product-jewelry-diamonds.webp'
import offeringBgImage1 from '../assets/image/product/offering-box-bg-1.webp';
import offeringBgImage2 from '../assets/image/product/offering-box-bg-2.webp';
import offeringBgImage3 from '../assets/image/product/offering-box-bg-3.webp';
import offeringBgImage4 from '../assets/image/product/offering-box-bg-4.webp'

export const offeringBackgroundImages = [
    offeringBgImage1,
    offeringBgImage2,
    offeringBgImage4,
    offeringBgImage3,
];

export const naturalDiamondsContent = {
    title: "Natural Diamonds",
    description: `Natural diamonds are often hailed as one of nature's most exquisite and cherished creations. Formed deep within the Earth's mantle over millions of years, these gems captivate with their mesmerizing brilliance and enduring beauty. Composed solely of pure carbon atoms arranged in a crystalline lattice structure, diamonds are renowned for their remarkable hardness, making them the toughest naturally occurring substance known to humanity.`,
    image: naturalDiamondsImage,
    manufacturingProcess: [
        {
            title: "Planning to cut a rough diamond",
            description: [
                `The most complicated stage in the diamond cutting process is planning and analysing the diamond rough, and it also demands the greatest skill and technology. During the design stages, the cutter will choose the best feasible diamond shapes in order to reduce waste and optimize the rough stone's output. To get precise measurements, the rough stone is often mapped with a Sarin machine. The marker, a highly experienced cutter who weighs all the factors and determines whether a diamond should be sawn or split into pieces, then marks exactly where the cuts should be made, performs these complex computations. This procedure might take months when dealing with huge, expensive gems.`,
                `Normally, 'Sarin Machine' is used to generate accurate measurements and formulate 3D models that will show the best ways to optimize the rough stone.`,
            ],
        },
        {
            title: "Marking",
            description: [
                "The second step in the diamond production process is the marking of the stone using 3D laser technology. Incorrect marking by a fraction of a millimetre can greatly impact the quality of the final diamond, so after noting any imperfections, a diamond marker may decide to work around an inclusion to polish a few high clarity diamonds from one rough stone, rather than yielding one large diamond of lower clarity grading.",
            ],
        },
        {
            title: "Cleaving/Sawing",
            listContent: [
                {
                    title: "Sawing Details",
                    description: [
                        "Sawing is the separation of a piece of diamond rough into separate pieces, to be finished as individual diamonds after planning the stone.",
                        "In Sawing we use Blade or Laser to cut the rough diamond into separate pieces. This may be used to remove extra portions of the diamond as well.",
                    ],
                },
                {
                    title: "Blade Sawing",
                    description: [
                        "Blade Sawing is the technology where we cut the diamonds using highly precise diamond powder coated Blades. The advantage is low cutting loss.",
                    ],
                },
                {
                    title: "Laser Sawing",
                    description: [
                        "Laser Sawing is using highly precise cutting technology with more atomization and making things more precise and accurate.",
                    ],
                },
            ],
        },
        {
            title: "Blocking and Bruting",
            description: [
                "Once the rough diamond has been reduced to the desired measurements by sawing, it needed to be contoured to achieve the basic shape through the process called Bruting/Griddling. This process requires attentiveness and expertise, in being able to shape the diamond precisely.",
                "Bruting can be done through 3 different techniques such as bruting by lasers, rubbing the stone with other diamonds in the opposite directions, disks impregnated with diamond dust.",
                "Bruting a diamond is an art and a science. In this process, the friction is produced in either way creating a rough grindle finish and progressively down the corners of the diamond round through abrasion.",
            ],
        },
        {
            title: "Polishing",
            description: [
                "Polishing of the diamond is the process of forming and shaping the facets of the diamond to achieve the optimum amount of reflection and refraction of the white light that brings sparkle and scintillation in the diamond.",
                "In the blocking process, the main facets of the diamond including 8 pavilion, 8 crowns, 1 cutlet, and 1 table are formed; by placing a diamond into the tang and lowered on the scaife to polish the 4 main crown facets and 4 main pavilion facets.",
            ],
        },
        {
            title: "Certification and Grading Lab",
            description: [
                `Once polished, every single facet of each individual diamond is carefully revived by both a highly accurate laser scanner as well as by a trained gemmologist. Any diamond that doesn't meet our strict quality control standards is sent back for re-polishing. The diamonds are then sent out to some of the most respected diamond grading laboratories worldwide such as GIA and IGI for certification before being studded in your precious diamond jewelry.`,
            ],
        },
    ],
    offerings: [
        "Loose Parcels & Certified Diamonds ",
        "Round Brilliants & Various Fancy shapes like Oval, Pear, Marquise, Princess, Cushion, Emerald, Radiant, Heart etc.",
        "D to Z Colors & Fancy Color diamonds in all measurements",
        "From 0.01ct through 5.00ct & above",
    ],
};

export const labGrownDiamondsContent = {
    title: "Lab Grown Diamonds",
    image: labGrownDiamondsImage,
    description:
        "Lab-Grown diamonds, also known as synthetic or cultured diamonds, are created through advanced technological processes that replicate the conditions under which natural diamonds form. These diamonds are chemically, physically, and optically identical to natural diamonds, these diamonds have same physical and chemical properties as mined diamonds.  yet they are produced in controlled laboratory environments rather than mined from the Earth.",
    manufacturingProcess: {
        description: `Lab-Grown Diamonds are revolutionizing the diamonds and jewelry industry with an environmentally friendly and morally sound approach to their production. Let's delve into this complex process.`,
        content: [
            {
                title: "Inspection and Placement of Diamond Seeds",
                description: [
                    `Each diamond seed undergoes meticulous scrutiny to eliminate flaws. The top-quality seeds are then delicately positioned on a metal disc for insertion into the diamond-growing apparatus. Generally, they are fabricated using two methods: High-Pressure High Temperature (HPHT) and Chemical Vapor Deposition (CVD).`,
                ],
            },
            {
                title: "Exposure to Elevated Temperatures",
                description: [
                    `A blend of high temperatures, pressure, and gases creates an environment that facilitates the breakdown of carbon atoms, which then precipitate onto the seeds within the chamber. Over time, the seeds metamorphose into rough diamonds within a span of a few weeks.`,
                ],
            },
            {
                title: "Cutting, Polishing, and Enhancing the Luster",
                description: [
                    `The rough diamonds generated acquire identical chemical, physical, and optical characteristics as mined diamonds through this process. They are then meticulously cut and polished to yield a genuine, authentic, and exquisitely cultivated diamond.`,
                    `Here at star impex, we have extensively researched lab-grown diamonds over the years, and in our efforts to make a positive environmental impact, we strive to offer the highest quality of lab-grown diamonds.`,
                ],
            },
        ],
    },
    offerings: [
        "Loose Parcels & Certified Lab Grown Diamonds. (CVD & HPHT)",
        "Round Brilliants & Various Fancy shapes like Oval, Pear, Marquise, Princess, Cushion, Emerald, Radiant, Heart & more",
        "All white Colors & Fancy Color diamonds in all measurements",
        "0.01ct through 10.00ct and above",
    ],
};

export const jewelryDiamondsContent = {
    title: "Diamond Jewelry",
    description:
        "Diamond jewelry is renowned for its timeless appeal and enduring beauty & Luxury. Regardless of fashion trends or changing styles, diamonds remain a symbol of sophistication and refinement, making them suitable for any occasion or outfit.",
    image: jewelryDiamondsImage,
    offerings: [
        "Engagement Rings, Earrings, Necklaces, Tennis Bracelets, Studs, and more",
        "Natural Diamonds & Lab Grown Diamond Jewelry",
        "In all Precious Metals like Gold, Silver, Platinum",
    ],
    otherContent:
        "star impex presents premium custom jewelry to B2B customers across the globe as per their requirements & requests, please contact our representative for more information on it.",
};