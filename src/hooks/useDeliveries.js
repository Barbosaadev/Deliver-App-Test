import { useState, useEffect } from 'react';

const uuid = () => Math.random().toString(36).substring(2, 9);

export const setDeliveriesToLocalStorage = (key = 'deliveries', value = new Map([])) => {
  window.localStorage.setItem(
    key,
    JSON.stringify(Array.from(value.entries()))
  );
};

export const getDeliveriesFromLocalStorage = (key = "deliveries") => {
  try {
    return new Map(JSON.parse(window.localStorage.getItem(key) || '[]'));
  } catch (e) {
    return new Map();
  }
};

export const useDeliveries = (key = "deliveries") => {
  const [deliveries, setDeliveries] = useState(getDeliveriesFromLocalStorage(key));

  const addDelivery = ({description, title, date, toggle}) => {
    setDeliveries((prev) => {
      const next = new Map(prev);
      const id = uuid();
      next.set(id, {
        id,
        title,
        description,
        date,
        toggle
      });
      return next;
    });
  };

  const updateDelivery = (id, {description, title, date, toggle}) => {
    setDeliveries((prev) => {
      if (prev.has(id)) {
        const next = new Map(prev);
        next.set(id, {
          id,
          title,
          description,
          date,
          toggle
        });
        return next;
      }
      return prev;
    });
  };

  const removeDelivery = (id) => {
    setDeliveries((prev) => {
      if (prev.has(id)) {
        const next = new Map(prev);
        next.delete(id);
        return next;
      }
      return prev;
    });
  };

  const removeDeliveries = (ids) => {
    setDeliveries((prev) => {
      const next = new Map(prev);
      ids.forEach((id) => {
        if (next.has(id)) {
          next.delete(id);
        }
      });
      return next;
    });
  };

  useEffect(() => {
    setDeliveriesToLocalStorage(key, deliveries);
  }, [deliveries]);

  return {
    deliveries,
    addDelivery,
    updateDelivery,
    removeDelivery,
    removeDeliveries
  };
};

export default useDeliveries;