import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const initialState = {
  books: {
    myBooks: {
      list: [
        { author: 'Северин Готье', publish_date: '2021-03-07', title: 'Эпифания', id: 0 },
        { author: 'Юлия Кузнецова', publish_date: '2021-05-08', title: 'Сказки на один укус', id: 1 },
        { author: 'Сьюзан Кейн', publish_date: '2021-05-08', title: 'Тайная сила', id: 2 },
        { author: 'Ха-Джун Чанг', publish_date: '2021-01-11', title: 'Злые самаритяне', id: 3 },
        { author: 'Сатья Наделла', publish_date: '2021-11-12', title: 'Обновить страницу', id: 4 },
        { author: 'Пол Кидуэлл', publish_date: '2021-12-02', title: 'Психология города', id: 5 },
        { author: 'Митчел Резник', publish_date: '2021-03-03', title: 'Спираль обучения', id: 6 },
        { author: 'Екатерина Рондель', publish_date: '2021-06-08', title: 'Лабиринты с Чевостиком', id: 7 },
        { author: 'Мэг Джей', publish_date: '2021-07-11', title: 'Сверхнормальные', id: 8 },
        { author: 'Джин Хэйнс', publish_date: '2021-09-10', title: 'Атмосферная акварель', id: 9 },
      ],
    },
  },
}
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage(state = initialState) {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) {
      saveToLocalStorage(state)
      return state
    }
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

export function configureStore() {
  const store = createStore(rootReducer, loadFromLocalStorage(), composeEnhancers(applyMiddleware(thunk)))
  store.subscribe(() => saveToLocalStorage(store.getState()))
  return store
}

export default configureStore
