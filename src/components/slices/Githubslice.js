



import { createSlice } from "@reduxjs/toolkit"





const initialState={
    
        login: "no_name",
        url: "url",       
        name: "NAME",     
        location: "IND",
        public_repos: 0,
        resume_url: ""
       
      
}



const githubslice= createSlice({

    name:"github",
    initialState:initialState,
    reducers:{

        addData:(state,action)=>{

            return action.payload; //changes entire state

        }
    }

})

export const  {addData} =githubslice.actions ;

export default githubslice.reducer ;