import Image from "next/image";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import { projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";

export default function Home() {
  const latestThoughts = getAllPosts().slice(0, 3);

  return (
    <main className="site">

      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="logo">
          vedika.
        </Link>

        <div className="nav-links">
          <a href="#thoughts">thoughts</a>
          <a href="#things">things</a>
          <a href="#projects">projects</a>
          <a href="#about">about</a>
          <a href="#now">now</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-note pink-note">
          ✦ a little corner of the internet
        </div>

        <div className="hero-content">

          {/* Hero text */}
          <div>
            <p className="eyebrow">
              hello, hello — 2026
            </p>

            <h1>
              hi, i&apos;m
              <br />
              <span>vedika.</span>
            </h1>

            <p className="intro">
              A place for my thoughts, ideas, little obsessions,
              things I&apos;m learning, places I&apos;ve been,
              and everything in between.
            </p>

            <a href="#thoughts" className="wander">
              wander around <span>↓</span>
            </a>
          </div>

          {/* Scrapbook photo */}
          <div className="photo-scrap">

            <div className="tape"></div>

            <Image
              src="/images/vinvietnam.jpeg"
              alt="A little moment from Vietnam"
              width={320}
              height={400}
              className="scrap-photo"
              priority
            />

            <p className="photo-caption">
              vietnam, 2026
              <br />
              <span>one of those little moments.</span>
            </p>

            <div className="photo-star">
              ✦
            </div>

          </div>

        </div>

        <div className="page-number">
          01 / 08
        </div>

      </section>

      {/* Thoughts */}
      <section
        id="thoughts"
        className="section thoughts-section"
      >

        <Reveal>
          <div className="section-heading">

            <div>
              <p className="eyebrow">
                01 — thoughts
              </p>

              <h2>
                things i&apos;ve been
                <br />
                thinking about.
              </h2>
            </div>

            <span className="side-note">
              little pieces of my brain,
              <br />
              archived here.
            </span>

          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="thought-list">

            {latestThoughts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/thoughts/${post.slug}`}
                className={`thought ${i % 2 === 1 ? "blue-row" : ""}`}
              >
                <div className="thought-date">
                  {formatDate(post.date)}
                </div>

                <div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>

                <span className="arrow">
                  ↗
                </span>
              </Link>
            ))}

          </div>

          <Link href="/thoughts" className="thoughts-cta">
            see all thoughts <span>→</span>
          </Link>
        </Reveal>

      </section>

      {/* Things */}
      <section
        id="things"
        className="section things-section"
      >

        <Reveal>
          <div className="section-heading">

            <div>
              <p className="eyebrow">
                02 — things
              </p>

              <h2>
                things i like.
              </h2>
            </div>

            <span className="side-note">
              currently collecting
              <br />
              little joys.
            </span>

          </div>
        </Reveal>

        <div className="things-grid">

          <Reveal delay={0}>
            <div className="scrap-card pink-card">
              <span>01</span>
              <h3>places</h3>
              <p>
                cities, cafés, airports, long drives,
                and places I&apos;d happily get lost in.
              </p>
              <div className="card-doodle">♡</div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="scrap-card blue-card">
              <span>02</span>
              <h3>books &amp; words</h3>
              <p>
                things I read, quotes I save,
                and sentences that stay with me.
              </p>
              <div className="card-doodle">✦</div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="scrap-card cream-card">
              <span>03</span>
              <h3>music</h3>
              <p>
                songs for specific moods,
                specific memories, and specific days.
              </p>
              <div className="card-doodle">♪</div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="scrap-card blue-card">
              <span>04</span>
              <h3>random things</h3>
              <p>
                whatever I&apos;m currently obsessed with.
                This list changes a lot.
              </p>
              <div className="card-doodle">→</div>
            </div>
          </Reveal>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="section projects-section"
      >

        <Reveal>
          <div className="section-heading">

            <div>
              <p className="eyebrow">
                03 — projects
              </p>

              <h2>
                things i&apos;ve
                <br />
                built.
              </h2>
            </div>

            <span className="side-note">
              a few things i&apos;m
              <br />
              proud of making.
            </span>

          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    view project ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="section about-section"
      >

        <div className="about-sticker">

          <span>
            hello!
          </span>

          <small>
            nice to meet you
          </small>

        </div>

        <Reveal className="about-content">

          <p className="eyebrow">
            04 — about
          </p>

          <h2>
            so, who
            <br />
            am i?
          </h2>

          <p className="about-text">
            I&apos;m Vedika — a computer science student,
            occasional overthinker, curious person, and someone
            who likes collecting experiences, ideas and random
            little things.
          </p>

          <p className="about-text">
            This website is basically a place to put all of that.
            No particular purpose. No perfect version of me.
            Just a little space to exist and make things.
          </p>

        </Reveal>

        <div className="margin-note">

          <span>
            p.s.
          </span>

          <br />

          you made it this far :)

        </div>

      </section>

      {/* Now */}
      <section
        id="now"
        className="section now-section"
      >

        <Reveal>
          <div className="section-heading">

            <div>

              <p className="eyebrow">
                05 — now
              </p>

              <h2>
                these days.
              </h2>

            </div>

            <span className="date-stamp">
              AUGUST
              <br />
              2026
            </span>

          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="now-grid">

            <div>
              <span>learning</span>
              <strong>AI · ML · Data</strong>
            </div>

            <div>
              <span>building</span>
              <strong>this little website</strong>
            </div>

            <div>
              <span>thinking about</span>
              <strong>what comes next</strong>
            </div>

            <div>
              <span>mood</span>
              <strong>figuring things out ☕</strong>
            </div>

          </div>
        </Reveal>

        <div className="now-bottom">

          <span>
            currently somewhere between
          </span>

          <em>
            “I have a plan”
          </em>

          <span>
            and
          </span>

          <em>
            “let&apos;s see what happens.”
          </em>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="section contact-section"
      >

        <Reveal className="contact-heading">
          <p className="eyebrow">
            06 — contact
          </p>

          <h2>
            say hi.
          </h2>

          <p className="contact-text">
            No forms, no gatekeeping — just reach out if you
            want to talk, collaborate, or say hello.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-links">
            <a href="mailto:hello@vedikabhoite.com" className="contact-link">
              ✉ hello@vedikabhoite.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              ↗ github
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              ↗ linkedin
            </a>
          </div>
        </Reveal>

      </section>

      {/* Footer */}
      <footer className="footer">

        <div>

          <strong>
            vedika.
          </strong>

          <span>
            made with curiosity &amp; too much coffee.
          </span>

        </div>

        <div className="footer-right">

          <span>
            ✦
          </span>

          <span>
            page 08
          </span>

        </div>

      </footer>

    </main>
  );
}
