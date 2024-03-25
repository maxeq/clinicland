import { Button, Input, Progress } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function fourth() {
  return (
    <>
      <div>
        <div className="pl-[16px] pr-[16px] space-y-4 my-10">
          <div>Успешно практикует технику</div>
          <h2 className="h1">
            All-on-4 <span className="text-cteal ObjectSans-Heavy-No-Color">с 2010 года</span>
          </h2>
          <div>
            Наши врачи - это{' '}
            <span className="ObjectSans-Heavy-No-Color">
              кандидаты медицинских наук и соискатели ученой степени
            </span>
            , прошедшие обучение и каждый день практикующие операции по имплантации.
          </div>
          <div className="space-y-2 mx-8">
            <div className="flex flex-row items-center gap-4">
              <Image src="/img/icons/sign.svg" alt={''} width={18} height={13} />
              <div>
                <span className="ObjectSans-Heavy">Революционные методы</span> восстановления зубов
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image src="/img/icons/sign.svg" alt={''} width={18} height={13} />
              <div>
                <span className="ObjectSans-Heavy">Цифровые технологии</span> - предсказуемое
                лечение
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <Button className="w-full rounded-m border-2 border-cteal bg-white text-black tracking-wider h-[55px] text-[16px] my-3">
              Бесплатная консультация
            </Button>
            <Button className="w-full rounded-md bg-cteal text-white tracking-wider h-[55px] text-[16px] my-3">
              Записаться
            </Button>
          </div>
          <div className="flex items-center gap-5">
            <Image src="/img/icons/bell.svg" alt={''} width={48} height={49} />
            <div className="text-[14px]">
              Мы подбираем подходящий именно для Вас способ имплантации, основываясь на результатах
              компьютерной томографии.
            </div>
          </div>
          <div className="border-[1.5px] space-y-2 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h4>Полный цифровой контроль</h4>
              <Image
                src={'/img/icons/steps_11.svg'}
                objectFit="contain"
                className="pb-1 ml-2"
                width={35}
                quality={100}
                height={35}
                alt={'phone'}
              />
            </div>
            <p className="text-[14px]">
              Применяем цифровой подход к проработке дизайна улыбки, навигационную хирургию по
              шаблонам и все официальные протоколы метода.
            </p>
          </div>
          <div className="border-[1.5px] space-y-2 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h4>Пожизненная гарантия</h4>
              <Image
                src={'/img/icons/about_2.svg'}
                objectFit="contain"
                className="pb-1 ml-2"
                width={35}
                quality={100}
                height={35}
                alt={'phone'}
              />
            </div>
            <p className="text-[14px]">
              Пожизненная гарантия на все установленные импланты. Гарантия на работу специалистов и
              клиники и ежегодное обслуживание.
            </p>
          </div>
          <div className="border-[1.5px] space-y-2 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h4>Опытные врачи-имплантологи</h4>
              <Image
                src={'/img/icons/about_3.svg'}
                objectFit="contain"
                className="pb-1 ml-2"
                width={35}
                quality={100}
                height={35}
                alt={'phone'}
              />
            </div>
            <p className="text-[14px]">
              Наши врачи проходят ежегодное повышение квалификации, имеют большой опыт по проведению
              имплантации, которым главное здоровье вашей улыбки.
            </p>
          </div>
          <div className="space-y-2">
            <h2>
              <span className="text-cteal ObjectSans-Heavy-No-Color">Омоложение</span> <br></br> без
              пластики и филлеров
            </h2>
            <p>
              Поставьте импланты и{' '}
              <span className="ObjectSans-Heavy">станьте на 10 лет моложе!</span>
            </p>
          </div>
          <div>
            <div>
              <Image
                src="/img/7_young/picture.png"
                objectPosition="center"
                width={370}
                quality={100}
                height={405}
                alt={''}
              />
            </div>
            <div className="space-y-4">
              <div className="border-[1.5px] space-y-2 rounded-2xl p-4 shadow-md">
                <div className="flex gap-4">
                  <Image
                    src="/img/icons/sign.svg"
                    className="ml-2"
                    alt={''}
                    width={18}
                    height={13}
                  />
                  <p className="text-[16px]">Высочайшая эстетика и точность</p>
                </div>
              </div>
              <div className="border-[1.5px] space-y-2 rounded-2xl p-4 shadow-md">
                <div className="flex gap-4">
                  <Image
                    src="/img/icons/sign.svg"
                    className="ml-2"
                    alt={''}
                    width={18}
                    height={13}
                  />
                  <div className="text-[16px]">Поддержка мышц лица в тонусе</div>
                </div>
              </div>
              <div className="border-[1.5px] space-y-2 rounded-2xl p-4 shadow-md">
                <div className="flex gap-4">
                  <Image
                    src="/img/icons/sign.svg"
                    alt={''}
                    className="ml-2"
                    width={18}
                    height={13}
                  />
                  <div className="text-[16px]">Предотвращение атрофии костной ткани</div>
                </div>
              </div>
              <div className="border-[1.5px] space-y-2 rounded-2xl p-4 shadow-md">
                <div className="flex gap-4">
                  <Image
                    src="/img/icons/sign.svg"
                    className="ml-2"
                    alt={''}
                    width={18}
                    height={13}
                  />
                  <div className="text-[16px]">Забудьте о “зубах в стакане”</div>
                </div>
              </div>
              <div className="border-[1.5px] space-y-2 rounded-2xl p-4 shadow-md">
                <div className="flex gap-4">
                  <Image
                    src="/img/icons/sign.svg"
                    alt={''}
                    className="ml-2"
                    width={18}
                    height={13}
                  />
                  <div className="text-[16px]">Избавление от морщин</div>
                </div>
              </div>
              <div>
                <span className="ObjectSans-Heavy-No-Color">
                  Пожизненная гарантия на импланты и работу врача.
                </span>{' '}
                До 10 лет – на протезы. Ежегодная гигиена и сервисное обслуживание БЕСПЛАТНО.
              </div>
            </div>
          </div>{' '}
          <h3>
            Красивая <span className="text-cteal ObjectSans-Heavy-No-Color">улыбка сейчас,</span>
            <br></br> оплата <span className="text-cteal ObjectSans-Heavy-No-Color">потом</span>
          </h3>
          <p>
            Мы уверены, что стоматологическая помощь должна быть доступна каждому, поэтому
            предоставляем прекрасную возможность воспользоваться нашими услугами уже сейчас, а
            выплатить стоимость частями
            <span className="ObjectSans-Heavy"> в рассрочку или кредит.</span>
          </p>
        </div>
      </div>
    </>
  );
}
