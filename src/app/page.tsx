"use client";

import styles from "./page.module.css";
import ClientForm from "./components/ClientForm";
import { useState } from "react";
import { Client } from "./models";

export default function Home() {
  const [clients, setClients] = useState<Client[]>([]);

  const addClient = (newClient: Client) => {
    setClients([...clients, newClient]);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Client</h1>
      <ClientForm onSubmit={addClient} />
      <h2>Clients:</h2>
      <ul>
        {clients.map((client, index) => (
          <li
            key={index}
            style={{
              color: "black",
            }}
          >
            {client.firstName} {client.lastName} - {client.profession}
          </li>
        ))}
      </ul>
    </main>
  );
}
