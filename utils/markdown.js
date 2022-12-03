import rehypePrism from "rehype-prism";
import html from "rehype-stringify";
import gfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype)
    .use(rehypePrism, { plugins: ["line-numbers"] })
    .use(html)
    .process(markdown);
  return result.toString().replace(/@@baseUrl@@/g, process.env.baseUrl || "");
}
