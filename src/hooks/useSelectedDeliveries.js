import { useEffect, useState } from 'react';

const getSelectedDeliveriesFromLocalStorage = (key = "deliveries") => {
try {
    return new Map(
    JSON.parse(window.localStorage.getItem(`selected-${key}`) || '[]')
    );
} catch (e) {
    return new Map();
}
};

const setSelectedDeliveriesToLocalStorage = (key = "deliveries", value = new Map([])) => {
    window.localStorage.setItem(`selected-${key}`,JSON.stringify(Array.from(value.entries()))
);
};

export const useSelectedDeliveries = (value = new Map([]), key = "deliveries") => {
const [selectedDeliveries, setSelectedDeliveries] = useState(
    getSelectedDeliveriesFromLocalStorage(key)
);

const selectDelivery = (id) => {
    setSelectedDeliveries((prev) => {
    const next = new Map(prev);
    next.set(id, value.get(id));
    return next;
    });
};

const unselectDelivery = (id) => {
    setSelectedDeliveries((prev) => {
    const next = new Map(prev);
    next.delete(id);
    return next;
    });
};

const selectAllDeliveries = () => {
    setSelectedDeliveries(new Map(value));
};

const unselectAllDeliveries = () => {
    setSelectedDeliveries(new Map());
};

const areAllDeliveriesSelected = selectedDeliveries.size > 0 && selectedDeliveries.size === value.size;

const areThereAnySelectedDeliveries = selectedDeliveries.size > 0;
const areThereAnyDeliveries = value.size > 0;

useEffect(() => {
    setSelectedDeliveries((prev) => {
    const next = new Map(prev);
    next.forEach((p) => {
        if (p && !value.has(p.id)) {
        next.delete(p.id);
        }
    });
    return next;
    });
}, [value]);

useEffect(() => {
    setSelectedDeliveriesToLocalStorage("deliveries", selectedDeliveries);
}, [selectedDeliveries]);

return {
    selectedDeliveries,
    areAllDeliveriesSelected,
    areThereAnySelectedDeliveries,
    areThereAnyDeliveries,
    selectDelivery,
    unselectDelivery,
    selectAllDeliveries,
    unselectAllDeliveries
};
};

export default useSelectedDeliveries;