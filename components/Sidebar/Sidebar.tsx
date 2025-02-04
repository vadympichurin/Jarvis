"use client";

import { ReactNode, useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import Link from "next/link";
// import { useTranslation } from "react-i18next";
// import { AnimatePresence, motion } from "motion/react";

import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarList,
  SidebarItem,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  TooltipAction,
  TooltipContent,
  TooltipProvider,
  Tooltip,
  Popover,
  PopoverAction,
  PopoverContent,
  Skeleton,
  SkeletonLine,
} from "keep-react";

import {
  HandCoins,
  PencilLine,
  Folder,
  Bell,
  House,
  AddressBook,
  PresentationChart,
  Calculator,
  Clock,
  ChartPieSlice,
  Wrench,
} from "@phosphor-icons/react";

// import Logo from "@components/Logo";
// import { ROUTES } from "@constants/routes";
// import { getInitials } from "@helpers/user";
import { usePathname } from "next/navigation";
// import LogoutButton from "@components/LogOutButton";
// import { toggleSidebar } from "@store/features/userSlice";
// import { selectCurrentUserId } from "@store/features/authSlice";
// import { usePostDataMutation } from "@store/services/ninoxApiService";
// import { selectIsSidebarOpen } from "@store/selectors/user.selectors";
// import { selectRouting } from "@lib/store/selectors/routing.selectors";
// import { getRouteWithRedux } from "@helpers/routing";

// interface UserData {
//   id: string;
//   mail: string;
//   firstname: string;
//   lastname: string;
//   phone?: string;
//   avatar?: string;
//   roles: string[];
// }

// const testUser: UserData = {
//   id: "22",
//   firstname: "Homer",
//   lastname: "Simpson",
//   roles: ["Manager"],
//   avatar:
//     "https://w7.pngwing.com/pngs/737/513/png-transparent-homer-simpson-illustration-homer-simpson-the-simpsons-tapped-out-bart-simpson-marge-simpson-youtube-homer-springfield-hand-cartoon.png",
//   mail: "h.simpson@test.de",
//   phone: "115151234567",
// };

type ItemProp = {
  icon: ReactNode;
  iconActive: ReactNode;
  title: string;
//   href: string;
};

const sidebarItems: ItemProp[] = [
  {
    icon: <House size={20} />,
    iconActive: <House size={20} weight="duotone" />,
    title: "navigation.home",
    // href: ROUTES.home,
  },
  {
    icon: <AddressBook size={20} />,
    iconActive: <AddressBook size={20} weight="duotone" />,
    title: "navigation.contacts",
    // href: ROUTES.contacts,
  },
  {
    icon: <HandCoins size={20} />,
    iconActive: <HandCoins size={20} weight="duotone" />,
    title: "navigation.distribution",
    // href: ROUTES.distribution,
  },
  {
    icon: <PresentationChart size={20} />,
    iconActive: <PresentationChart size={20} weight="duotone" />,
    title: "navigation.orders",
    // href: ROUTES.orders,
  },
  {
    icon: <Calculator size={20} />,
    iconActive: <Calculator size={20} weight="duotone" />,
    title: "navigation.accounting",
    // href: ROUTES.accounting,
  },
  {
    icon: <Clock size={20} />,
    iconActive: <Clock size={20} weight="duotone" />,
    title: "navigation.scheduling",
    // href: ROUTES.scheduling,
  },
  {
    icon: <ChartPieSlice size={20} />,
    iconActive: <ChartPieSlice size={20} weight="duotone" />,
    title: "navigation.inventory-management",
    // href: ROUTES["inventory-management"],
  },
  {
    icon: <Wrench size={20} />,
    iconActive: <Wrench size={20} weight="duotone" />,
    title: "navigation.service",
    // href: ROUTES.service,
  },
  {
    icon: <Folder size={20} />,
    iconActive: <Folder size={20} weight="duotone" />,
    title: "navigation.management",
    // href: ROUTES.management,
  },
];

