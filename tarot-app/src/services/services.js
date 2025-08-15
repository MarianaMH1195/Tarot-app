const API_BASE_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

/**
 * Función auxiliar para manejar errores de la API
 * @param {Response} response - Respuesta de fetch
 * @returns {Promise<Response>} - Respuesta validada
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response;
};

/**
 * Función auxiliar para realizar peticiones HTTP
 * @param {string} endpoint - Endpoint de la API
 * @param {Object} options - Opciones de fetch
 * @returns {Promise<Object>} - Datos de la respuesta
 */
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    await handleResponse(response);
    return await response.json();
  } catch (error) {
    console.error('Error en petición API:', error);
    throw error;
  }
};

/**
 * Obtiene todas las cartas del tarot
 * @returns {Promise<Array>} - Array con todas las cartas
 */
export const getAllCards = async () => {
  try {
    console.log('🔮 Obteniendo todas las cartas del tarot...');
    const cards = await apiRequest('');
    console.log(`✨ Se obtuvieron ${cards.length} cartas exitosamente`);
    return cards;
  } catch (error) {
    console.error('❌ Error al obtener las cartas:', error);
    throw new Error('No se pudieron cargar las cartas del tarot. Verifica tu conexión.');
  }
};

/**
 * Obtiene una carta específica por su ID
 * @param {string} cardId - ID de la carta a obtener
 * @returns {Promise<Object>} - Objeto con los datos de la carta
 */
export const getCardById = async (cardId) => {
  if (!cardId) {
    throw new Error('ID de carta requerido');
  }

  try {
    console.log(`🔮 Obteniendo carta con ID: ${cardId}...`);
    const card = await apiRequest(`/${cardId}`);
    console.log(`✨ Carta "${card.arcaneName}" obtenida exitosamente`);
    return card;
  } catch (error) {
    console.error(`❌ Error al obtener la carta ${cardId}:`, error);
    throw new Error(`No se pudo cargar la carta con ID ${cardId}. Verifica que existe.`);
  }
};

/**
 * Obtiene un número aleatorio de cartas para una lectura
 * @param {number} count - Número de cartas a obtener (por defecto 3)
 * @returns {Promise<Array>} - Array con cartas aleatorias
 */
export const getRandomCards = async (count = 3) => {
  try {
    console.log(`🔮 Obteniendo ${count} cartas aleatorias para lectura...`);
    const allCards = await getAllCards();
    
    // Mezclar array y tomar las primeras 'count' cartas
    const shuffledCards = allCards.sort(() => Math.random() - 0.5);
    const selectedCards = shuffledCards.slice(0, count);
    
    console.log(`✨ Seleccionadas ${selectedCards.length} cartas para la lectura`);
    return selectedCards;
  } catch (error) {
    console.error('❌ Error al obtener cartas aleatorias:', error);
    throw new Error('No se pudieron obtener cartas para la lectura.');
  }
};
