import { Button, Input, Progress } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function Examples() {
  return (
    <>
      <div className="pl-[16px] pr-[16px] space-y-4 my-5">
        <h3>
          Примеры работ <span className="text-cteal ObjectSans-Heavy-No-Color">До / После</span>{' '}
          имплантации All-on-4
        </h3>
        <div className="space-y-1">
          <Button className="w-full rounded-m border-2 border-cteal bg-white text-black tracking-wider h-[55px] text-[16px] my-3">
            Бесплатная консультация
          </Button>
          <Button className="w-full rounded-md bg-cteal text-white tracking-wider h-[55px] text-[16px] my-3">
            Записаться
          </Button>
        </div>
        <h2>
          {' '}
          <span className="text-cteal ObjectSans-Heavy-No-Color">Этапы</span> имплантации All-on-4
        </h2>
        <p>
          <span className="ObjectSans-Heavy text-black">Всего 3 этапа до красивой улыбки.</span> На
          основной этап лечения потребуется от 1 до 3 дней – это срок от проведения операции по
          установки имплантов до фиксации на них протезов. Разумеется, на этом лечение не
          заканчивается.
        </p>
        <div className="text-[18px]">
          <span className="text-cteal ObjectSans-Heavy-No-Color">1.</span>
          <span className="ObjectSans-Heavy text-black"> Подготовительный этап.</span>{' '}
          <span className="text-cteal ObjectSans-Heavy-No-Color">Диагностика.</span>
        </div>
        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step1.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Компьютерная томография</div>
          <p className="text-[14px]">Для получения точной диагностики состояния ваших зубов.</p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step2.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">
            Подбор метода имплантации
          </div>
          <p className="text-[14px]">Подходящий именно вам, на основе снимков.</p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step3.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">
            Составление плана лечения
          </div>
          <p className="text-[14px]">
            Расчитываем и расписываем все этапы и необходимые процедуры.
          </p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step4.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Заключение договора</div>
          <p className="text-[14px]">
            Фиксируем стоимость имплантации в договоре. Поможет оформить налоговый вычет 13%.
          </p>
        </div>

        {/* <----------> */}
        <div className="text-[18px]">
          <span className="text-cteal ObjectSans-Heavy-No-Color">2. </span>
          <span className="ObjectSans-Heavy text-black">Хирургический этап.</span>{' '}
          <span className="text-cteal ObjectSans-Heavy-No-Color">Установка имплантов</span>
        </div>
        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step5.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">3D планирование</div>
          <p className="text-[14px]">Цифровое планирование процесса имплантации.</p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step6.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Установка имплантов</div>
          <p className="text-[14px]">4 импланта с одномоментным удалением больных зубов.</p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step7.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Биоматериалы и анестезия</div>
          <p className="text-[14px]">
            Индивидуально подобранные препараты для ускоренной реабилитации.
          </p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step8.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Работа врачей клиники</div>
          <p className="text-[14px]">
            Хирурга-имплантолога на всех этапах – от установки имплантов до осмотров после лечения.
          </p>
        </div>

        {/* <----------> */}
        <div className="text-[18px]">
          <span className="text-cteal ObjectSans-Heavy-No-Color">3. </span>
          <span className="ObjectSans-Heavy text-black">Ортопедический этап.</span>{' '}
          <span className="text-cteal ObjectSans-Heavy-No-Color">Установка протезов</span>
        </div>
        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step9.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Мультиюнит абатменты</div>
          <p className="text-[14px]">Оригинальные абатменты для винтовой фиксации протеза.</p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step10.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Слепочные трансферы</div>
          <p className="text-[14px]">
            Для точного позиционирования будущих зубов при создании оттиска.
          </p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step11.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Цифровое планирование</div>
          <p className="text-[14px]">
            Цифровой дизайн и 3D моделирование будущей улыбки и модели протеза.
          </p>
        </div>

        <div className="border-1.5 rounded-lg shadow-lg p-6">
          <div className="">
            <Image src="/img/11_steps/step12.svg" alt={''} width={32} height={32} />
          </div>
          <div className="ObjectSans-Heavy-No-Color text-[18px] py-2">Работа врачей клиники</div>
          <p className="text-[14px]">
            Ортопеда и зубного техника для изготовления и фиксации полного протеза.
          </p>
        </div>
      </div>
    </>
  );
}
