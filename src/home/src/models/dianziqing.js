import { query } from '../services/dianziqing';

export default{
    namespace:'dianziqing',

    state:{ list: [] },

    effects: {
        *find(action, { put, call }) {
            const listData = yield call(query);
            console.log(listData.data.length);
            yield put({ type: 'findResult', data: listData.data });
        },
    },
  
    reducers:{
        findResult(state,action){
            return{
                ...state,
                list:action.data,
            };
        }
    },
}