import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import Github from './components/Github'
import Projects from './components/Projects'
import Error from './components/Error'
import { githubLoader } from './App'
import { Navigate } from 'react-router-dom'
const  Router=createBrowserRouter(
    

 createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
         <Route path="*" element={<Error/>}/>
         <Route index element={<Navigate replace to="home" />}/>
        <Route  path="home"  element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route loader={githubLoader}path="github" element={<Github/>}/>
        <Route path="projects" element={<Projects/>}/>
       
        
    </Route>
 )
 
)
export default Router