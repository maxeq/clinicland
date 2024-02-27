import { Button, Input } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <div className="h-[354px]">
      <div className="">
        <div className="pt-3">
          Имплантация зубов <span className="font-extrabold">за 1 день</span>
        </div>
        <h1 className="text-cteal -mt-2 mb-2.5">All-on-4</h1>
      </div>
      <div className="line26">
        Имплантация зубов на 4 имплантах - безболезненный способ получить
        <p className="font-extrabold">новую улыбку, как в молодости.</p>
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
              className="absolute xs:pb-2 xr:pb-0"
              fill
              alt={'phone'}
            />
          </div>
        </div>
      </div>
      <div className="space-y-[24px]">
        <h2>
          Что такое имплантация <span className="text-cteal">All-on-4</span>?
        </h2>
        <p className="line26">
          Протез устанавливается не на опорные зубы (которых при полной адентии нет), а на{' '}
          <span className="font-extrabold">предварительно вживленные 4 импланта.</span> Импланты
          устанавливаются в кость челюсти в заранее определенные участки, и затем на имплантах
          фиксируется зубной протез.
        </p>
        <div className="h-[290px] w-full relative">
          <Image src={'/img/2_what-is/jaw.png'} objectFit="contain" fill alt={'phone'} />
        </div>
        <p className="line26">
          Имплант имеет сложное строение, включающее 
          <span className="font-extrabold">три базовых элемента:</span>
        </p>
        <div className="three-basis">
          <div className="one-of-elements">
            <div className="relative justify-center flex items-center ml-5">
              <div className="point-one-out-of-three"></div>
              <div className="pint-inside-one"></div>
              <div className="point items-center justify-center">1</div>
            </div>
            <div className="ml-5">
              <p className="font-extrabold leading-[16px]">Корень из титана,</p>
              <p>оснащенный винтовой резьбой</p>
            </div>
          </div>
          <div className="one-of-elements">
            <div className="relative justify-center flex items-center ml-5">
              <div className="point-one-out-of-three"></div>
              <div className="pint-inside-one"></div>
              <div className="point items-center justify-center">1</div>
            </div>
            <div className="ml-5">
              <p className="font-extrabold leading-[16px]">Абатмент – часть, которая</p>
              <p>соединяет коронку и имплант</p>
            </div>
          </div>
          <div className="one-of-elements">
            <div className="relative justify-center flex items-center ml-5">
              <div className="point-one-out-of-three"></div>
              <div className="pint-inside-one"></div>
              <div className="point items-center justify-center">1</div>
            </div>
            <div className="ml-5 leading-[20px]">
              <p>
                <span className="font-extrabold">Коронку </span>– наружную часть зуба,
              </p>
              <p>которая выполняет эстетическую и жевательную функции</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[496px] relative">
        <Image
          src={'/img/2_what-is/background.jpg'}
          objectFit="cover"
          sizes="(max-width: 480px) 480px, 800px"
          objectPosition="left"
          className="-z-[1] absolute bg-no-repeat"
          fill
          alt={'phone'}
        />
        <div className="-mx-5 my-8 h-[496px] subscribe-consultation bg-black px-4 py-6">
          <div className="h-[496px] w-full relative space-y-4">
            <h3>
              Запишитесь на{' '}
              <span className="text-cteal">
                <br></br>бесплатную
              </span>{' '}
              консультацию
            </h3>
            <p className="text-[18px]">
              или позвоните нам и мы{' '}
              <span className="font-extrabold">ответим на все ваши вопросы</span>
            </p>
            <div>
              <h2>+7 (861) 298 - 46 - 75</h2>
              <p className="text-black/75">ПН - ВС 9:00 - 21:00</p>
            </div>
            <p className="line26 text-[18px]">
              Проанализируем состояние зубов и <span className="font-extrabold">расскажем</span>{' '}
              подходит ли вам имплантация All-on-4 или
              <span className="font-extrabold"> предложим альтернативный вариант.</span>
            </p>
            <div className="flex h-[50px]">
              <Input className="border rounded" label="Номер телефона">
                Номер телефона
              </Input>
              <button className="button1 text-white h-full">Записаться</button>
            </div>
            <div className="small-text">
              Нажимая кнопку “Записаться” вы соглашаетесь на обработку персональных данных.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
