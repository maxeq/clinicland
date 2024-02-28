import { Input } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function second() {
  return (
    <div>
      <div className="relative bg-color1 subscribe-consultation h-[500px]">
        <Image
          src={'/img/2_what-is/background.jpg'}
          objectFit="cover"
          objectPosition="left"
          className="-z-[1] "
          fill
          alt={'phone'}
        />
        <div className="relative pl-[16px] pr-[16px]">
          <div className="my-8 pt-7">
            <div className=" w-full relative space-y-4">
              <h3>
                Запишитесь на{' '}
                <span className="text-cteal ObjectSans-Heavy-No-Color">
                  <br></br>бесплатную
                </span>{' '}
                консультацию
              </h3>
              <p className="">
                или позвоните нам и мы{' '}
                <span className="ObjectSans-Heavy">ответим на все ваши вопросы</span>
              </p>
              <div>
                <h2>+7 (861) 298 - 46 - 75</h2>
                <p className="tracking-wide">ПН - ВС 9:00 - 21:00</p>
              </div>
              <p className="line26">
                Проанализируем состояние зубов и{' '}
                <span className="ObjectSans-Heavy text-black">расскажем</span> подходит ли вам
                имплантация All-on-4 или
                <span className="ObjectSans-Heavy"> предложим альтернативный вариант.</span>
              </p>
              <div className="py-8">
                <div className="flex h-[50px]">
                  <Input className="border rounded" label="Номер телефона">
                    Номер телефона
                  </Input>
                  <button className="button1 text-white h-full">Записаться</button>
                  <div className="text-red-500 absolute -left-[4px] bottom-[16.5%]">*</div>
                </div>
                <div className="small-text pt-3">
                  Нажимая кнопку “Записаться” вы соглашаетесь на обработку персональных данных.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="bg-teal-50/30">
            <div>
              <div className="advantages pl-[16px] pr-[16px] py-6">
                <div className="space-y-4 text-[16px] leading-[25px]">
                  <h2>
                    Преимущества{' '}
                    <span className="text-cteal ObjectSans-Heavy-No-Color">All-on-4</span>
                  </h2>
                  <p>
                    На сегодняшний день методика All on 4 –{' '}
                    <span className="ObjectSans-Heavy">
                      оптимальное, максимально быстрое и при этом эстетичное решение
                    </span>{' '}
                    для людей, которые полностью лишились зубов, и для тех, кому по тем или иным
                    причинам предстоит тотальное удаление.
                  </p>
                </div>
                <div className="advantage-box">
                  <div className="flex">
                    <h4>
                      <span className="text-cteal ObjectSans-Heavy-No-Color">Эстетичный</span>{' '}
                      внешний вид и{' '}
                      <span className="text-cteal ObjectSans-Heavy-No-Color">долгий</span> срок
                      службы
                    </h4>
                    <div className="">
                      {' '}
                      <Image
                        src={'/img/icons/advantage_1.svg'}
                        objectFit="contain"
                        className="pb-1"
                        width={45}
                        height={45}
                        alt={'phone'}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px]">
                      Визуально имплантаты не отличаются от натуральных зубов, что придает улыбке
                      естественность и привлекательность.
                    </p>
                    <p className="text-[14px]">
                      Срок службы качественных изделий — не менее 50 лет.
                    </p>
                  </div>
                </div>
                <div className="advantage-box">
                  <div className="flex">
                    <h4>
                      <span className="text-cteal ObjectSans-Heavy-No-Color">Эстетичный</span>{' '}
                      внешний вид и{' '}
                      <span className="text-cteal ObjectSans-Heavy-No-Color">долгий</span> срок
                      службы
                    </h4>
                    <div className="">
                      {' '}
                      <Image
                        src={'/img/icons/advantage_1.svg'}
                        objectFit="contain"
                        className="pb-1"
                        width={45}
                        height={45}
                        alt={'phone'}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px]">
                      Визуально имплантаты не отличаются от натуральных зубов, что придает улыбке
                      естественность и привлекательность.
                    </p>
                    <p className="text-[14px]">
                      Срок службы качественных изделий — не менее 50 лет.
                    </p>
                  </div>
                </div>
                <div className="advantage-box">
                  <div className="flex">
                    <h4>
                      <span className="text-cteal ObjectSans-Heavy-No-Color">Эстетичный</span>{' '}
                      внешний вид и{' '}
                      <span className="text-cteal ObjectSans-Heavy-No-Color">долгий</span> срок
                      службы
                    </h4>
                    <div className="">
                      {' '}
                      <Image
                        src={'/img/icons/advantage_1.svg'}
                        objectFit="contain"
                        className="pb-1"
                        width={45}
                        height={45}
                        alt={'phone'}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px]">
                      Визуально имплантаты не отличаются от натуральных зубов, что придает улыбке
                      естественность и привлекательность.
                    </p>
                    <p className="text-[14px]">
                      Срок службы качественных изделий — не менее 50 лет.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
