import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import Link from 'next/link';
import { TwitterLogo } from 'phosphor-react';
import { Fragment } from 'react';

const Navbar: NextPage = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: 'https://github.com/itsjon4s?tab=repositories' },
    { name: 'About', href: '/about' }
  ];

  return (
    <>
      <div className="min-h-full mt-4">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Link href="/">
                      <TwitterLogo className="text-6xl" />
                    </Link>
                    <div className="hidden md:block">
                      <div className="ml-5 flex items-baseline space-x-4">
                        {navigation.map(item => (
                          <a key={item.name} href={item.href} className="hover:bg-[#313244] px-2 py-2 rounded-md text-xl font-semibold" aria-current={'page'}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6"></div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ">
                      {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Disclosure.Panel className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map(item => (
                      <Disclosure.Button key={item.name} as="a" href={item.href} className="block px-3 py-2 rounded-md text-xl font-medium" aria-current="page">
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Navbar;
