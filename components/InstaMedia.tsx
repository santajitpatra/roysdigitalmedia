import Image from "next/image";
import {instamediaitem} from "../config/home"
const InstaMedia = () => {
  return (
    <div className="bg-[#FBCEB1] w-full h-full pb-10">
      <a href="https://www.instagram.com/roysdigitalmedia">
        <h6 className="text-center py-10 underline">@roysdigitalmedia</h6>
      </a>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10">
        {instamediaitem.map((post) => (
          <div key={post.id} className="relative h-48 w-50">
            <Image
              src={post.img}
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstaMedia