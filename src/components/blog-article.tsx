"use client";
import {type BlogArticle} from "@/api/types.api";
import {useLocaleContext} from "@/context/locale";
import {IconArrowRight} from "@tabler/icons-react";

export default function BlogArticleCard({article}: {article: BlogArticle}) {
  const {intl} = useLocaleContext();
  return (
    <div
      key={article.id}
      className="flex items-center justify-between cursor-pointer blog-card"
    >
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center text-sm blog-link">
            {article.title}
          </div>
          <div>
            <IconArrowRight className="w-4 h-4 blog-icon"/>
          </div>
        </div>
        <p className="text-neutral-400 text-xs">
          {intl.format(new Date(article.createdAt))}
        </p>
      </div>
    </div>
  )
}