import SocialIcon from "./Social-Icon";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function ContactDetails() {
    return (
        <div className="md:w-1/2 md:mx-6">
            <div className="border-b-2 border-primary-dark pb-10 ">
                <h2 className="text-3xl font-semibold capitalize lg:text-4xl">
                    Let’s create excitement together. Get in touch with us today!
                </h2>
            </div>

            <div className="mt-6 space-y-8 md:mt-8 border-b-2 border-primary-dark pb-10  ">
                <h2 className="text-3xl font-semibold capitaliz">Contact Details</h2>
                <p className="flex items-start -mx-2">


                    <HiOutlinePhone size={20} />
                    <a href="tel:832.316.0798" className="mx-2  truncate w-72">
                        832.316.0798
                    </a>
                </p>
                <p className="flex items-start -mx-2">

                    <HiOutlineMail size={20} />
                    <a
                        href="mailto:emma@roysdigitalmedia.com"
                        className="mx-2  truncate w-72"
                    >
                        emma@roysdigitalmedia.com
                    </a>
                </p>
            </div>

            <div className="mt-6 space-y-8 md:mt-8 border-b-2 border-primary-dark pb-10  ">
                <h2 className="text-3xl font-semibold capitaliz">Office Location</h2>
                <p className="flex items-start -mx-2">

                    <GrLocation size={25} />
                    <a
                        href="https://goo.gl/maps/FX2LPYCxahSpCQAs8"
                        className="mx-2 "
                    >
                        The Cannon West Houston <br />

                        1334 Brittmoore Road Houston, TX 77043
                    </a>
                </p>
           
            </div>
            <div className="mt-6 md:mt-8">
                <h3 className="TEXTCOLOR">Follow us</h3>
                <div className="flex mt-4  ">
                    <SocialIcon size={20} />
                </div>
            </div>
        </div>
    );
}

export default ContactDetails