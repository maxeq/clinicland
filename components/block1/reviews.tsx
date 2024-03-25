import { Button, Input, Progress } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function Reviews() {
  return (
    <>
      <div className="mt-44 pl-[16px] pr-[16px]">
        <h2 className="space-y-4">
          Здоровые зубы и <br></br>
          <span className="text-cteal ObjectSans-Heavy-No-Color"> отзывы</span> наших<br></br>{' '}
          пациентов{' '}
        </h2>
        <div className="mt-3">
          <span className="ObjectSans-Heavy">До и После</span> имплантации All-on-4
        </div>
        <div className="p-6 rounded-lg text-[18px] border-1.5 mt-8 shadow-lg">
          За прошедший год мы провели <br></br>
          <span className="ObjectSans-Heavy">более 2 000 операций.</span>
        </div>
        <div className="mt-4">
          <div className="flex flex-row justify-between">
            <div className="rounded-full border-2">
              <Image
                src={'/img/reviews/11.png'}
                objectFit="contain"
                width={110}
                quality={100}
                height={110}
                alt={'phone'}
              />
            </div>
            <div className="rounded-full border-2">
              {' '}
              <Image
                src={'/img/reviews/12.png'}
                objectFit="contain"
                width={110}
                quality={100}
                height={110}
                alt={'phone'}
              />
            </div>
            <div className="rounded-full border-2">
              {' '}
              <Image
                src={'/img/reviews/13.png'}
                objectFit="contain"
                width={110}
                quality={100}
                height={110}
                alt={'phone'}
              />
            </div>
          </div>
          <div className="flex justify-center items-end h-[346.08px] -mt-7">
            <Image
              src={'/img/reviews/1.png'}
              className="z-10 flex max-h-[307px] justify-end items-end"
              objectPosition="bottom"
              objectFit="contain"
              width={374}
              quality={100}
              height={307}
              alt={'phone'}
            />

            <Image
              src={'/img/reviews/background.png'}
              className="absolute"
              width={265.3}
              quality={100}
              height={300.08}
              alt={'phone'}
            />
          </div>
          <div className="p-6 rounded-lg text-[18px] border-1.5 shadow-lg">
            <div className="ObjectSans-Heavy text-black">Сергей</div>
            <div className="text-black/50 text-[14px] pt-1">66 лет</div>
            <div className="flex flex-row justify-around pt-2.5 pb-4">
              <div className="">
                {' '}
                <Image
                  src={'/img/reviews/rew1.png'}
                  width={120}
                  quality={100}
                  height={80}
                  alt={'phone'}
                />
              </div>{' '}
              <div>
                {' '}
                <Image
                  src={'/img/reviews/rew2.png'}
                  width={120}
                  quality={100}
                  height={80}
                  alt={'phone'}
                />
              </div>
            </div>{' '}
            <hr></hr>
            <div className="text-[16px] pt-4">
              Попал в клинику по рекомендации знакомых. Сразу бросается в глаза современная, чистая,
              уютная обстановка клиники, очень доброжелательный персонал! Профессионал с большой
              буквы! Доходчиво объясняет, грамотно и качественно устанавливает импланты. Жену
              планирую привести на имплантацию тоже сюда. От души благодарен вам!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
