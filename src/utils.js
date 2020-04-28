export const onchange = (games, searchText, checkedBrands) => {
  let newState = [];
  const text = searchText === "" ? "" : searchText.toLowerCase();
  newState = games.filter(item => {
    return (
      checkedBrands.includes(item.brand) &&
      item.name.toLowerCase().indexOf(text) !== -1
    );
  });

  return { newState, searchText, checkedBrands };
};

export const debounce = (func, delay = 300) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
