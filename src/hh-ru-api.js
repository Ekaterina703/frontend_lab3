import axios from 'axios'


const result_container = document.getElementById('result')

const base_api = axios.create({
    baseURL: 'https://api.hh.ru/',
    timeout: 1000,
})

export const getVacancies = text => {
    base_api.get('/vacancies', { params: { text } })
        .then(response => showResults(response.data))
        .catch(error => showError(error))
}

const showError = error => result_container.innerHTML = error

const showResults = data => {
    result_container.innerHTML = ''

    if (!data.items.length) {
        result_container.innerHTML = "По данному запросу ничего не найдено :("
        return
    }

    data.items.forEach(item => {
        const vacancy_container = document.createElement('div')
        vacancy_container.className = 'vacancy-container'
        vacancy_container.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${item.area.name}</h6>
                <p class="card-text">${item.snippet.requirement}</p>
                <a href="${item.alternate_url}" class="card-link">Ссылка на вакансию</a>
                </div>
            </div>
        `
        result_container.appendChild(vacancy_container)
    })
}
