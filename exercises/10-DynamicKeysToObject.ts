const createCache = () => {
  // Can be solved by using index signatures
  const cache: { [index: string]: string } = {};
  // OR
  // const cache: Record<string, string> = {};
  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

const cache = createCache();
cache.cache["2"] = "2";
