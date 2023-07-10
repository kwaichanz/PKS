"use client";

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { cherry, montserrat, noto, prompt, thasadith } from "@/app/utils/fonts";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <NavigationMenu.Root
      className={`sticky top-0 z-50 flex w-screen ${prompt.className}`}
    >
      <NavigationMenu.List className="center shadow-blackA7 m-0 flex  list-none rounded-[6px] bg-white px-6 shadow-[0_2px_10px] h-20 items-center w-screen ">
        <Link href="/" className="mr-6">
          <Image
            src="/brand_logo.png"
            width={60}
            height={60}
            alt="PKS"
            className="static rounded-2xl"
            loading="lazy"
          />
        </Link>
        <NavigationMenu.Item className="">
          <NavigationMenu.Trigger className="text-amber11 hover:bg-violet-3 focus:shadow-violet7 group flex select-none items-center  gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            สินค้า{" "}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:min-w-[600px] md:min-w-[760px] lg:min-w-[960px] md:min-h-[400px] sm:grid-cols-[0.75fr_1fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-brown4 via-brown8 to-brown11 flex
                  h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Coffee Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Genuine coffee primitives, built with care.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="">
                A strong and concentrated coffee made by forcing hot water
                through finely ground coffee beans
              </ListItem>
              <ListItem href="">
                A classic Italian coffee beverage made with equal parts
                espresso, steamed milk, and milk foam.
              </ListItem>
              <ListItem href="">
                A popular coffee drink made with espresso and steamed milk.
              </ListItem>

              <ListItem href="">
                A simple coffee drink made by diluting espresso with hot water.
              </ListItem>
              <ListItem href="">
                A small and strong coffee consisting of a shot of espresso
                stained or marked with a small amount of milk.
              </ListItem>
              <ListItem href="">
                A decadent coffee beverage combining espresso, steamed milk, and
                chocolate syrup or powder.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            โปรโมชั่น{" "}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Introduction" href="">
                Buy high-quality, accessible blended coffee.
              </ListItem>
              <ListItem title="Getting started" href="">
                A quick tutorial to get yourself an unforgettable taste of
                coffee.
              </ListItem>
              <ListItem title="Packaging" href="">
                Unstyled and compatible with any container.
              </ListItem>
              <ListItem title="Promotions" href="">
                Get the best deals from us.
              </ListItem>
              <ListItem title="Accessibility" href="">
                Important information regarding accessibility.
              </ListItem>
              <ListItem
                title="Releases"
                href=""
              >
                See all our releases.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href=""
          >
            พีเคเอสแคร์
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="ml-auto ">
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/about"
          >
            เกี่ยวกับ
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="mr-0">
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href=""
          >
            ติดต่อ
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-red-400" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full ">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
}

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
          {title}
        </div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
