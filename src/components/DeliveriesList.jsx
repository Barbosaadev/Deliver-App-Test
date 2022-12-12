import { DeliveriesListItem } from './DeliveriesListItem';
import { DeliveriesListActionsMenu } from './DeliveriesListActionsMenu';

export const DeliveriesList = ({
  deliveries,
  selectedDeliveries,
  finishedDeliveries,
  showSelector,
  showActionsMenu,
  areAllDeliveriesSelected,
  areThereAnySelectedDeliveries,
  areThereAnyDeliveries,
  onAddDelivery,
  onEditDelivery,
  onRemoveDelivery,
  onRemoveSelectedDeliveries,
  onSelectDelivery,
  onSelectFinishedDelivery,
  onSelectAllDeliveries,
  onUnselectDelivery,
  onUnselectAllDeliveries,
  onUnselectFinishedDelivery
}) => {
  return (
    <section className="space-y-4">
      {showActionsMenu && (
        <DeliveriesListActionsMenu
          onAddDelivery={onAddDelivery}
          onSelectAllDeliveries={onSelectAllDeliveries}
          onUnselectAllDeliveries={onUnselectAllDeliveries}
          onRemoveSelectedDeliveries={onRemoveSelectedDeliveries}
          areAllDeliveriesSelected={areAllDeliveriesSelected}
          areThereAnySelectedDeliveries={areThereAnySelectedDeliveries}
          areThereAnyDeliveries={areThereAnyDeliveries}
        />
      )}
      <ul className="divide-y">
        {deliveries &&
          Array.from(deliveries.values()).map((delivery) => {
            if (delivery) {
              return (
                <DeliveriesListItem
                  {...delivery}
                  key={delivery.id}
                  selected={selectedDeliveries?.has(delivery.id)}
                  finishedSelect={finishedDeliveries?.has(delivery.id)}
                  showSelector={showSelector}
                  showActionsMenu={showActionsMenu}
                  onEditDelivery={onEditDelivery}
                  onRemoveDelivery={onRemoveDelivery}
                  onSelectDelivery={onSelectDelivery}
                  onSelectFinishedDelivery={onSelectFinishedDelivery}
                  onUnselectDelivery={onUnselectDelivery}
                  onUnselectFinishedDelivery={onUnselectFinishedDelivery}
                />
              );
            } else {
              return null;
            }
          })}
      </ul>
    </section>
  );
};

export default DeliveriesList