import { Button, Input, Progress } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function Sixths() {
  return (
    <>
      <div className="pl-[16px] pr-[16px] space-y-4 my-10">
        <div>
          <h2 className="">
            Кому <span className="text-cteal ObjectSans-Heavy-No-Color">подходит?</span>
          </h2>
          <p className="py-4">
            All-on-4 — рациональный выбор пациентов{' '}
            <span className="ObjectSans-Heavy">как с полной адентией, так и частичной.</span> Первые
            устали от съемных протезов, вторые — измучены лечением последних оставшихся во рту зубов
            и желают никогда больше не знать зубной боли. Концепция решает накопившиеся проблемы
            пациента <span className="ObjectSans-Heavy">радикально, раз и навсегда.</span>
          </p>
        </div>
        <div className="border-1.5 rounded-lg p-5 shadow-lg">
          <div className="flex justify-center">
            <Image
              src={'/img/6_for-who/element_1.jpg'}
              height={160}
              width={201}
              quality={100}
              alt={''}
              className="shadow-none border-none justify-center flex w-full max-w-[336px]"
            />
          </div>
          <div className="ObjectSans-Heavy text-[18px] pb-4">Отсутствуют все зубы</div>
          <p className="text-[14px]">
            Замена съемного протеза на конструкцию без нёба с фиксацией на имплантатах улучшает
            качество жизни. Ощущается как свои собственные зубы, возвращает полные вкусовые
            ощущения, не нарушает дикцию.
          </p>
        </div>
        <div className="border-1.5 rounded-lg p-5 shadow-lg">
          <div className="flex justify-center">
            <Image
              src={'/img/6_for-who/element_2.jpg'}
              height={160}
              width={201}
              quality={100}
              alt={''}
              className="shadow-none border-none justify-center flex w-full max-w-[336px]"
            />
          </div>
          <div className="ObjectSans-Heavy text-[18px] pb-4">Нет большей части зубов</div>
          <p className="text-[14px]">
            All-on-4 при частичном отсутствии зубов проводится с одновременным удалением всех
            несостоятельных безнадежных зубов. Импланты могут быть установлены в лунки удаленных
            зубов.
          </p>
        </div>
        <div className="border-1.5 rounded-lg p-5 shadow-lg">
          <div className="flex justify-center">
            <Image
              src={'/img/6_for-who/element_3.jpg'}
              height={160}
              width={201}
              quality={100}
              alt={''}
              className="shadow-none border-none justify-center flex w-full max-w-[336px]"
            />
          </div>
          <div className="ObjectSans-Heavy text-[18px] pb-4">Зубы шатаются и выпадают</div>
          <p className="text-[14px]">
            Запущенный пародонтоз и пародонтит приводит к повышенной подвижности зубов и
            стремительной потере зубов. Имплантация в таких случаях — отличный способ избавиться от
            болезни десен.
          </p>
        </div>
      </div>
    </>
  );
}
