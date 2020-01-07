import styled from 'styled-components'
import { ProductItem } from '../ProductItem'

export const List = styled.div`
  display: flex;
  align-items: flex-start; 
  flex-wrap: wrap; 
  margin: 0 -9px;

  & > div {
    margin: 0 9px;
    flex-wrap: wrap;
  }
`
export const Item = styled(ProductItem)`
  margin-bottom: 25px !important;
  height: 350px;

  img {
    width: 215px;
    height: 232px;
  }
`
 
