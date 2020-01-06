export const sortProducts = (P, ST) => { 
  switch (ST) {
    case 'price_ascending':
      return P.sort((A, B) => A.price - B.price) 
    case 'price_descending':
      return P.sort((A, B) => B.price - A.price) 
    case 'date_ascending': 
      return P.sort((A, B) => 
        new Date(A.dateAdded.seconds * 1000) 
        - new Date(B.dateAdded.seconds * 1000)
      ) 
    case 'date_descending': 
      return P.sort((A, B) => 
        new Date(B.dateAdded.seconds * 1000) 
        - new Date(A.dateAdded.seconds * 1000)
      ) 
    case 'rating_ascending':
      return P.sort((A, B) => A.rating - B.rating)
    case 'rating_descending':
      return P.sort((A, B) => B.rating - A.rating)
    default: return P  
  }   
} 