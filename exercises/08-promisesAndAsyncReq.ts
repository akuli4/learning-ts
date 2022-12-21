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

const fetchLukeSkywalker = async (): IPerson => {
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
