export const filterProductBySearch = (P, C) => {     
  return (C !== null) 
    ? P.filter(I => I.name.toLowerCase().includes(C.toLowerCase()))
    : P
} 