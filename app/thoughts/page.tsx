import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "thoughts",
  description: "Little pieces of my brain, archived here.",
};

export default function ThoughtsIndex() {
  const posts = getAllPosts();

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

      <section className="section thoughts-section" style={{ borderTop: "none" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">all thoughts</p>
            <h2>
              everything
              <br />
              i&apos;ve written.
            </h2>
          </div>
          <span className="side-note">
            {posts.length} {posts.length === 1 ? "entry" : "entries"} so far.
          </span>
        </div>

        <div className="thought-list">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/thoughts/${post.slug}`}
              className={`thought ${i % 2 === 1 ? "blue-row" : ""}`}
            >
              <div className="thought-date">{formatDate(post.date)}</div>
              <div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <span className="arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
