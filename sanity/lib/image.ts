import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlForImage(source: any) {
  return builder.image(source);
}
export default urlForImage;
