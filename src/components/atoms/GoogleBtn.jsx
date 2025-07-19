import React from "react";
import glogo from "../../assets/image/logos_google-icon.png";

export default function GoogleBtn() {
  return (
    <>
      <div class="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-3" action="#" method="POST">
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-lg bg-white px-3 mb-2 py-1.5 text-sm/6 font-semibold dm-sans-fonts2 text-gray-700 inset-ring inset-ring-gray-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              <i class="inline-flex items-center mr-2">
                <img src={glogo} alt="Google logo" />
              </i>
              Daftar dengan Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
