import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  const posts = [
    {
      id: "future-treble-winners",
      title: "The Philosophy of Poker",
      excerpt: "What a card game reveals about life, trust, and human nature.",
      date: "2025-12-25",
      readingTime: "8 min read",
    },
    {
      id: "goat-takes",
      title: "My GOAT Takes",
      excerpt: "For each sport, I'm naming my favorite player and my preference for the GOAT of each sport.",
      date: "2025-12-25",
      readingTime: "6 min read",
    },
    {
      id: "mental-health-job-search",
      title: "Navigating Life",
      excerpt: "Life things I get asked a lot, and probably will continue to get asked about",
      date: "2025-12-25",
      readingTime: "6 min read",
    },
    {
      id: "ideal-superhero",
      title: "The Ideal Superhero",
      excerpt: "Exploring the defining traits of iconic superhero figures and what they teach us about character.",
      date: "2025-12-25",
      readingTime: "7 min read",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">my_interests.ls</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> ls -fav /interests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
