"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex max-w-min gap-2 items-center justify-center">
      <svg
        width="44"
        height="48"
        viewBox="0 0 44 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7143 33.4286C24.3931 33.4286 31.4286 26.393 31.4286 17.7143C31.4286 16.7307 31.3382 15.7682 31.1653 14.8347C30.2318 14.6618 29.2693 14.5714 28.2857 14.5714C19.607 14.5714 12.5714 21.6069 12.5714 30.2857C12.5714 31.2693 12.6618 32.2318 12.8347 33.1653C13.7682 33.3382 14.7307 33.4286 15.7143 33.4286Z"
          fill="#175CD3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8347 33.1653C5.53118 31.8127 0 25.4095 0 17.7143C0 9.03553 7.03554 2 15.7143 2C23.4095 2 29.8128 7.53118 31.1654 14.8347C30.2318 14.6618 29.2694 14.5714 28.2858 14.5714C19.607 14.5714 12.5714 21.607 12.5714 30.2857C12.5714 31.2693 12.6618 32.2318 12.8347 33.1653Z"
          fill="#1570EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.7142 33.4285C24.393 33.4285 31.4285 26.393 31.4285 17.7142C31.4285 16.7306 31.3382 15.7681 31.1653 14.8346C38.4688 16.1872 44 22.5905 44 30.2856C44 38.9644 36.9645 45.9999 28.2857 45.9999C20.5905 45.9999 14.1872 40.4687 12.8346 33.1652C13.7682 33.3381 14.7306 33.4285 15.7142 33.4285Z"
          fill="#2E90FA"
        />
      </svg>
      <span className="text-blue-500 text-3xl font-bold">Catalog</span>
    </Link>
  );
};

export default Logo;
