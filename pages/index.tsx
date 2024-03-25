import Contacts from '@/components/block1/contacts';
import Examples from '@/components/block1/examples';
import Fifth from '@/components/block1/fifth';
import Fourth from '@/components/block1/fourth';
import Intro from '@/components/block1/intro';
import Reviews from '@/components/block1/reviews';
import Second from '@/components/block1/second';
import Sixths from '@/components/block1/sixths';
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
        <Sixths />
        <Examples />
        <Contacts />
        <Reviews />
      </div>
    </div>
  );
}
