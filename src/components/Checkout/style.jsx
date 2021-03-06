import styled from 'styled-components'
import Container from '../Container'

export const ContainerCheckout = styled(Container)`
  flex-direction: column;
`

export const InnerCheckout = styled.div`
  display: flex;
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  max-height: 500px;
  overflow-y: auto;
`