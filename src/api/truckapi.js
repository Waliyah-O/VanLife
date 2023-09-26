function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export async function getTrucks(id) {
  const url = id ? `/api/trucks/${id}` : "/api/trucks";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch trucks",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.trucks;
}

export async function getHostTrucks(id) {
  const url = id ? `/api/host/trucks/${id}` : "/api/host/trucks";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch trucks",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.trucks;
}
