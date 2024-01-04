// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { getVacancies } from './hh-ru-api'


const search_button = document.getElementById('search-button'),
    search_input = document.getElementById('search-input')

search_button.addEventListener('click', () => getVacancies(search_input.value))
