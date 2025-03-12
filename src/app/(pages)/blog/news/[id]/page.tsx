
import { Title } from '@/components/shared/Title'
import { news } from '../../_data/data'
import Image from 'next/image'

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const post_id = (await params).id
    const content = news.find((post) => post.id == Number(post_id))

    if (!content) {
        return <div>Post não encontrado.</div>
    }

    return (
        <div className="grid grid-cols-1 mx-auto md:w-2/4 gap-6 md:mt-40 mt-20">
            <Title text={content.title} className="md:text-4xl text-lg" />
            <section className="flex flex-col items-center">
                <Image
                    src={content.image}
                    unoptimized={true}
                    width={800}
                    height={800}
                    alt="image"
                    className="rounded-2xl py-10"
                />
            </section>
            <article className='flex flex-col justify-center items-center'>
                <div dangerouslySetInnerHTML={{ __html: content.content }} className='text-justify'></div>
            </article>
            <div className="flex items-center justify-between md:py-4 mt-2">
                <div className="text-xs text-muted-foreground">
                    Atualizado: <span className="">data</span>
                </div>
                <div>

                </div>
            </div>
            <div className="border-b"></div>
            <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-10">

            </section>

        </div >
    )
}