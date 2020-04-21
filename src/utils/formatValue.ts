const { format: formatValue } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export default formatValue;
