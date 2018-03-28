import styled from 'styled-components'
import Graph from './Graph'

const GraphStyled = styled(Graph)`
  margin: auto;
  max-width: 100%;

  .circle__center {
    fill: ${props => props.theme.colors.glyphColor};
  }

  .circle__glyphs {
    stroke: ${props => props.theme.colors.glyphColor};
    stroke-width: 2px;
    fill: white;
  }

  .line__connector {
    stroke: ${props => props.theme.colors.lineConnector};
    stroke-width: 2px;
    stroke-dasharray: 4, 4;
  }

  .text__glyphs {
    text-anchor: middle;
  }
`
export default GraphStyled
