// Reference from TailwindCSS Docs
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MenuItem = ({ itemName, itemHREF }) => {
  console.log(itemName, itemHREF);
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={itemHREF}
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          <span className="capitalize">{itemName}</span>
        </a>
      )}
    </Menu.Item>
  );
};
const DropDown = ({ name, items }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <span className="capitalize">{name}</span>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {items.map((item) => (
            <MenuItem {...item} />
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};
export default DropDown;
