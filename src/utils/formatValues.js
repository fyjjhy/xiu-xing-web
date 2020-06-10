export function formatValues(values, searchColumns) {
  const params = { ...values };
  searchColumns.forEach((column) => {
    if (column.searchFlag === 'Y' && column.displayType === 'I') {
      if (params[column.columnCode]) {
        params[column.columnCode] = params[column.columnCode].replace(/\s+/g, '');
      }
    }
  });
  return params;
}
