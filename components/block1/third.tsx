import { Button, Input, Progress } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function third() {
  return (
    <>
      <div>
        <div className="pl-[16px] pr-[16px]">
          <div className="relative space-y-3 mt-5">
            <h3>
              Рассчитайте <span className="text-cteal ObjectSans-Heavy-No-Color">стоимость</span>{' '}
              имплантации
            </h3>
            <div>
              за 30 секунд, ответив всего на <span className="ObjectSans-Heavy">4 вопроса</span>
            </div>
            <div className="w-full h-[150px] relative count-price">
              <Image
                src={'/img/4_calculate/tooth.png'}
                className="absolute border rounded-xl -py-1"
                objectFit="cover"
                fill
                alt={'phone'}
              />
              <p className="z-10 max-w-[250px]">
                <span className="ObjectSans-Heavy">Ответьте на 4 вопроса</span> и получите расчет
                стоимости имплантации All-on-4, а также скидки и подарки от клиники.
              </p>
            </div>
          </div>
          <div className="w-full space-y-3 mt-7">
            <div className="">
              <Progress size="lg" />
            </div>
            <div className="text-right">0%</div>
            <div className="flex items-center gap-4">
              <div className="bg-cteal py-1 rounded-full px-4 whitespace-nowrap items-center flex justify-center text-white text-[18px] tracking-wide">
                1 / 4
              </div>
              <div>Где вам необходимо восстановить зубной ряд?</div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 flex-row relative h-24 text-[15px] justify-evenly text-center">
          <div className="space-y-10 relative">
            <Image
              src={'/img/4_calculate/step_1.jpg'}
              className="border rounded-lg shadow-medium"
              objectFit="contain"
              height={110}
              width={110}
              alt={'phone'}
            />
            <div>
              <Image
                src={'/img/4_calculate/check1.png'}
                className="absolute -bottom-7 left-[30%]"
                objectFit="contain"
                height={50}
                width={50}
                alt={'phone'}
              />
            </div>
            <div className="leading-5">
              Верхняя<br></br> челюсть
            </div>
          </div>
          <div className="space-y-10 relative">
            {' '}
            <Image
              src={'/img/4_calculate/step_2.jpg'}
              className="border rounded-lg shadow-medium"
              height={110}
              width={110}
              objectFit="contain"
              alt={'phone'}
            />
            <div>
              <Image
                src={'/img/4_calculate/check.png'}
                className="absolute -bottom-7 left-[30%]"
                objectFit="contain"
                height={50}
                width={50}
                alt={'phone'}
              />{' '}
            </div>
            <div className="leading-5">
              Нижняя<br></br> челюсть
            </div>
          </div>
          <div className="space-y-10 relative">
            {' '}
            <Image
              src={'/img/4_calculate/step_3.jpg'}
              className="border rounded-lg shadow-medium"
              height={110}
              width={110}
              objectFit="contain"
              alt={'phone'}
            />
            <div>
              <Image
                src={'/img/4_calculate/check.png'}
                className="absolute -bottom-7 left-[30%]"
                objectFit="contain"
                height={50}
                width={50}
                alt={'phone'}
              />{' '}
            </div>
            <div className="leading-5">
              Обе<br></br> челюсти
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[16px] mt-20 pr-[16px]">
        <Button className="w-full rounded-md bg-cteal text-white tracking-wider text-[16px] my-5">
          Записаться
        </Button>
        <div className="flex items-center justify-center gap-3 text-sm">
          <p className="">
            Выберите верный для Вас ответ и нажмите кнопку{' '}
            <span className="ObjectSans-Heavy">“Следующий вопрос”</span>
          </p>
          <Image
            src={'/img/4_calculate/pointer.png'}
            className="order-1"
            objectFit="contain"
            height={50}
            width={50}
            alt={'pointer'}
          />
        </div>
      </div>
    </>
  );
}
