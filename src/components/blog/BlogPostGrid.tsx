import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import {
  blogPosts,
  formatBlogDate,
  type BlogPost,
} from "@/lib/data/blog";

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.04, 0.28)}>
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-bg-elevated"
      >
        <span
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20"
          aria-hidden
        />
        <div className="relative flex flex-wrap items-center gap-2">
          {post.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-display text-[10px] font-semibold tracking-wider text-accent-bright uppercase"
            >
              {category}
            </span>
          ))}
        </div>
        <h2 className="relative mt-4 font-display text-xl font-semibold leading-snug text-white transition group-hover:text-accent-bright">
          {post.title}
        </h2>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {post.excerpt}
        </p>
        <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-border pt-4 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} className="text-accent-bright" />
            {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-1 font-display font-semibold text-accent-bright">
            {formatBlogDate(post.publishedAt)}
            <ArrowUpRight
              size={14}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function BlogPostGrid() {
  const posts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}
