
import { configureStore } from "@reduxjs/toolkit";

import {addData} from '../slices/Githubslice.js'

import githubreducer   from '../slices/Githubslice.js'


const store =configureStore({

    reducer:{
        github :githubreducer

    }
})

export default store


