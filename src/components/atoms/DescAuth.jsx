import React from "react";

export default function DescAuth({ mainTitle, subTitle }) {
  return (
    <>
      <div class="flex-col justify-center items-center cursor-default">
        <h1 class="text-3xl md:text-3xl font-bold leading-tight max-w-4xl poppins-semibold mt-9 text-center">
          {mainTitle}
        </h1>
        <h1 class="text-base md:text-base font-light leading-tight max-w-4xl text-gray-400 dm-sans-fonts mt-3 text-center">
          {subTitle}
        </h1>
      </div>
    </>
  );
}
