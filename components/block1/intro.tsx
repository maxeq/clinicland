import { Button } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <div className="h-[354px]">
      <div className="">
        <div className="pt-3">
          Имплантация зубов <span className="font-bold">за 1 день</span>
        </div>
        <h1 className="text-cteal -mt-2 mb-2.5">All-on-4</h1>
      </div>
      <div>
        Имплантация зубов на 4 имплантах - безболезненный способ получить
        <p className="font-bold">новую улыбку, как в молодости.</p>
      </div>
      <Button className="w-full rounded-md bg-cteal text-white tracking-wider text-[16px]  h-[50px] my-5">
        Рассчитать стоимость имплантации
      </Button>
      <div className="flex gap-3 flex-1 items-center">
        <div className="bg-cred h-[32px] rounded-full w-[32px] p-2 opacity-95">
          <Image
            src={'/img/icons/gift.svg'}
            objectFit="contain"
            width={32}
            height={32}
            alt={'phone'}
          />
        </div>
        <div className="font-[350] text-[13px] leading-[17px] flex-1">
          Ответьте на несколько вопросов и<p>получите расчет и подарки от клиники.</p>
        </div>
      </div>
      <div className="relative">
        <div className="h-[347px] w-full relative">
          <Image src={'/img/1_intro/senior-couple.png'} objectFit="contain" fill alt={'phone'} />
          <div className="w-full h-[64px] bottom-0">
            <Image
              src={'/img/1_intro/hr.png'}
              objectFit="contain"
              objectPosition="bottom"
              className="absolute pb-2"
              fill
              alt={'phone'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
