import fetch from 'unfetch'

/**
 * @param {string} query
 * @returns {Promise<never>}
 */
const fetcher = query => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query}),
  }

  return fetch('/graphql', options)
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      // non-2xx 的 HTTP 请求
      const err = new Error(response.statusText)
      err.response = response
      return Promise.reject(err)
    })
    .then(data => {
      // 2xx 的 HTTP 请求，但是有错误
      if ('errors' in data) {
        return Promise.reject(new Error(data.errors[0].message))
      }

      return data.data
    })
}

export default fetcher
