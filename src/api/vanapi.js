/************* FIREBASE *******************/

// import { initializeApp } from "firebase/app";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   getFirestore,
//   query,
//   where,
// } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyBlpBj1M6Yo2UaMkHaSFGJNe1AcmEA4UhM",
//   authDomain: "rentarig-dab3e.firebaseapp.com",
//   projectId: "rentarig-dab3e",
//   storageBucket: "rentarig-dab3e.appspot.com",
//   messagingSenderId: "586926698268",
//   appId: "1:586926698268:web:a1c038c6f74e86897b14d9",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const vansCollectionRef = collection(db, "vans");

// export async function getVans() {
//   const querySnapshot = await getDocs(vansCollectionRef);
//   const dataArray = querySnapshot.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));

//   // console.log(dataArray);
//   return dataArray;
// }

// export async function getVan(id) {
//   const docRef = doc(db, "vans", id);
//   const vanSnapshot = await getDoc(docRef);
//   return {
//     ...vanSnapshot.data(),
//     id: vanSnapshot.id,
//   };
// }

// export async function getHostVans() {
//   const q = query(vansCollectionRef, where("hostId", "==", "123"));
//   const querySnapshot = await getDocs(vansCollectionRef);
//   const dataArray = querySnapshot.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));

//   // console.log("FIREBASE");
//   return dataArray;
// }

function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(url);

  // Randomly decide whether to throw an error
  const shouldThrowError = Math.random() >= 0.5;

  if (shouldThrowError) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  // if (!res.ok) {
  //   throw {
  //     message: "Failed to fetch vans",
  //     statusText: res.statusText,
  //     status: res.status,
  //   };
  // }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
