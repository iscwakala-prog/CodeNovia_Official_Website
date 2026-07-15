type Block =
  | { type: "h1" | "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push({ type: "p", text: paragraph.join(" ").trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push({ type: "ul", items: listItems });
    listItems = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h1", text: trimmed.slice(2).trim() });
      continue;
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2).trim());
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function BlogContent({ markdown }: { markdown: string }) {
  const blocks = parseMarkdown(markdown);

  return (
    <div className="blog-prose space-y-5">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "h1") {
          return (
            <h1
              key={key}
              className="font-display text-3xl font-bold tracking-tight text-white"
            >
              {block.text}
            </h1>
          );
        }

        if (block.type === "h2") {
          return (
            <h2
              key={key}
              className="pt-4 font-display text-2xl font-bold tracking-tight text-white"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={key}
              className="pt-2 font-display text-xl font-semibold text-accent-bright"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={key}
              className="list-disc space-y-2 pl-5 text-base leading-relaxed text-text-muted marker:text-accent-bright"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={key}
            className="text-base leading-relaxed text-text-muted sm:text-[1.05rem]"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
