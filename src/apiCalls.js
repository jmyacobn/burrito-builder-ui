export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => {
        if(!response.ok) {
          throw new Error(`${response.status}`)
        }
        return response.json()
      })
}

export const addOrders = (newOrder) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}