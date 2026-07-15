import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { BlogContent } from "@/components/blog/BlogContent";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ctaLabel } from "@/lib/data/nav";
import {
  formatBlogDate,
  type BlogPost,
} from "@/lib/data/blog";

type BlogArticleProps = {
  post: BlogPost;
};

export function BlogArticle({ post }: BlogArticleProps) {
  const hasContent = post.content.trim().length > 0;

  return (
    <article className="relative">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-56 w-[60%] -translate-x-1/2 rounded-full bg-accent/12 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-5 pt-28 pb-10 sm:px-8 md:pt-32 lg:px-10">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-display text-sm font-medium text-text-muted transition hover:text-accent-bright"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-display text-[10px] font-semibold tracking-wider text-accent-bright uppercase"
              >
                {category}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-accent-bright" />
              {post.readingTime}
            </span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>
              {formatBlogDate(post.publishedAt)}
            </time>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 border-l-2 border-accent/50 pl-4 text-base leading-relaxed text-text-muted sm:text-lg">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 border-t border-border pt-10">
            {hasContent ? (
              <BlogContent markdown={post.content} />
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-bg-elevated/40 px-6 py-14 text-center">
                <p className="font-display text-lg font-semibold text-white">
                  Article content coming soon
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                  This post is published as a title and outline. Full SEO
                  article content will appear here once it&apos;s provided.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 rounded-2xl border border-border bg-bg-elevated/50 px-6 py-10 text-center sm:px-10">
            <h2 className="font-display text-2xl font-bold text-white">
              Ready to put these ideas to work?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-text-muted">
              Talk with CodeNovia about the platforms, AI, and systems that
              match your growth stage.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact" size="lg">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
