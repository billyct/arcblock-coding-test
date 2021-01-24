const fetcher = query => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }

  return fetch('/graphql',options)
    .then(async r => {
      const res = await r.json()

      if ('errors' in res) {
        throw new Error(res.errors[0].message)
      }

      return res.data
    })
}

export default fetcher
