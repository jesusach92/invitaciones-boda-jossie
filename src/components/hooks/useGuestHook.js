import { useEffect, useState } from "react";

function getQueryParam(param){
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

export function useGuestHook() {
  const [family, setFamily] = useState(null);

  useEffect(() => {
    const code = getQueryParam("code");
    if (!code) return;

    fetch("/assets/Guests/guests.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.code === code);
        setFamily(found || null);
      })
      .catch((err) => {
        console.error("Error cargando familias:", err);
      });
  }, []);

  return family;
}
