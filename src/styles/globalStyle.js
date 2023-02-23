import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-400: #121214;
        --color-grey-300: #212529;
        --color-grey-200: #343B41;
        --color-grey-100: #868E96;
        --color-grey-0: #F8F9FA;
        --color-alert-sucess: #3FE864;
        --color-alert-error: #E83F5B;

        --font1: 1rem;
        --font2: 1.125rem;
        --font3: .75rem;
       
    }

    body{
        min-height: 100vh;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

`

export default Global