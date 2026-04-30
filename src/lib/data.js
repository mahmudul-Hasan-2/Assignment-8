export const getAnimals = async () => {
  const res = await fetch(
    "https://assignment-8-psi-red.vercel.app/animals.json",
  );
  const animals = await res.json();
  return animals;
};
