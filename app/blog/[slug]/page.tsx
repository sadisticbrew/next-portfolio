import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { MDXComponents } from "@/components/MDXComponents";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  } as const;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="bg-gray-900 min-h-screen">
    <main className="max-w-3xl mx-auto px-4 py-12 font-mono text-green-400 bg-gray-900">
      <article>
        <header className="mb-8 border-b border-green-600 pb-4">
          <h1 className="text-3xl text-green-300">{post.title}</h1>
          <time
            className="block text-xs text-green-500 mt-2"
            dateTime={post.date}
          >
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </time>
          {post.description && (
            <p className="mt-3 text-green-400/80">{post.description}</p>
          )}
        </header>

        <div className="prose prose-invert prose-pre:bg-black prose-pre:border prose-pre:border-green-700 prose-headings:text-green-300 prose-p:text-green-400">
          <MDXRemote
            source={post.content}
            components={MDXComponents as any}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
                format: "mdx",
              },
            }}
          />
        </div>
      </article>
    </main>
    </div>
  );
}
