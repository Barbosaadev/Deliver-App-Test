import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/index.css"
import AppContainer from './containers/AppContainer';
import { getDeliveriesFromLocalStorage, setDeliveriesToLocalStorage } from './hooks/useDeliveries';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(getDeliveriesFromLocalStorage("deliveries").size === 0) {
  const deliveries = new Map();
  deliveries.set("868077t", {id: "868077t", title: "Pacote 1", date: "21/07/2021", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself who seeks after it and wants to have it simply because it is pain..."});
  deliveries.set("st1v6wy", {id: "st1v6wy", title: "Pacote 2", date: "19/09/2021", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself who seeks after it and wants to have it simply because it is pain..."});
  deliveries.set("8a4chfr", {id: "8a4chfr", title: "Pacote 3", date: "09/11/2021", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself who seeks after it and wants to have it simply because it is pain..."});
  setDeliveriesToLocalStorage("deliveries", deliveries)
}

root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
