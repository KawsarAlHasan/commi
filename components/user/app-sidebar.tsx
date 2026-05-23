"use client";

import Link from "next/link";
import Image from "next/image";
import mainLogo2 from "@/public/images/main-logo-2.png";
import {
  BriefcaseBusiness,
  ChevronDown,
  Crosshair,
  Menu,
  User,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useEffect, useState, JSX } from "react";

type SettingsTab = "feedback" | "support" | "account";

const navItems = [
  { title: "Profile", url: "/", icon: User },
  { title: "Explore Jobs", url: "/explore-jobs", icon: BriefcaseBusiness },
  { title: "Job Tracker", url: "#", icon: Crosshair },
] as const;

const settingsNavItems: {
  id: SettingsTab;
  label: string;
  icon: JSX.Element;
}[] = [
  {
    id: "account",
    label: "Account details",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "feedback",
    label: "Give feedback",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: "support",
    label: "Support",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

// ─── Desktop Sidebar Toggle Button ───────────────────────────────────────────
// AdminLayout এর header এ import করে ব্যবহার করতে হবে
export function SidebarToggleButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
      className="
        hidden md:flex
        items-center justify-center
        h-8 w-8 rounded-lg
        text-[#6b7280]
        hover:bg-[#d9d9d9] hover:text-[#111827]
        transition-colors duration-150
      "
    >
      <Menu className="h-5 w-5" strokeWidth={2.2} />
    </button>
  );
}

// ─── Mobile Nav Bar ───────────────────────────────────────────────────────────
function MobileNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setEmail(Cookies.get("email"));
  }, []);

  const displayName = "Will Jacks";
  const userInitials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-[#3a3d46] bg-[#25272d] px-2 pb-safe pt-2 md:hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.url;
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.url}
              className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors ${
                isActive ? "text-white" : "text-[#9ca3af]"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  isActive ? "bg-[#3a3d46]" : ""
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-[10px] font-medium leading-none">
                {item.title}
              </span>
            </Link>
          );
        })}

        {/* Avatar / Drawer Toggle */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-[#9ca3af] transition-colors"
          aria-label="Open menu"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg">
            {email ? (
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#f59f84] to-[#8a5fe2] text-[10px] font-semibold text-white">
                {userInitials}
              </span>
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.2} />
            )}
          </span>
          <span className="text-[10px] font-medium leading-none">More</span>
        </button>
      </nav>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Bottom Sheet Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl border-t border-[#3a3d46] bg-[#25272d] px-4 pb-10 pt-4 transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#50545e]" />

        <div className="mb-4 flex items-center justify-between">
          <Image
            src={mainLogo2}
            alt="Commi"
            width={90}
            height={30}
            className="h-auto"
            priority
          />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="rounded-lg p-2 text-[#9ca3af] hover:bg-[#2f323b]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User profile */}
        <div className="mb-4 rounded-xl border border-[#3a3d46] bg-[#2f323b] p-3">
          {email ? (
            <button
              type="button"
              onClick={() => {
                router.push("/settings?tab=account");
                setDrawerOpen(false);
              }}
              className="flex w-full items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f59f84] to-[#8a5fe2] text-xs font-semibold text-white">
                {userInitials}
              </span>
              <div className="flex flex-1 flex-col text-left">
                <span className="text-sm font-semibold text-white">
                  {displayName}
                </span>
                <span className="text-xs text-[#c4c7ce]">{email}</span>
              </div>
              <ChevronDown
                className="h-4 w-4 text-[#d8d9de]"
                strokeWidth={2.2}
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                router.push("/auth");
                setDrawerOpen(false);
              }}
              className="flex w-full items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3a3d46] text-xs font-semibold text-white">
                <User className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-white">Login</span>
            </button>
          )}
        </div>

        {/* Settings navItems */}

        {email && (
          <>
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-widest text-[#50545e]">
              Settings
            </p>
            <div className="space-y-1">
              {settingsNavItems.map((item) => {
                const isActive =
                  pathname === "/settings" &&
                  (typeof window !== "undefined"
                    ? new URLSearchParams(window.location.search).get("tab") ===
                      item.id
                    : false);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      router.push(`/settings?tab=${item.id}`);
                      setDrawerOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors text-left ${
                      isActive
                        ? "bg-[#3a3d46] text-white"
                        : "text-[#c4c7ce] hover:bg-[#2f323b] hover:text-white"
                    }`}
                  >
                    <span
                      className={isActive ? "text-white" : "text-[#9ca3af]"}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ─── Desktop Sidebar ──────────────────────────────────────────────────────────
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setEmail(Cookies.get("email"));
  }, []);

  const displayName = "Will Jacks";
  const userInitials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <Sidebar
        {...props}
        collapsible="offcanvas"
        className="hidden border-r-0 bg-transparent p-3 md:flex"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="flex h-full flex-col rounded-2xl border border-[#3a3d46] bg-[#25272d] text-[#f3f4f6]">
          <SidebarHeader className="px-6 py-8">
            <div className="flex flex-col items-center">
              <Image
                src={mainLogo2}
                alt="Commi"
                width={120}
                height={40}
                className="h-auto w-25"
                priority
              />
            </div>
          </SidebarHeader>

          <SidebarContent className="px-4 pb-4">
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.url;
                const Icon = item.icon;
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className="relative overflow-visible"
                  >
                    <Link
                      href={item.url}
                      className={`flex items-center gap-3 rounded-md px-4 py-3 text-base leading-none transition-colors ${
                        isActive
                          ? "bg-[#2f323b] text-white"
                          : "text-[#f3f4f6] hover:bg-[#2f323b]"
                      }`}
                      style={{
                        fontFamily: "var(--font-geist-sans), sans-serif",
                      }}
                    >
                      <Icon className="h-5 w-5 shrink-0" strokeWidth={2.2} />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="mt-auto px-4 pb-4">
            {email ? (
              <button
                type="button"
                onClick={() => router.push("/settings")}
                className="w-full rounded-lg border border-[#50545e] px-3 py-2 text-left transition-colors hover:bg-[#2f323b] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <p className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f59f84] to-[#8a5fe2] text-xs font-semibold text-white shrink-0">
                    {userInitials}
                  </p>
                  <div className="flex flex-1 flex-col min-w-0">
                    <span className="text-sm font-semibold leading-tight truncate">
                      {displayName}
                    </span>
                    <span className="text-xs leading-tight text-[#c4c7ce]">
                      Settings
                    </span>
                  </div>
                  <ChevronDown
                    className="h-4 w-4 text-[#d8d9de] shrink-0"
                    strokeWidth={2.2}
                  />
                </div>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => router.push("/auth")}
                className="w-full rounded-lg border border-[#50545e] px-3 py-2 text-left transition-colors hover:bg-[#2f323b] cursor-pointer"
              >
                <span className="text-sm font-semibold leading-tight">
                  Login
                </span>
              </button>
            )}
          </SidebarFooter>
        </div>
        <SidebarRail />
      </Sidebar>

      {/* Mobile Bottom Navigation */}
      <MobileNavBar />
    </>
  );
}
