const fetchProfileMember = async () => {

  const response = await fetch('http://localhost:5500/profile-members.json');

  const data = await response.json(); //convert from json to object (javascript)
  console.log(`==> Response JSON to object: ${data}`);

  const objectToJson = JSON.stringify(data); // convert from object to json
  console.log(`==> Response object to json: ${objectToJson}`);

  const jsonToObjectUsingParse = JSON.parse(objectToJson); // convert from json to object
  console.log(`==> Response json to object: ${jsonToObjectUsingParse}`);
}

fetchProfileMember();