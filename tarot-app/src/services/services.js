const API_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot'

export async function getAllCards() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('No se pudieron cargar las cartas')
  return await res.json()
}

export async function getCardById(id) {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error('No se pudo cargar la carta')
  return await res.json()
}

export async function getRandomCards(count = 3) {
  const all = await getAllCards()
  // barajar y tomar 'count'
  const shuffled = [...all].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
