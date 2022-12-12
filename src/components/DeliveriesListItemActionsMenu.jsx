import { Menu } from '@headlessui/react';

import DotsVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import PencilAltIcon from '@heroicons/react/24/outline/PencilIcon';

export const DeliveriesListItemActionsMenu = ({
  delivery,
  onEditDelivery,
  onRemoveDelivery
}) => {
  const onEditDeliveryHandler = () => {
    if (delivery && onEditDelivery) {
      onEditDelivery(delivery);
    }
  };

  const onRemoveDeliveryHandler = () => {
    if (delivery && onRemoveDelivery) {
      onRemoveDelivery(delivery);
    }
  };
  return (
    <Menu as="menu" className="relative space-x-1">
      <Menu.Button className="px-3 py-2">
        <DotsVerticalIcon className="h-5 w-5 text-gray-400" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-8 w-48 divide-y border border-gray-200 divide-gray-100 rounded-md bg-white shadow-2xl">
        <div className="space-y-1 p-2">
          <Menu.Item>
            <button
              className="px-3 py-2 text-sm rounded-md  border border-gray-200  hover:bg-gray-100 flex w-full"
              onClick={onEditDeliveryHandler}
            >
              <PencilAltIcon className="h-5 w-5 mr-1" />
              Edit
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              className="px-3 py-2 text-sm frounded-md border rounded-md border-red-50 hover:text-red-500 hover:bg-red-500/5 flex w-full"
              onClick={onRemoveDeliveryHandler}
            >
              <TrashIcon className="h-5 w-5 mr-1" />
              Remove
            </button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default DeliveriesListItemActionsMenu
