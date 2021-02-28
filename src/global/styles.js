import { createGlobalStyle } from 'styled-components'
import { Colors } from './constants'
import 'font-awesome/css/font-awesome.css'

const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: 'Arvo', sans-serif;
        height: 100%;
        width: 100%;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        color: #000;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
        border: 0;
    }

    li {
        text-decoration: none;
        list-style-type: none;
    }

    a, :visited, a:hover, a:focus, a:hover {
        text-decoration: none;
        color: ${Colors.DARK};
    }
`
export default GlobalStyle
