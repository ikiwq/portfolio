import {BASE_URL} from "@/constants/common";

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date()
    }
  ]
}