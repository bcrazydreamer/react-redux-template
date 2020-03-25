var loaderCount = 0;
export default function reducer(state={
        loading : false
    },action) {

      switch (action.type) {
        case 'START_LOADER' : {
            loaderCount++;
            return {...state,
                loading : true
            }
        }
        case 'STOP_LOADER' : {
            loaderCount--;
            if(loaderCount <= 0){
                loaderCount = 0;
                return {...state,
                    loading : false
                }
            }
            return state;
        }
        default: {
            return state;
        }
      }
}