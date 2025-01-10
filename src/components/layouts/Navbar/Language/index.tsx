'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IoLanguage } from "react-icons/io5";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { i18n } from "@/i18n-config";

export const Language = () => {

  const pathName = usePathname();

  const redirectPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <IoLanguage className="text-lg cursor-pointer" />
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {i18n.locales.map((locale) => {
            return (
              <MenuItem key={locale}>
                <Link
                  href={redirectPathName(locale)}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  {locale}
                </Link>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
};
