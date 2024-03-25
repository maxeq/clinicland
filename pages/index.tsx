import Fifth from '@/components/block1/fifth';
import Fourth from '@/components/block1/fourth';
import Intro from '@/components/block1/intro';
import Second from '@/components/block1/second';
import Third from '@/components/block1/third';
import Header from '@/components/header/header';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <div className="">
      <div className="pl-[16px] pr-[16px]">
        <Header />
        <Intro />
      </div>
      <Second />
      <div>
        <Third />
        <Fourth />
      </div>
      <div>
        <Fifth />
      </div>
    </div>
  );
}
