import {getLatestArticles} from "@/api/blog";
import Card from "@/ui/card";
import {IconPencil} from "@tabler/icons-react";
import BlogArticleCard from "./blog-article";

export default async function BlogCard(){
  const articles = await getLatestArticles();

  console.log(articles);

  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-2">
        <IconPencil className="text-purple-500 w-5 h-5" />
        <p className="font-semibold">Blog</p>
      </div>
      <div className="space-y-4">
        {
          articles.map((article) => (
            <BlogArticleCard
              key={`article-${article.id}`} 
              article={article}
            />
          ))
        }
      </div>
    </Card>
  )
}