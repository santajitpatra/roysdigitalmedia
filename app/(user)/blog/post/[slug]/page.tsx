import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import Image from "next/image";
import urlForImage from "../../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import SocialIcon from "@/components/Social-Icon";
import Button from "@/components/ui/Button";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
{
slug }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`

*[_type=='post' && slug.current == $slug] [0]
{
    ...,
author->,
categories []->
}
`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28 pt-10">
      <section className="space-y-2 border border-primary text-white rounded-xl">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-primary w-full rounded-xl">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* author BIO */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className=" md:px-20 lg:px-32 xl:px-48">
        <h1 className="text-3xl lg:text-6xl font-extrabold py-10">
          {post.title}
        </h1>

        <Image
          className="object-cover object-center mx-auto"
          src={urlForImage(post.mainImage).url()}
          alt={post.author.name}
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-10 md:px-20 lg:px-32 xl:px-48 text-primary-dark_l text-base lg:text-lg">
        <PortableText value={post.body} components={RichTextComponents} />
        <div className="flex flex-col space-y-6 items-center justify-center mt-10">
          <Button name="Contact" url="/contact" />
          <SocialIcon />
        </div>
      </div>
    </article>
  );
}

export default Post;
