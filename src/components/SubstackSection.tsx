import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowUpRight } from "lucide-react";

type LatestPost = {
  title: string;
  date: string;
  url: string;
  excerpt: string;
};

const SubstackSection = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const embedRef = useScrollReveal<HTMLDivElement>(200);
  const [post, setPost] = useState<LatestPost | null>(null);

  useEffect(() => {
    const rssUrl = encodeURIComponent("https://producedbykyler.substack.com/feed");
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
      .then((r) => r.json())
      .then((data) => {
        const item = data?.items?.[0];
        if (!item) return;

        const tmp = document.createElement("div");
        tmp.innerHTML = item.description ?? "";
        const excerpt = (tmp.textContent ?? "").slice(0, 140).trim() + "…";

        const date = item.pubDate
          ? new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          : "";

        setPost({ title: item.title, date, url: item.link, excerpt });
      })
      .catch(() => {});
  }, []);

  return (
    <section id="newsletter" className="py-24 px-6 md:px-14">
      <div className="w-full h-px bg-border mb-24" />

      <div className="container mx-auto max-w-5xl">
        <div ref={headingRef} className="reveal flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">Stay Connected</p>
            <h2 className="text-3xl md:text-5xl font-normal text-foreground leading-tight">Newsletter</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs md:text-right">
            My thoughts on life and music...and the occasional anti-AI rant.
          </p>
        </div>

        {/* Latest post card */}
        {post && (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-border/40 hover:border-primary/50 rounded-2xl p-6 md:p-8 mb-8 transition-colors duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-primary text-xs tracking-[0.25em] uppercase mb-3">Latest Post</p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-muted-foreground/50 text-xs">{post.date}</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1"
              />
            </div>
          </a>
        )}

        <div ref={embedRef} className="reveal">
          <a
            href="https://producedbykyler.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Read more on Substack <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubstackSection;
