// create reducer function here passing in state and action where action determines 
//the type of operation as well as the payload that contains the data to use for the update
//const 

const initStore = {
    animals : ['hello', 'world']
};

//fetch data and pass in as payload 

export default function reducer(state = initStore, action){
let {type, payload} = action //object destructuring 
switch (type){

    case 'FETCH_ANIMALS': 
        break
    case 'ADD_ANIMAL':
        break
    case 'DELETE_ANIMAL' :
        break
    default :
        return        
}

}

export const fetchAnimals = (animals) => {

    return {
        type : 'FETCH_ANIMALS',
        payload : animals
    }
}

