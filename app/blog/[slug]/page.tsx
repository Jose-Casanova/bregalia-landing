import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/blog/CallToAction";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

const SITE_URL = "https://bregalia.es";

type Props = {
    params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Bregalia`,
        description: post.description,
        keywords: post.keywords,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `${SITE_URL}/blog/${post.slug}`,
            siteName: "Bregalia",
            locale: "es_ES",
            type: "article",
            publishedTime: post.date,
            modifiedTime: post.updated ?? post.date,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    const articleData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        inLanguage: "es-ES",
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        author: { "@type": "Organization", name: "Bregalia", url: SITE_URL },
        publisher: {
            "@type": "Organization",
            name: "Bregalia",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
        },
    };

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />

            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-32 pb-12 md:pt-36 md:pb-16 max-w-3xl flex-1">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al blog
                </Link>

                <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10">
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight mb-4">
                            {post.title}
                        </h1>
                        <p className="text-sm text-slate-500">
                            Publicado el {formatDate(post.date)}
                            {post.updated && post.updated !== post.date && (
                                <> · Actualizado el {formatDate(post.updated)}</>
                            )}
                        </p>
                    </header>

                    <div className="prose prose-slate max-w-none prose-headings:font-heading prose-a:text-primary">
                        <MDXRemote
                            source={post.content}
                            components={{ CallToAction }}
                            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                        />
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
