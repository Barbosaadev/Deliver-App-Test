import { useState } from "react"
import View from "../../components/View"
import { DeliveriesList } from "../../components/DeliveriesList"
import { DeliveryEditModal } from "../../components/DeliveryEditModal"
import useDeliveryEditForm from "../../components/DeliveryEditForm/useDeliveryEditForm"

import useDeliveries from "../../hooks/useDeliveries"
import useSelectedDeliveries from "../../hooks/useSelectedDeliveries"
import useFinishedDeliveries from "../../hooks/useFinishedDeliveries"

export const DeliveryViewContainer = () => {
  const { deliveries, addDelivery, updateDelivery, removeDelivery, removeDeliveries } = useDeliveries("deliveries")

  const {
    areAllDeliveriesSelected,
    areThereAnySelectedDeliveries,
    areThereAnyDeliveries,
    selectDelivery,
    selectedDeliveries,
    unselectDelivery,
    selectAllDeliveries,
    unselectAllDeliveries,
  } = useSelectedDeliveries(deliveries, "deliveries")

  const { finishedDeliveries, areThereAnyFinishedDeliveries, selectFinishedDelivery, unselectFinishedDelivery } =
    useFinishedDeliveries(deliveries, "deliveries")

  const [modalOpen, setModalOpen] = useState(false)

  const editForm = useDeliveryEditForm({
    onSubmit: (values, helpers) => {
      if (!values) {
        return
      }

      setModalOpen(true)

      if (values.id) {
        updateDelivery(values.id, {
          title: values.title,
          date: values.date,
          description: values.description,
        })
      } else {
        addDelivery({
          title: values.title,
          date: values.date,
          description: values.description,
        })
      }

      setModalOpen(false)

      helpers.resetForm()
    },
  })

  const onAddDelivery = () => {
    setModalOpen(true)
  }

  const onEditDelivery = (delivery) => {
    setModalOpen(true)
    editForm.setValues(delivery)
  }

  const onRemoveDelivery = (delivery) => {
    removeDelivery(delivery.id)
  }

  const onRemoveSelectedDeliveries = () => {
    const ids = Array.from(selectedDeliveries.values()).map((delivery) => (delivery && delivery.id) || "")
    removeDeliveries(ids)
  }

  const onSelectDelivery = (delivery) => {
    selectDelivery(delivery.id)
  }

  const onUnselectDelivery = (delivery) => {
    unselectDelivery(delivery.id)
  }

  const onSelectAllDeliveries = () => {
    selectAllDeliveries()
  }

  const onUnselectAllDeliveries = () => {
    unselectAllDeliveries()
  }

  const onCloseDeliveryEditModal = () => {
    setModalOpen(false)
    editForm.resetForm()
  }

  const onSelectFinishedDelivery = (delivery) => {
    selectFinishedDelivery(delivery.id)
  }

  const onUnselectFinishedDelivery = (delivery) => {
    unselectFinishedDelivery(delivery.id)
  }

  return (
    <View title="Your Deliveries">
      <DeliveriesList
        deliveries={deliveries}
        selectedDeliveries={selectedDeliveries}
        finishedDeliveries={finishedDeliveries}
        showSelector
        showBookmarker
        showActionsMenu
        areAllDeliveriesSelected={areAllDeliveriesSelected}
        areThereAnySelectedDeliveries={areThereAnySelectedDeliveries}
        areThereAnyFinishedDeliveries={areThereAnyFinishedDeliveries}
        areThereAnyDeliveries={areThereAnyDeliveries}
        onAddDelivery={onAddDelivery}
        onEditDelivery={onEditDelivery}
        onRemoveDelivery={onRemoveDelivery}
        onRemoveSelectedDeliveries={onRemoveSelectedDeliveries}
        onSelectDelivery={onSelectDelivery}
        onSelectFinishedDelivery={onSelectFinishedDelivery}
        onSelectAllDeliveries={onSelectAllDeliveries}
        onUnselectDelivery={onUnselectDelivery}
        onUnselectFinishedDelivery={onUnselectFinishedDelivery}
        onUnselectAllDeliveries={onUnselectAllDeliveries}
      />
      <DeliveryEditModal open={modalOpen} onClose={onCloseDeliveryEditModal} formProps={editForm} />
    </View>
  )
}

export default DeliveryViewContainer
