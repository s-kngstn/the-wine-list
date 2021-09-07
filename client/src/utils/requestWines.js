export async function requestWines(
  wine,
  wineBody,
  wineSweetness,
  wineAcidity,
  wineTannins,
  setWines
) {
  const typeEndpoint = `type=${wine}`;
  const bodyEndpoint = `body=${wineBody}`;
  const acidEndpoint = `acidity=${wineAcidity}`;
  const sweetEndpoint = `sweetness=${wineSweetness}`;
  const tanninEndpoint = `tannins=${wineTannins}`;

  // const wineArr = [wine, wineBody, wineAcidity, wineSweetness, wineTannins];
  const endpointArr = [
    typeEndpoint,
    bodyEndpoint,
    acidEndpoint,
    sweetEndpoint,
    tanninEndpoint,
  ];
  
  // Refactor with a loop 
  if (wine === "") {
    const index = endpointArr.indexOf(typeEndpoint);
    console.log(index);

    if (index > -1) {
      endpointArr.splice(index, 1);
    }
  }

  if (wineBody === "") {
    const index = endpointArr.indexOf(bodyEndpoint);
    console.log(index);

    if (index > -1) {
      endpointArr.splice(index, 1);
    }
  }

  if (wineAcidity === "") {
    const index = endpointArr.indexOf(acidEndpoint);
    console.log(index);

    if (index > -1) {
      endpointArr.splice(index, 1);
    }
  }

  if (wineSweetness === "") {
    const index = endpointArr.indexOf(sweetEndpoint);
    console.log(index);

    if (index > -1) {
      endpointArr.splice(index, 1);
    }
  }

  if (wineTannins === "") {
    const index = endpointArr.indexOf(tanninEndpoint);
    console.log(index);

    if (index > -1) {
      endpointArr.splice(index, 1);
    }
  }

  const PORT = process.env.PORT; 
  const api = `http://localhost:${PORT}/wine?`;

  const apiCall = api + endpointArr.join("&");
  const res = await fetch(apiCall);
  const json = await res.json();
  const data = json.data.wines
  console.log(data)
  setWines(data);
  return;
}
