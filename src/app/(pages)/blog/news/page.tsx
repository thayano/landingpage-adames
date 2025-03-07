import { news } from '../_data/data'

export default function News() {
    return (
        <div className='flex justify-center'>
            <div className='max-w-4xl flex flex-col gap-10'>
              <div dangerouslySetInnerHTML={{ __html: news[0].content }} />
            </div>
        </div>
    );
}