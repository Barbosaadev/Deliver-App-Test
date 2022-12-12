import React from 'react';
import clsx from 'clsx';
import { DeliveriesListItemActionsMenu } from './DeliveriesListItemActionsMenu';

export const DeliveriesListItem = ({
  id,
  title,
  date,
  description,
  showSelector,
  showActionsMenu,
  selected,
  finishedSelect,
  onSelectDelivery,
  onUnselectDelivery,
  onUnselectFinishedDelivery,
  onEditDelivery,
  onRemoveDelivery,
  onSelectFinishedDelivery
}) => {
  const delivery = {
    id,
    title,
    date,
    description,
  };

  const onToggleSelectHandler = (e) => {
    if (e.target.checked && onSelectDelivery) {
      onSelectDelivery(delivery);
      return;
    }
    if (!e.target.checked && onUnselectDelivery) {
      onUnselectDelivery(delivery);
    }
  };

  const onToggleSelectFinishedHandler = (e) => {
    if (e.target.checked && onSelectFinishedDelivery) {
      onSelectFinishedDelivery(delivery);
      return;
    }
    if (!e.target.checked && onUnselectFinishedDelivery) {
      onUnselectFinishedDelivery(delivery);
    }
  };


  return (
    <li className={(selected && 'bg-gray-50') || ''}>
      <div className="flex items-center px-4 py-6">
        {showSelector && (
          <input
            type="checkbox"
            className="mr-4 w-4 h-4 accent-gray-500"
            checked={selected}
            onChange={onToggleSelectHandler}
          />
        )}
        <div className=" flex items-center">
          <h2 className={clsx('text-xl mr-4', selected && 'font-semibold')}>
            {title}
          </h2>
          <span className="uppercase text-xs px-2 py-1 border text-gray-600 border-gray-200 bg-gray-50 rounded-md">
            {date}
          </span>
          <span className="uppercase text-xs px-2 py-1 ml-4 border text-gray-600 border-gray-200 bg-gray-50 rounded-md">
            Has been delivered?
          </span>
          <input
            type="checkbox"
            className="ml-4 w-4 h-4 accent-lime-600"
            checked={finishedSelect}
            onChange={onToggleSelectFinishedHandler}
          />
        </div>
        <div className="flex items-center ml-auto">
          {showActionsMenu && (
            <DeliveriesListItemActionsMenu
              delivery={delivery}
              onEditDelivery={onEditDelivery}
              onRemoveDelivery={onRemoveDelivery}
            />
          )}
        </div>
      </div>
      <p className="uppercase text-xs px-2 py-1 border w-96 mb-4 text-gray-600 border-gray-200 bg-gray-50 rounded-md">
          {description}
          </p>
    </li>
  );
};

export default DeliveriesListItem
