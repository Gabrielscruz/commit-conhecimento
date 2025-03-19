import Link from "next/link"

interface TagProps {
    id: string
    name: string
    description: string | null,
}
interface TagsProps {
    tags: TagProps[]
}
export function Tags({
    tags
}: TagsProps) {

    return (
        <div>
            {tags.map((tag) => {
                return (
                    <div key={tag.id} className="mr-2 inline-block">
                        <Link href={`/tag/${tag.name}`} style={{
                            background: "linear-gradient(to right, #5569E4, #c492ee)",
                        }} className=" rounded-md px-4 py-2 font-semibold">{tag.name.toLocaleLowerCase()}</Link>
                    </div>
                )
            })}
        </div>
    )
}