import { Button, Input, Progress } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';

export default function Fifth() {
  return (
    <>
      <div className="pl-[16px] pr-[16px] space-y-4 my-10">
        <h2 className="h1">
          <span className="text-cteal ObjectSans-Heavy-No-Color">Цены </span>
          на имплатацию <br></br> All-on-4
        </h2>
        <p>
          Цена имплантации по методике All-on-4 складывается из стоимости самой имплантации,
          изготовления протеза, работы специалистов, также необходимых обследований и процедур.
        </p>
        <Button className="w-full rounded-md bg-cteal text-white tracking-wider h-[55px] text-[16px] my-3">
          Получить план лечения
        </Button>
        <div>
          <div className="flex flex-col border-[1.5px] shadow-lg rounded-xl px-4">
            <div className="relative justify-center flex shadow-none">
              <Image
                src={'/img/9_prices/dentium/picture.jpg'}
                height={160}
                width={231}
                quality={100}
                alt={'dentium'}
                className="max-w-[231px] shadow-none border-none"
              />
            </div>

            <div className="flex justify-between w-full">
              <div className="flex prices-company-name">Dentum</div>
              <div className="flex">
                <Image
                  src={'/img/9_prices/dentium/logo.png'}
                  objectFit="contain"
                  width={90.4}
                  quality={100}
                  height={32}
                  alt={'phone'}
                />
              </div>
            </div>
            <div>
              <div className="text-black/50 text-[12px] mt-4 mb-1">Что входит в стоимость?</div>
              <div className="flex flex-row items-center flex-wrap gap-y-0.5">
                <span className="flex items-center mr-2">
                  4 ипланта Dentium
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Установка
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Работа врача
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Анестезия
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-[12px] flex items-center gap-1 py-4">
                <Image
                  src="/img/flags/south_korea.jpg"
                  width={36}
                  height={24}
                  alt="plus"
                  className="mr-2.5 border"
                />
                <span className="text-black/50">Производитель:</span>{' '}
                <span className="ObjectSans-Heavy">Южная Корея</span>
              </div>
              <div className="text-[12px] text-black/50">Цена за 1 челюсть</div>
              <div className="ObjectSans-Heavy text-[24px]">от 130 000 руб.</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1.5px] shadow-lg rounded-xl px-4">
          <div className="relative justify-center flex shadow-none">
            <Image
              src={'/img/9_prices/osstem/picture.jpg'}
              height={160}
              width={201}
              quality={100}
              alt={'dentium'}
              className="max-w-[231px] shadow-none border-none"
            />
          </div>

          <div className="flex justify-between w-full">
            <div className="flex prices-company-name">Osstem</div>
            <div className="flex">
              <Image
                src={'/img/9_prices/osstem/logo.png'}
                objectFit="contain"
                width={90.4}
                quality={100}
                height={32}
                alt={'phone'}
              />
            </div>
          </div>
          <div>
            <div className="text-black/50 text-[12px] mt-4 mb-1">Что входит в стоимость?</div>
            <div className="flex flex-row items-center flex-wrap gap-y-0.5">
              <span className="flex items-center mr-2">
                4 ипланта Osstem
                <Image
                  src="/img/icons/plus.svg"
                  width={12}
                  height={12}
                  alt="plus"
                  className="mx-2.5"
                />
              </span>
              <span className="flex items-center">
                Установка
                <Image
                  src="/img/icons/plus.svg"
                  width={12}
                  height={12}
                  alt="plus"
                  className="mx-2.5"
                />
              </span>
              <span className="flex items-center">
                Работа врача
                <Image
                  src="/img/icons/plus.svg"
                  width={12}
                  height={12}
                  alt="plus"
                  className="mx-2.5"
                />
              </span>
              <span className="flex items-center">
                Анестезия
                <Image
                  src="/img/icons/plus.svg"
                  width={12}
                  height={12}
                  alt="plus"
                  className="mx-2.5"
                />
              </span>
            </div>
          </div>
          <div className="mb-5">
            <div className="text-[12px] flex items-center gap-1 py-4">
              <Image
                src="/img/flags/south_korea.jpg"
                width={36}
                height={24}
                alt="plus"
                className="mr-2.5 border"
              />
              <span className="text-black/50">Производитель:</span>{' '}
              <span className="ObjectSans-Heavy">Южная Корея</span>
            </div>
            <div className="text-[12px] text-black/50">Цена за 1 челюсть</div>
            <div className="ObjectSans-Heavy text-[24px]">от 110 000 руб.</div>
          </div>
        </div>

        <div className="gap-y-[16px]">
          <div className="flex flex-col border-[1.5px] shadow-lg rounded-xl px-4">
            <div className="relative justify-center flex shadow-none">
              <Image
                src={'/img/9_prices/nobel/picture.jpg'}
                height={160}
                width={261}
                quality={100}
                alt={'Nobel Biocare'}
                className="max-w-[231px] shadow-none border-none"
              />
            </div>

            <div className="flex justify-between w-full">
              <div className="flex prices-company-name whitespace-nowrap">Nobel Biocare</div>
              <div className="flex">
                <Image
                  src={'/img/9_prices/nobel/logo.png'}
                  objectFit="contain"
                  width={90.4}
                  quality={100}
                  height={32}
                  alt={'phone'}
                />
              </div>
            </div>
            <div>
              <div className="text-black/50 text-[12px] mt-4 mb-1">Что входит в стоимость?</div>
              <div className="flex flex-row items-center flex-wrap gap-y-0.5">
                <span className="flex items-center mr-2">
                  4 ипланта Nobel Biocare
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Установка
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Работа врача
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Анестезия
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-[12px] flex items-center gap-1 py-4">
                <Image
                  src="/img/flags/switzer.jpg"
                  width={36}
                  height={24}
                  alt="plus"
                  className="mr-2.5 border"
                />
                <span className="text-black/50">Производитель:</span>{' '}
                <span className="ObjectSans-Heavy">Швейцария</span>
              </div>
              <div className="text-[12px] text-black/50">Цена за 1 челюсть</div>
              <div className="ObjectSans-Heavy text-[24px]">от 145 000 руб.</div>
            </div>
          </div>
        </div>

        <div className="gap-y-[16px]">
          <div className="flex flex-col border-[1.5px] shadow-lg rounded-xl px-4">
            <div className="relative justify-center flex shadow-none">
              <Image
                src={'/img/9_prices/straumann/picture.jpg'}
                height={160}
                width={261}
                quality={100}
                alt={'Straumann'}
                className="max-w-[231px] shadow-none border-none"
              />
            </div>

            <div className="flex justify-between w-full">
              <div className="flex prices-company-name whitespace-nowrap">Straumann</div>
              <div className="flex">
                <Image
                  src={'/img/9_prices/straumann/logo.png'}
                  objectFit="contain"
                  width={90.4}
                  quality={100}
                  height={32}
                  alt={'phone'}
                />
              </div>
            </div>
            <div>
              <div className="text-black/50 text-[12px] mt-4 mb-1">Что входит в стоимость?</div>
              <div className="flex flex-row items-center flex-wrap gap-y-0.5">
                <span className="flex items-center mr-2">
                  4 ипланта Nobel Biocare
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Установка
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Работа врача
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Анестезия
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-[12px] flex items-center gap-1 py-4">
                <Image
                  src="/img/flags/switzer.jpg"
                  width={36}
                  height={24}
                  alt="plus"
                  className="mr-2.5 border"
                />
                <span className="text-black/50">Производитель:</span>{' '}
                <span className="ObjectSans-Heavy">Швейцария</span>
              </div>
              <div className="text-[12px] text-black/50">Цена за 1 челюсть</div>
              <div className="ObjectSans-Heavy text-[24px]">от 145 000 руб.</div>
            </div>
          </div>
        </div>

        <div className="gap-y-[16px]">
          <div className="flex flex-col border-[1.5px] shadow-lg rounded-xl px-4">
            <div className="relative justify-center flex shadow-none">
              <Image
                src={'/img/9_prices/inno/picture.jpg'}
                height={160}
                width={261}
                quality={100}
                alt={'Inno'}
                className="max-w-[231px] shadow-none border-none"
              />
            </div>

            <div className="flex justify-between w-full">
              <div className="flex prices-company-name whitespace-nowrap">Inno</div>
              <div className="flex">
                <Image
                  src={'/img/9_prices/inno/logo.png'}
                  objectFit="contain"
                  width={90.4}
                  quality={100}
                  height={32}
                  alt={'logo straumann'}
                />
              </div>
            </div>
            <div>
              <div className="text-black/50 text-[12px] mt-4 mb-1">Что входит в стоимость?</div>
              <div className="flex flex-row items-center flex-wrap gap-y-0.5">
                <span className="flex items-center mr-2">
                  4 ипланта Nobel Biocare
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Установка
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Работа врача
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Анестезия
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-[12px] flex items-center gap-1 py-4">
                <Image
                  src="/img/flags/south_korea.jpg"
                  width={36}
                  height={24}
                  alt="plus"
                  className="mr-2.5 border"
                />
                <span className="text-black/50">Производитель:</span>{' '}
                <span className="ObjectSans-Heavy">Южная Корея</span>
              </div>
              <div className="text-[12px] text-black/50">Цена за 1 челюсть</div>
              <div className="ObjectSans-Heavy text-[24px]">от 145 000 руб.</div>
            </div>
          </div>
        </div>

        <div className="gap-y-[16px]">
          <div className="flex flex-col border-[1.5px] shadow-lg rounded-xl px-4">
            <div className="relative justify-center flex shadow-none">
              <Image
                src={'/img/9_prices/mis/picture.jpg'}
                height={160}
                width={461}
                quality={100}
                alt={'MIS'}
                className="max-w-[431px] shadow-none border-none"
              />
            </div>

            <div className="flex justify-between w-full">
              <div className="flex prices-company-name whitespace-nowrap">MIS</div>
              <div className="flex">
                <Image
                  src={'/img/9_prices/mis/logo.png'}
                  objectFit="contain"
                  width={90.4}
                  quality={100}
                  height={32}
                  alt={'logo straumann'}
                />
              </div>
            </div>
            <div>
              <div className="text-black/50 text-[12px] mt-4 mb-1">Что входит в стоимость?</div>
              <div className="flex flex-row items-center flex-wrap gap-y-0.5">
                <span className="flex items-center mr-2">
                  4 ипланта MIS
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Установка
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Работа врача
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
                <span className="flex items-center">
                  Анестезия
                  <Image
                    src="/img/icons/plus.svg"
                    width={12}
                    height={12}
                    alt="plus"
                    className="mx-2.5"
                  />
                </span>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-[12px] flex items-center gap-1 py-4">
                <Image
                  src="/img/flags/izrael.jpg"
                  width={36}
                  height={24}
                  alt="plus"
                  className="mr-2.5 border"
                />
                <span className="text-black/50">Производитель:</span>{' '}
                <span className="ObjectSans-Heavy">Израиль</span>
              </div>
              <div className="text-[12px] text-black/50">Цена за 1 челюсть</div>
              <div className="ObjectSans-Heavy text-[24px]">от 145 000 руб.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
