import Link from 'next/link'

const servicesItems = [
  {
    title: "Content Creation",
    description: "Make your brand stand out on social media.Keep up with what’s trending and break through the clutter with targeted content creation strategies.",
  },
  {
    title: "Social Media Management",
    description: "Grow your social media following strategically. Let the experts manage and maintain your social profiles so you can focus on other aspects of your business.",
  },
  {
    title: "Brand Development",
    description: "Distinguishing your brand from the rest. Create the foundation for how your brand is perceived. Define your voice, imagery, and online presence. ",
  }, {
    title: "Consulting",
    description: "Learn what strategies will work best for your brand and receive a guided plan on how to maintain your marketing internally.",
  }, {
    title: "Web Design / Development",
    description: "Enhance your online presence and develop the foundational platform for reaching the world around you.Guide more traffic to your business with strategic SEO practices and more.",
  }, {
    title: "Event Planning",
    description: "Carefully curate and organize any event with skilled planners.Create a memorable experience for all with ease and smooth- running operations.",
  }
]

const ServicesHome = () => {
  return (
    <div className="bg-[#FBCEB1] flex flex-col justify-center items-center"><h1>Services
    </h1>
      <div>
        ko
      </div>  <Link
        href="/services"
        className=" px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring focus:ring-gray-300 focus:ring-opacity-80"                                >
        view details
      </Link>
      </div>
  )
}

export default ServicesHome