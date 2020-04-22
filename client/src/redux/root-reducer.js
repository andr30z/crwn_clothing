import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';//pega o window.localstorage da pagina
import userReducer from '../redux/user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import diretorioReducer from './diretorio/diretorio.reducer';
import shopReducer from "./shop/shop.reducer";
//

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}

const rooReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  diretorio:diretorioReducer,
  shop:shopReducer
})

export default persistReducer(persistConfig, rooReducer);//retorna o root reducer com capacidades
// de localstorage
//codigo que combina os estados da aplicação

