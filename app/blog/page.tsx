import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Latest posts and notes.",
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-12 font-mono text-green-400">
        <h1 className="text-3xl mb-8 border-b border-green-600 pb-2">
          BLOG.DIR
        </h1>
        <div className="pb-4">
          <Link
            href={"/"}
            className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
          >
            HOME
          </Link>
        </div>
        {posts.length === 0 ? (
          <p className="text-sm opacity-70">no posts found</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group border border-green-700 rounded-md p-4 bg-black hover:bg-green-900/20 transition">
                  <div className="flex items-center gap-3 text-xs text-green-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </time>
                    {post.tags && post.tags.length > 0 && (
                      <span>[{post.tags.join(", ")}]</span>
                    )}
                  </div>
                  <h2 className="text-xl text-green-300 group-hover:underline mt-2">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-green-400/80">{post.description}</p>
                  )}
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
