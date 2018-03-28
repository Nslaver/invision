import styled from 'styled-components'
import Graph from './Graph'
import { Sizes } from 'assets/Media'

const GraphStyled = styled(Graph)`
  margin: auto;
  fill: ${props => props.theme.colors.mapFill};
  max-width: 100%;
`
export default GraphStyled
