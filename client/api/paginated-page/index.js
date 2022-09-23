import fetch from 'isomorphic-fetch'

const API_URL = 'https://reqres.in/api/users?page='

export const paginatedPage = ({ page }) => {
  return fetch(API_URL + page)
    .then(response => response.json())
    .catch(() => ({
      Response: 'False',
      Error: 'Page not found',
    }));
}
