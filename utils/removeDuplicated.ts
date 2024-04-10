export const RemoveDuplicatesById = (array: any) => {
  const map = new Map();

  // Iterate over each object in the array
  array.forEach((item: any) => {
    // Use the id property of the value object as the key in the Map
    map.set(item.value.id, item);
  });

  // Return an array containing the unique objects from the Map
  return Array.from(map.values());
};
