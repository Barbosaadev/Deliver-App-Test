import { Menu } from "@headlessui/react"
import clsx from "clsx"
import DotsVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon"
import TrashIcon from "@heroicons/react/24/outline/TrashIcon"
import FolderAddIcon from "@heroicons/react/24/outline/FolderIcon"
import PlusIcon from "@heroicons/react/24/outline/PlusIcon"

export const DeliveriesListActionsMenu = ({
  onAddDelivery,
  onSelectAllDeliveries,
  onUnselectAllDeliveries,
  onRemoveSelectedDeliveries,
  areAllDeliveriesSelected,
  areThereAnySelectedDeliveries,
  areThereAnyDeliveries,
}) => {
  return (
    <menu className="space-x-1 flex justify-end sm:justify-start">
      <button className="px-3 py-2 text-sm rounded-md border border-gray-200 flex hover:bg-gray-100" onClick={onAddDelivery}>
        <PlusIcon className="h-5 w-5 mr-1" />
        Add
      </button>
      <button
        className={clsx(
          "px-3 py-2 text-sm rounded-md border border-gray-200 hidden enabled:hover:bg-gray-100 disabled:opacity-25 sm:flex",
          areAllDeliveriesSelected && "enabled:bg-gray-200  enabled:hover:bg-gray-300"
        )}
        onClick={(areAllDeliveriesSelected && onUnselectAllDeliveries) || onSelectAllDeliveries}
        disabled={!areThereAnyDeliveries}
      >
        <FolderAddIcon className="h-5 w-5 mr-1" />
        Select all
      </button>
      <button
        className="px-3 py-2 text-sm frounded-md border hidden rounded-md border-red-50 enabled:hover:text-red-500 enabled:hover:bg-red-500/5 disabled:opacity-25 sm:flex"
        onClick={onRemoveSelectedDeliveries}
        disabled={!areThereAnySelectedDeliveries}
      >
        <TrashIcon className="h-5 w-5 mr-1" />
        Remove selected
      </button>
      <Menu as="div" className="relative sm:hidden">
        <Menu.Button className="px-3 py-2">
          <DotsVerticalIcon className="h-5 w-5 text-gray-400" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 z-10 mt-4 w-48 divide-y border border-gray-200 divide-gray-100 rounded-md bg-white shadow-2xl">
          <div className="space-y-1 p-2">
            <Menu.Item>
              <button
                className={clsx(
                  "px-3 py-2 text-sm rounded-md border border-gray-200 enabled:hover:bg-gray-100 disabled:opacity-25 flex w-full",
                  areAllDeliveriesSelected && "enabled:bg-gray-200 enabled:hover:bg-gray-300"
                )}
                disabled={!areThereAnyDeliveries}
                onClick={areAllDeliveriesSelected ? onUnselectAllDeliveries : onSelectAllDeliveries}
              >
                <FolderAddIcon className="h-5 w-5 mr-1" />
                Select all
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className="px-3 py-2 text-sm frounded-md border rounded-md border-red-50 enabled:hover:text-red-500 enabled:hover:bg-red-500/5 disabled:opacity-25 flex w-full"
                onClick={onRemoveSelectedDeliveries}
                disabled={!areThereAnySelectedDeliveries}
              >
                <TrashIcon className="h-5 w-5 mr-1" />
                Remove selected
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </menu>
  )
}

export default DeliveriesListActionsMenu
