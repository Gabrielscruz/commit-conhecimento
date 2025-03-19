import Image from "next/image";
import Link from "next/link";

export default function BlogMainPost({ post }: any) {
    return (
        <Link href={`/blog/${post.slug}`}>
        <main className="flex flex-row w-full h-fit border-2 bg-base-200  rounded-md mb-4 p-4 max-md:flex-col-reverse">
            <div className="flex flex-col w-full justify-around p-8">
                <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
                    {post.title}
                </h2>
                <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
                    {post.description}
                </div>

                <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
                    {Intl.DateTimeFormat("pt-BR", {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }).format(
                        new Date(post.publishedAt || post.updatedAt,)
                    )}
                </div>

            </div>
            <Image
                alt={post.title}
                height={300}
                width={450}
                className="rounded-lg bg-cover"
                src={post.image || "/images/placeholder.webp"}
            />
        </main>
        </Link >
    )
}