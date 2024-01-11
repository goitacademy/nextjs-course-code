const getCountById = <T extends string, I extends Record<T, string>>(
  items: I[],
  idKey: T,
) =>
  items.reduce(
    (counts, { [idKey]: id }) => {
      if (!counts[id]) counts[id] = 0;
      counts[id] += 1;
      return counts;
    },
    {} as Record<string, number>,
  );

export default getCountById;
