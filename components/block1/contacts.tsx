import { Button, Input, Progress } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function Contacts() {
  return (
    <>
      <div className="pl-[16px] pr-[16px] space-y-4 my-5">
        {' '}
        <h3>
          Итого <span className="text-cteal ObjectSans-Heavy-No-Color">за полный ряд зубов </span>{' '}
          по технологии All-on-4{' '}
          <span className="text-cteal ObjectSans-Heavy-No-Color">от 110 000 р.</span>
        </h3>
        <div>
          <div>Оставьте заявку или позвоните нам и мы ответим на все ваши вопросы</div>
          <div className="text-[24px] ObjectSans-Heavy pt-4">+7 (861) 298 - 46 - 75</div>
          <div className="flex flex-row gap-3 text-black/70">
            <div>ПН - ВС </div>
            <div>9:00 - 21:00</div>
          </div>
        </div>
        <div className="py-3">
          <div className="flex h-[50px] relative">
            <Input className="" label="Номер телефона">
              Номер телефона
            </Input>
            <button className="button1 text-white h-full">Записаться</button>
            <div className="text-red-500 absolute -left-[4px] bottom-[16.5%]">*</div>
          </div>
          <div className="small-text pt-3">
            Нажимая кнопку “Записаться” вы соглашаетесь на обработку персональных данных.
          </div>
        </div>
        <h2>
          Команда <span className="text-cteal ObjectSans-Heavy-No-Color ">специалистов</span>
        </h2>{' '}
        <div>
          <div>
            <div className="flex justify-center relative z-10">
              <Image
                src="/img/13_doctors/background_1.png"
                className="z-10 absolute"
                alt={''}
                width={332}
                height={240}
              />
              <Image
                src="/img/13_doctors/1.png"
                className="z-20"
                alt={''}
                quality={100}
                width={282}
                height={240}
              />
            </div>
            <div className="relative">
              <div className="rounded-lg border-1.5 bg-white p-6 z-40 absolute w-full">
                <div className="text-[14px] text-black/50">Главный врач</div>
                <div className="text-cteal ObjectSans-Heavy-No-Color text-[18px]">Ананьев</div>
                <div className="ObjectSans-Heavy text-[18px]">Артем Каренович</div>
                <div className="text-[14px] text-black/50">
                  Стаж: <span className="text-black">4+ года</span>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
        {/* <---------> */}
        <div className="pt-36">
          <div className="flex justify-center relative z-10">
            <Image
              src="/img/13_doctors/background_2.png"
              className="z-10 absolute"
              alt={''}
              width={232}
              height={240}
            />
            <Image
              src="/img/13_doctors/2.png"
              quality={100}
              className="z-20"
              alt={''}
              width={282}
              height={240}
            />
          </div>
          <div className="relative">
            <div className="rounded-lg border-1.5 bg-white p-6 z-40 absolute w-full">
              <div className="text-[14px] text-black/50">Стоматлого-терапевт</div>
              <div className="text-cteal ObjectSans-Heavy-No-Color text-[18px]">Мельник</div>
              <div className="ObjectSans-Heavy text-[18px]">Юлия Александровна</div>
              <div className="text-[14px] text-black/50">
                Стаж: <span className="text-black">7+ лет</span>
              </div>
            </div>
          </div>
        </div>
        {/* <---------> */}
        <div className="pt-36">
          <div className="flex justify-center relative z-10">
            <Image
              src="/img/13_doctors/background_3.png"
              className="z-10 absolute"
              alt={''}
              width={232}
              height={240}
            />
            <Image
              src="/img/13_doctors/3.png"
              quality={100}
              className="z-20"
              alt={''}
              width={282}
              height={240}
            />
          </div>
          <div className="relative">
            <div className="rounded-lg border-1.5 bg-white p-6 z-40 absolute w-full">
              <div className="text-[14px] text-black/50">Стоматлого-ортопед</div>
              <div className="text-cteal ObjectSans-Heavy-No-Color text-[18px]">Островерхов</div>
              <div className="ObjectSans-Heavy text-[18px]">Семён Вячеславович</div>
              <div className="text-[14px] text-black/50">
                Стаж: <span className="text-black">4+ года</span>
              </div>
            </div>
          </div>
        </div>
        {/* <---------> */}
        <div className="pt-36">
          <div className="flex justify-center relative z-10">
            <Image
              src="/img/13_doctors/background_4.png"
              className="z-10 absolute"
              alt={''}
              width={232}
              height={240}
            />
            <Image
              src="/img/13_doctors/4.png"
              quality={100}
              className="z-20"
              alt={''}
              width={282}
              height={240}
            />
          </div>
          <div className="relative">
            <div className="rounded-lg border-1.5 bg-white p-6 z-40 absolute w-full">
              <div className="text-[14px] text-black/50">Хирург-пародонтолог</div>
              <div className="text-cteal ObjectSans-Heavy-No-Color text-[18px]">Бадалян</div>
              <div className="ObjectSans-Heavy text-[18px]">Лиана Саркисовна</div>
              <div className="text-[14px] text-black/50">
                Стаж: <span className="text-black">19+ лет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
