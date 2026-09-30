import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
    slug: string;
    title: string;
    description: string;
    date: string;
    updated?: string;
    keywords?: string[];
};

export type Post = PostMeta & { content: string };

function readPost(fileName: string): Post {
    const slug = fileName.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        updated: data.updated,
        keywords: data.keywords,
        content,
    };
}

export function getAllPosts(): PostMeta[] {
    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { content, ...meta } = readPost(file);
            return meta;
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
    const fileName = `${slug}.mdx`;
    if (!fs.existsSync(path.join(BLOG_DIR, fileName))) return undefined;
    return readPost(fileName);
}

export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}
