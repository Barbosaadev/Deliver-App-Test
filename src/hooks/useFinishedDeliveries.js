import { useEffect, useState } from "react"

const getFinishedDeliveriesFromLocalStorage = (key = "deliveries") => {
  try {
    return new Map(JSON.parse(window.localStorage.getItem(`finished-${key}`) || "[]"))
  } catch (e) {
    return new Map()
  }
}

const setFinishedDeliveriesToLocalStorage = (key = "deliveries", value = new Map([])) => {
  window.localStorage.setItem(`finished-${key}`, JSON.stringify(Array.from(value.entries())))
}

export const useFinishedDeliveries = (value = new Map([]), key = "deliveries") => {
  const [finishedDeliveries, setFinishedDeliveries] = useState(getFinishedDeliveriesFromLocalStorage(key))

  const selectFinishedDelivery = (id) => {
    setFinishedDeliveries((prev) => {
      const next = new Map(prev)
      next.set(id, value.get(id))
      return next
    })
  }

  const unselectFinishedDelivery = (id) => {
    setFinishedDeliveries((prev) => {
      const next = new Map(prev)
      next.delete(id)
      return next
    })
  }

  const areThereAnyFinishedDeliveries = value.size > 0

  useEffect(() => {
    setFinishedDeliveries((prev) => {
      const next = new Map(prev)
      next.forEach((p) => {
        if (p && !value.has(p.id)) {
          next.delete(p.id)
        }
      })
      return next
    })
  }, [value])

  useEffect(() => {
    setFinishedDeliveriesToLocalStorage("deliveries", finishedDeliveries)
  }, [finishedDeliveries])

  return {
    finishedDeliveries,
    areThereAnyFinishedDeliveries,
    selectFinishedDelivery,
    unselectFinishedDelivery,
  }
}

export default useFinishedDeliveries
