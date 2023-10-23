import Marquee from "react-fast-marquee"

const InstaBanner = () => {
  return (
    <div>
      <Marquee speed={100} className="-mb-12 md:-mb-36">
        <h2 className="text-2xl md:text-7xl font-thin">MAKE YOUR BRAND STAND OUT &#9830; MAKE YOUR BRAND STAND OUT &#9830;&nbsp;</h2>
      </Marquee>
      <img src="/images/rdm_website_feeds.png" alt="insta banner" />
      <Marquee direction="right" speed={100} className="-mt-12 md:-mt-36">
        <h2 className="text-2xl md:text-7xl font-thin">MAKE YOUR BRAND STAND OUT &#9830; MAKE YOUR BRAND STAND OUT &#9830;&nbsp;</h2>
      </Marquee>
    </div>
  )
}

export default InstaBanner