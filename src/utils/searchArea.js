export function getSearchAreas(expandForm = false, searchColumns = []) {
  const searchLen = searchColumns.length;
  const rowSearchColumns = [];
  let columns = [];
  let md = 3;
  if (searchLen <= md) {
    md = searchLen < md ? 3 : 4;
    searchColumns.forEach((column, index) => {
      if (index % md === 0) {
        columns = [];
        rowSearchColumns.push(columns);
      }
      columns.push(column);
    });
  }  else {
    const len3 = (searchLen + 1) % 3;
    const len4 = (searchLen + 1) % 4;
    if (len3 === 0 || len4 === 0) {
      md = len3 === 0 ? 3 : 4;
    } else if (len3 > len4 || len4 > len3) {
      md = len3 > len4 ? 3 : 4;
    } else {
      md = 3;
    }
    if (expandForm) {
      searchColumns.forEach((column, index) => {
        if (index % md === 0) {
          columns = [];
          rowSearchColumns.push(columns);
        }
        columns.push(column);
      });
    } else {
      md = 4;
      searchColumns.forEach((column, index) => {
        if (index < 3) {
          if (index % 3 === 0) {
            columns = [];
            rowSearchColumns.push(columns);
          }
          columns.push(column);
        }
      });
    }
  }
  return {rowSearchColumns, md};
}
