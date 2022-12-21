interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const fetchLukeSkywalker = async (): Promise<IPerson> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json()
  );
  return data;
};

/*
		This function will not return a person straight away,
	instead it will return a Promise representing a Person
	that will eventually resolve into a Person
*/
const Luke = fetchLukeSkywalker();

// Another aproach would be:
// Since we return IPerson as a promise, TS makes function return Promise<IPerson>
const fetchLukeSkywalker2 = async () => {
  const data: IPerson = await fetch("https://swapi.dev/api/people/1").then(
    (res) => res.json()
  );
  return data;
};

// Last  aproach would be:
/*
	Since we dont know what this url will return we can CAST the return
	value to explicitly be set to LukeSkywalker Type.
*/
const fetchLukeSkywalker3 = async () => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json()
  );
  return data as IPerson;
};
