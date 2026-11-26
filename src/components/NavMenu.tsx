import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <>
      {/* Menu hamburguesa responsive */}
      <Popover className="relative lg:hidden">
        <PopoverButton className="p-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 cursor-pointer transition-colors">
          <Bars3Icon className="w-8 h-8 text-white" />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-xs -translate-x-1/2 px-4 transition duration-200 ease-in-out opacity-100 translate-y-0 data-closed:opacity-0 data-closed:translate-y-1"
        >
          <div className="w-full shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <p className="text-center border-b border-gray-100 pb-2 mb-1">
              Hello: User
            </p>
            <Link to="/profile" className="block p-2 hover:text-emerald-700">
              My Profile
            </Link>
            <Link to="/" className="block p-2 hover:text-emerald-700">
              My Projects
            </Link>
            <button
              className="block p-2 hover:text-emerald-700 w-full cursor-pointer text-left"
              type="button"
              onClick={() => {}}
            >
              Log Out
            </button>
          </div>
        </PopoverPanel>
      </Popover>

      {/* En linea en escritorio */}
      <nav className="hidden lg:flex lg:items-center lg:gap-6 px-5 text-sm font-semibold text-zinc-200">
        <p className="text-zinc-400">
          Hello: <span className="text-white">User</span>
        </p>
        <span className="h-4 w-px bg-zinc-700" aria-hidden="true" />
        <Link
          to="/profile"
          className="hover:text-emerald-400 transition-colors"
        >
          My Profile
        </Link>
        <Link to="/" className="hover:text-emerald-400 transition-colors">
          My Projects
        </Link>
        <button
          type="button"
          onClick={() => {}}
          className="rounded-lg bg-emerald-600 px-3.5 py-1.5 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
        >
          Log Out
        </button>
      </nav>
    </>
  );
}
