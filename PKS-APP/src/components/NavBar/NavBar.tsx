"use client";

import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { prompt } from "@/app/utils/fonts";
import { fetchAPI } from "@/app/utils/fetchApi";

type Props = {};

type TNavbarMenuData = {
  Navbar_menu_1: string;
  Navbar_menu_2: string;
  Navbar_menu_3: string;
  Navbar_menu_4: string;
  Navbar_menu_5: string;
}

interface INavbarMenuListData {
  item_1_title: string;
  item_1_subtitle: string;
  item_2_title: string;
  item_2_subtitle: string;
  item_3_title: string;
  item_3_subtitle: string;
  item_4_title: string;
  item_4_subtitle: string;
  item_5_title: string;
  item_5_subtitle: string;
  item_6_title: string;
  item_6_subtitle: string;
}

type TNavbarMainMenuListCoverData = {
  title: string;
  subtitle: string;
  image?: string;
}


export default function Navbar({ }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [NavbarMenuData, setNavbarMenuData] = useState<TNavbarMenuData>()
  const [NavbarMainMenuListData, setNavbarMainMenuListData] = useState<INavbarMenuListData>()
  const [NavbarSecondMenuListData, setNavbarSecondMenuListData] = useState<INavbarMenuListData>()
  const [NavbarMainMenuListCoverData, setNavbarMainMenuListCoverData] = useState<TNavbarMainMenuListCoverData>()

  const fetchNavbarData = async () => {
    try {
      const path = "/navbar";
      const urlParamsObject = {
        populate: "*",
        pagination: {},
      };
      const responseData = await fetchAPI(path, urlParamsObject);
      // console.log("nav esponseData", responseData);

      if (!responseData.data.attributes) {
        console.error("Cannot get navbar data");
        return;
      }

      const { Navbar_menu, Navbar_menu_list_1, Navbar_menu_list_item_2 } = await responseData.data.attributes;

      // console.log("Navbar_menu", Navbar_menu);
      // console.log("Navbar_menu_list_1", Navbar_menu_list_1);
      // console.log("Navbar_menu_list_item_2", Navbar_menu_list_item_2);

      setNavbarMenuData(Navbar_menu);

      setNavbarMainMenuListData(Navbar_menu_list_1.Navbar_menu_list_item_1);
      setNavbarSecondMenuListData(Navbar_menu_list_item_2);
      setNavbarMainMenuListCoverData(Navbar_menu_list_1.Navbar_menu_list_cover)


      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);

    }

  }

  useEffect(() => {
    fetchNavbarData();
  }, [])

  return (
    <NavigationMenu.Root
      className={`sticky top-0 z-50 flex flex-col w-screen ${prompt.className} bg-brown3 shadow-[0_2px_10px]`}
    >

      <Link href="/" className="mr-2 sm:mr-6 sm:hidden self-center">
        <Image
          src="/brand_logo.png"
          width={60}
          height={60}
          alt="PKS"
          className="static rounded-2xl min-w-[30px]"
          loading="lazy"
        />
      </Link>
      {!isLoading && (<>

        <NavigationMenu.List className="center shadow-blackA9 m-0 flex justify-center sm:justify-normal list-none rounded-[6px] px-1 sm:px-6 h-12 sm:h-20 items-center w-screen ">
          <Link href="/" className="mr-2 sm:mr-6 hidden sm:inline">
            <Image
              src="/brand_logo.png"
              width={60}
              height={60}
              alt="PKS"
              className="static rounded-2xl min-w-[30px]"
              loading="lazy"
            />
          </Link>
          <NavigationMenu.Item >
            <NavigationMenu.Trigger className="text-brown11 hover:bg-violet-3 focus:shadow-violet7 px-1 group flex select-none items-center  gap-[2px] rounded-[4px] sm:px-3 py-2 text-md  leading-none outline-none focus:shadow-[0_0_0_2px]">
              {NavbarMenuData?.Navbar_menu_1
                ? NavbarMenuData.Navbar_menu_1
                : "Our Story, Our heritage"}
              <CaretDownIcon
                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[10px] gap-y-[4px] p-[22px] sm:min-w-[600px] md:min-w-[760px] lg:min-w-[960px] md:min-h-[400px] sm:grid-cols-[0.75fr_1fr_1fr]">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className={`focus:shadow-violet7 from-brown4 via-brown8 to-brown11 ${NavbarMainMenuListCoverData?.image ? NavbarMainMenuListCoverData.image : "bg-[url('/images/about/about_banner.jpg')]"} bg-cover flex
                  h-full w-full select-none flex-col justify-end rounded-[6px]  p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]`}
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
                      <div className="mt-4 mb-[7px] text-[18px]  leading-[1.2] text-white">
                        {NavbarMainMenuListCoverData?.title
                          ? NavbarMainMenuListCoverData.title
                          : "Coffee Primitives"}

                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        {NavbarMainMenuListCoverData?.subtitle
                          ? NavbarMainMenuListCoverData.subtitle
                          : "Genuine coffee primitives, built with care."}

                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                <ListItem href="" title={`${NavbarMainMenuListData?.item_1_title ? NavbarMainMenuListData.item_1_title : "Espresso"} `} >
                  <span className="hidden sm:inline">
                    {NavbarMainMenuListData?.item_1_subtitle ? NavbarMainMenuListData.item_1_subtitle : "A strong and concentrated coffee made by forcing hot water\
                    through finely ground coffee beans"}
                  </span>
                </ListItem>
                <ListItem href="" title={`${NavbarMainMenuListData?.item_2_title ? NavbarMainMenuListData.item_2_title : "Latte"} `} >
                  <span className="hidden sm:inline ">
                    {NavbarMainMenuListData?.item_2_subtitle ? NavbarMainMenuListData.item_2_subtitle : "A strong and concentrated coffee made by forcing hot water\A classic Italian coffee beverage made with equal parts\
                    espresso, steamed milk, and milk foam."}

                  </span>
                </ListItem>
                <ListItem href="" title={`${NavbarMainMenuListData?.item_3_title ? NavbarMainMenuListData.item_3_title : "Cappuccino"} `} >
                  <span className="hidden sm:inline">
                    {NavbarMainMenuListData?.item_3_subtitle ? NavbarMainMenuListData.item_3_subtitle : "A popular coffee drink made with espresso and steamed milk."}
                  </span>
                </ListItem>

                <ListItem href="" title={`${NavbarMainMenuListData?.item_4_title ? NavbarMainMenuListData.item_4_title : "Americano"} `} >
                  <span className="hidden sm:inline">
                    {NavbarMainMenuListData?.item_4_subtitle ? NavbarMainMenuListData.item_4_subtitle : "A simple coffee drink made by diluting espresso with hot water."}
                  </span>
                </ListItem>
                <ListItem href="" title={`${NavbarMainMenuListData?.item_5_title ? NavbarMainMenuListData.item_5_title : "Flat"} `} >
                  <span className="hidden sm:inline">
                    {NavbarMainMenuListData?.item_5_subtitle ? NavbarMainMenuListData.item_5_subtitle : "A small and strong coffee consisting of a shot of espresso\
                    stained or marked with a small amount of milk."}
                  </span>
                </ListItem>
                <ListItem href="" title={`${NavbarMainMenuListData?.item_6_title ? NavbarMainMenuListData.item_6_title : "Mocha"} `} >
                  <span className="hidden sm:inline">
                    {NavbarMainMenuListData?.item_6_subtitle ? NavbarMainMenuListData.item_6_subtitle : "A decadent coffee beverage combining espresso, steamed milk, and\
                    chocolate syrup or powder."}
                  </span>
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-brown11 hover:bg-brown4 focus:shadow-violet7 px-1 group flex select-none items-center justify-between gap-[2px] rounded-[4px] sm:px-3 py-2 text-md  leading-none outline-none focus:shadow-[0_0_0_2px]">

              {NavbarMenuData?.Navbar_menu_2
                ? NavbarMenuData.Navbar_menu_2
                : "โปรโมชั่น"}
              <CaretDownIcon
                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem title={`${NavbarSecondMenuListData?.item_1_title ? NavbarSecondMenuListData.item_1_title : "Introduction"}`} href="">
                  {NavbarSecondMenuListData?.item_1_subtitle ? NavbarSecondMenuListData.item_1_subtitle : "Buy high-quality, accessible blended coffee."}

                </ListItem>
                <ListItem title={`${NavbarSecondMenuListData?.item_2_title ? NavbarSecondMenuListData.item_2_title : "Getting"}`} href="">
                  {NavbarSecondMenuListData?.item_2_subtitle ? NavbarSecondMenuListData.item_2_subtitle : "A quick tutorial to get yourself an unforgettable taste of"}

                  coffee.
                </ListItem>
                <ListItem title={`${NavbarSecondMenuListData?.item_3_title ? NavbarSecondMenuListData.item_3_title : "Packaging"}`} href="">
                  {NavbarSecondMenuListData?.item_3_subtitle ? NavbarSecondMenuListData.item_3_subtitle : "Unstyled and compatible with any container."}


                </ListItem>
                <ListItem title={`${NavbarSecondMenuListData?.item_4_title ? NavbarSecondMenuListData.item_4_title : "Promotions"}`} href="">
                  {NavbarSecondMenuListData?.item_4_subtitle ? NavbarSecondMenuListData.item_4_subtitle : "Get the best deals from us."}

                </ListItem>
                <ListItem title={`${NavbarSecondMenuListData?.item_5_title ? NavbarSecondMenuListData.item_5_title : "Accessibility"}`} href="">
                  {NavbarSecondMenuListData?.item_5_subtitle ? NavbarSecondMenuListData.item_5_subtitle : "Important information regarding accessibility."}

                </ListItem>
                <ListItem
                  title={`${NavbarSecondMenuListData?.item_6_title ? NavbarSecondMenuListData.item_6_title : "Releases"}`}
                  href=""
                >
                  {NavbarSecondMenuListData?.item_6_subtitle ? NavbarSecondMenuListData.item_6_subtitle : "See all our releases."}

                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="text-brown11 hover:bg-brown4 focus:shadow-violet7 px-1 block select-none rounded-[4px] sm:px-3 py-2 text-md  leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href=""
            >
              {NavbarMenuData?.Navbar_menu_3
                ? NavbarMenuData.Navbar_menu_3
                : "พีเคเอสแคร์"}
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="sm:ml-auto ">
            <NavigationMenu.Link
              className="text-brown11 hover:bg-brown4 focus:shadow-violet7 px-1  block select-none rounded-[4px] sm:px-3 py-2 text-md  leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/about"
            >
              {NavbarMenuData?.Navbar_menu_4
                ? NavbarMenuData.Navbar_menu_4
                : "เกี่ยวกับ"}
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="mr-0">
            <NavigationMenu.Link
              className="text-brown11 hover:bg-brown4 focus:shadow-violet7 px-1 block select-none rounded-[4px] sm:px-3 py-2 text-md  leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href=""
            >
              {NavbarMenuData?.Navbar_menu_5
                ? NavbarMenuData.Navbar_menu_5
                : "ติดต่อ"}
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-amber8" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
      </>)}

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
          "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-md leading-none no-underline outline-none transition-colors",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px]  leading-[1.2]">
          {title}
        </div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
