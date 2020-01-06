export const filterProductByCategory = (P, C) => {    
  return (C !== "All") 
    ? P.filter(I => I.category === C )
    : P
} 