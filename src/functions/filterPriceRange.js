export const filterPriceRange = (P, PR) => {   
  return (PR !== null) 
    ? P.filter(I => I.price >= PR.min 
        & (PR.max != null) ? I.price <= PR.max : true 
      )
    : P
} 