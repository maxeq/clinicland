import Intro from '@/components/block1/intro';
import Header from '@/components/header/header';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <div className="mx-[15px]">
      <Header />
      <Intro />
    </div>
  );
}