export default function SidebarComponent() {
//   const dispatch = useDispatch();
//   const { t } = useTranslation();
  const pathname = usePathname();
//   const isOpen = useSelector(selectIsSidebarOpen);
//   const userId = useSelector(selectCurrentUserId);
//   const routing = useSelector(selectRouting);
//   const [currentUser, setCurrentUser] = useState<UserData>(testUser);

//   const [postData, { data, isLoading, isSuccess }] = usePostDataMutation();

//   useEffect(() => {
//     if (userId) {
//       const fetchData = async () => {
//         try {
//           await postData({
//             endpoint: "users/" + userId,
//             payload: {
//               fields: {
//                 "0": "id",
//                 "1": "mail",
//                 employees: {
//                   "0": "firstname",
//                   "1": "lastname",
//                   "2": "avatarsharelink",
//                 },
//               },
//             },
//           }).unwrap();
//         } catch (err) {
//           console.error("Fehler beim Abrufen der Daten:", err);
//         }
//       };
//       fetchData();
//     }
//   }, [userId, postData]);

//   useEffect(() => {
//     if (isSuccess && data) {
//       setCurrentUser({
//         id: data["users"][0].id,
//         mail: data["users"][0].mail,
//         firstname: data["users"][0].employees[0].firstname,
//         lastname: data["users"][0].employees[0].lastname,
//         roles: data["users"][0].employees[0].roles || ["User"],
//         avatar:
//           data["users"][0].employees[0].avatarsharelink ||
//           "https://w7.pngwing.com/pngs/737/513/png-transparent-homer-simpson-illustration-homer-simpson-the-simpsons-tapped-out-bart-simpson-marge-simpson-youtube-homer-springfield-hand-cartoon.png",
//         phone: data["users"][0].employees[0].phone || "",
//       });
//     }
//   }, [isSuccess, data]);

  return (
    <Sidebar
      className={clsx(
        "px-[1.15rem]",
        "h-full rounded-none border-0 border-r border-[var(--color-zinc-100)] shadow-none transition-all duration-500 sidebar-area text-[var(--color-zinc-600)]",
        "w-60"
      )}
    >
      <SidebarBody>
        {/* <Logo
          isWithTitle
          isAnimated
          toggleAnimation={isOpen}
          className="ml-1"
        /> */}

        {/* <Button
          onClick={() => dispatch(toggleSidebar())}
          variant="link"
          className={clsx(
            "px-3 py-2",
            "font-medium hover:bg-[var(--color-zinc-50)] normal-case hover:text-[var(--color-zinc-600)] text-[var(--color-zinc-600)] overflow-hidden w-full justify-start rounded-xl"
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-start relative h-5",
              "after:transition-all after:duration-500 after:content-[''] after:w-5 after:h-0.5 after:absolute after:rounded-md after:left-0 after:bg-[var(--color-zinc-600)]",
              "before:transition-all before:duration-500 before:content-[''] before:w-5 before:h-0.5 before:absolute before:rounded-md before:left-0 before:bg-[var(--color-zinc-600)]",
              isOpen
                ? "before:rotate-45 after:-rotate-45 after:top-1/2 before:top-1/2 w-5"
                : "after:top-3/4 before:top-1/4 w-5"
            )}
          >
            <div
              className={clsx(
                "relative w-40 transition-all duration-500",
                "before:content-[''] before:w-5 before:h-0.5 before:bg-[var(--color-zinc-600)] before:absolute before:rounded-md before:left-0 before:transition-all before:duration-500 before:top-1/2",
                isOpen ? "before:opacity-0" : "before:opacity-100"
              )}
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    className="pl-7"
                    initial={{ opacity: 0, x: 0, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: "auto" }}
                    exit={{ opacity: 0, x: 0, width: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {t("navigation.close-sidebar")}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Button> */}

        <SidebarList>
          {sidebarItems.map(({ title, icon, iconActive }) => {
            return (
              <SidebarItem
                key={title}
                className={clsx(
                  "px-3 py-2",
                  "text-[var(--color-zinc-600)] hover:bg-[var(--color-zinc-25)] justify-start font-medium overflow-hidden transition-all duration-500 rounded-xl",
                //   pathname.split("/")[1] === href.split("/")[1] &&
                    "bg-[var(--color-zinc-50)]"
                )}
              >
                {/* <TooltipProvider delayDuration={0}> */}
                  {/* <Tooltip open={isOpen ? false : undefined}> */}
                    <Button
                    //   href={getRouteWithRedux(href, routing)}
                      className={clsx("flex items-center gap-2")}
                    >
                      {/* <TooltipAction asChild>
                        {pathname.split("/")[1] === href.split("/")[1]
                          ? iconActive
                          : icon}
                      </TooltipAction> */}
                      {/* <TooltipContent
                        side="right"
                        className="ml-1 bg-[var(--color-zinc-700)]"
                      >
                        {t(title)}
                      </TooltipContent> */}
                      <span
                        className={clsx(
                          "transition-all duration-500", "opacity-100"
                        //   isOpen ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {title}
                      </span>
                    </Button>
                  {/* </Tooltip> */}
                {/* </TooltipProvider> */}
              </SidebarItem>
            );
          })}
        </SidebarList>
      </SidebarBody>

      {/* <SidebarList className="mt-auto">
        <SidebarItem
          className={clsx(
            "px-3 py-2",
            "text-[var(--color-zinc-600)] hover:bg-[var(--color-zinc-50)] justify-start font-medium overflow-hidden transition-all duration-500 mb-2 rounded-xl"
          )}
        >
          <TooltipProvider delayDuration={0}>
            <Tooltip open={isOpen ? false : undefined}>
              <Link
                href={ROUTES.home}
                className={clsx("flex items-center gap-2")}
              >
                <TooltipAction asChild>
                  <Bell size={20} />
                </TooltipAction>
                <TooltipContent
                  side="right"
                  className="ml-1 bg-[var(--color-zinc-700)]"
                >
                  {t("navigation.notifications")}
                </TooltipContent>

                <span
                  className={clsx(
                    "transition-all duration-500",
                    isOpen ? "opacity-100" : "opacity-0"
                  )}
                >
                  {t("navigation.notifications")}
                </span>
              </Link>
            </Tooltip>
          </TooltipProvider>
        </SidebarItem>
      </SidebarList> */}

      {/* <SidebarFooter>
        <Popover>
          <PopoverAction asChild>
            {isLoading ? (
              <Skeleton className="flex max-w-md items-center gap-3">
                <SkeletonLine className="h-12 w-12 rounded-full" />
                {isOpen && (
                  <div className="space-y-2">
                    <SkeletonLine className="h-2 w-[100px]" />
                    <SkeletonLine className="h-2 w-[100px]" />
                  </div>
                )}
              </Skeleton>
            ) : (
              <div
                className={clsx(
                  "flex items-center gap-2 overflow-hidden cursor-pointer rounded-xl hover:bg-[var(--color-zinc-50)] w-full"
                )}
              >
                <Avatar>
                  {currentUser.avatar ? (
                    <AvatarImage src={currentUser.avatar} alt="avatar" />
                  ) : (
                    <AvatarFallback>
                      {getInitials(
                        currentUser.firstname + " " + currentUser.lastname
                      )}
                    </AvatarFallback>
                  )}
                </Avatar>
                <p
                  className={clsx(
                    "font-medium text-sm text-nowrap transition-all duration-500",
                    isOpen ? "opacity-100" : "opacity-0"
                  )}
                >
                  {currentUser.firstname + " " + currentUser.lastname}
                </p>
              </div>
            )}
          </PopoverAction>
          <PopoverContent
            side="top"
            className="ml-4 text-[var(--color-zinc-600)]"
          >
            <div className="w-48 h-auto px-4 py-4 font-medium text-sm gap-2">
              <div className="flex flex-col items-center border-b border-t-metal-100 mb-4 pb-2">
                <Avatar className="mb-4">
                  {currentUser.avatar ? (
                    <AvatarImage src={currentUser.avatar} alt="avatar" />
                  ) : (
                    <AvatarFallback>
                      {getInitials(
                        currentUser.firstname + " " + currentUser.lastname
                      )}
                    </AvatarFallback>
                  )}
                </Avatar>
                <p>{currentUser.firstname + " " + currentUser.lastname}</p>
                <p>{currentUser.mail}</p>
              </div>

              <Button
                variant="link"
                className="w-auto flex items-center gap-2 hover:bg-[var(--color-zinc-50)] outline-none focus-visible:ring-0 normal-case"
              >
                <PencilLine size={20} />
                {t("navigation.edit-profile")}
              </Button>
              <LogoutButton withTitle />
            </div>
          </PopoverContent>
        </Popover>
      </SidebarFooter> */}
    </Sidebar>
  );
}
