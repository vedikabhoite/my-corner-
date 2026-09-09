import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function ThoughtPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const html = marked.parse(post.content, { async: false }) as string;

  return (
    <main className="site">
      <nav className="nav">
        <Link href="/" className="logo">
          vedika.
        </Link>
        <div className="nav-links">
          <Link href="/#things">things</Link>
          <Link href="/#projects">projects</Link>
          <Link href="/#about">about</Link>
          <Link href="/#contact">contact</Link>
        </div>
      </nav>

      <div className="page-header">
        <Link href="/thoughts" className="back-link">
          ← all thoughts
        </Link>
      </div>

      <article>
        <header className="post-header">
          <p className="eyebrow">{formatDate(post.date)}</p>
          <h1>{post.title}</h1>
        </header>

        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
