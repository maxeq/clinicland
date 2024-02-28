import Intro from '@/components/block1/intro';
import Second from '@/components/block1/second';
import Header from '@/components/header/header';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <div className="">
      <div className="pl-[16px] pr-[16px]">
        <Header />
        <Intro />
      </div>
      <section className="">
        <Second />
      </section>
    </div>
  );
}
