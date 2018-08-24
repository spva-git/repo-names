export const taskListMapper = ({ results }) => {
  return results.map(({ name }) => {
    return name;
  });
};
