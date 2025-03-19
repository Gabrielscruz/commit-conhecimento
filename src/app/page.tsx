import BlogMainPost from "@/components/BlogMainPost";
import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Tags } from "@/components/Tags";
import { wisp } from "@/lib/wisp";

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ 
    limit: 6, 
    page, 
    query: searchParams?.search ? String(searchParams.search) : undefined,
    sortBy: "views",  // ou o parâmetro correto para ordenação por acessos
    order: "desc" // para ordenar de forma decrescente (mais acessado primeiro)
  });
  const allTags = await wisp.getTags();
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />

      {result?.posts[0] && <BlogMainPost post={result.posts[0]} />}
      <Tags tags={allTags.tags}/>
      <h1 className="text-2xl font-semibold mt-8">Meus últimos artigos</h1>
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
};

export default Page;
