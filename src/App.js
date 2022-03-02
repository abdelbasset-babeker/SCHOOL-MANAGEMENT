import Dashbord from './pages/Dashbord'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'
import Classes from './pages/Classes'
import Expences from './pages/Expences'
import Setting from './pages/Setting'
import Layout from './components/Layout'
import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import {  BrowserRouter,Routes,Route,} from"react-router-dom";
import Newstudent from './pages/Students/Newstudent'
import Students from './pages/Students/Students'





function App() {

  
  const theme = createTheme({

    root : {
      borderRadius : '50px'
    },
    
    palette: {
     primary: { main: "#7986cb" },
      secondary: { main: "#ffcc80" },
      error: { main: "#ffd54f" },
      info: { main: "#64b5f6" },
      warning: { main: "#e57373" },
      success: { main: "#69f0ae" },
    }
  });




  return (
<ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Dashbord />}/>
          <Route exact path="/students" element={<Students />}/>
          <Route exact path="/students/create" element={<Newstudent />}/>
          <Route exact path="/courses" element={<Courses />}/>
          <Route exact path="/teachers" element={<Teachers />}/>
          <Route exact path="/classes" element={<Classes />}/>
          <Route exact path="/expences" element={<Expences />}/>
          <Route exact path="/setting" element={<Setting />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
</ThemeProvider>
  
  );
}

export default App;
