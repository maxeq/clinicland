import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="relative flex h-[64px] items-center justify-between">
      <div className="flex">
        <Image
          src={'/img/0_header/logo.svg'}
          objectFit="contain"
          width={89.33}
          height={32}
          alt={'logo'}
          style={{ objectPosition: 'top' }}
        />
      </div>
      <div className="flex space-x-2 items-center justify-center">
        <div className="bg-[#32949B] h-[32px] rounded-full w-[32px] p-2.5 shadow-xl">
          <Image
            src={'/img/icons/pin.svg'}
            objectFit="contain"
            className="pb-1"
            width={32}
            height={32}
            alt={'phone'}
          />
        </div>
        <div className="bg-[#32949B] h-[32px] rounded-full w-[32px] p-2.5 shadow-xl">
          <Image
            src={'/img/icons/phone.svg'}
            objectFit="contain"
            width={32}
            height={32}
            alt={'chat'}
          />
        </div>
        <div className="bg-[#32949B] h-[32px] rounded-full w-[32px] p-2.5 shadow-xl">
          <Image
            src={'/img/icons/chat.svg'}
            objectFit="contain"
            width={32}
            height={32}
            alt={'chat'}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
