import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

const page = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <div>Hello</div>;
};

export default page;
