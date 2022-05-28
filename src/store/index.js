import { createStore } from 'redux';

const containerReducer = (initialState = 
    { 
        isShowingSoaps:true,
        isShowingSkinProducts:false,
    }, action) => {
  
  if (action.type === 'showSoaps') {
    return {
        isShowingSoaps:true,
        isShowingSkinProducts:false,
    }
  }

  if (action.type === 'showSkinProducts') {
    return {
        isShowingSoaps:false,
        isShowingSkinProducts:true,
    };
  }

  if (action.type === 'showSorryText') {
    return {
        isShowingSoaps:false,
        isShowingSkinProducts:false,
    };
  }

  return initialState;
};

const store = createStore(containerReducer);

export default store;