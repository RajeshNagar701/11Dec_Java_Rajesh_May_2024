
import React from 'react'
import Func_component from './Component/Func_component'
import Class_component from './Component/Class_component'
import Jsx from './JSX/Jsx'
import Home from './Layout/Home'
import Mycss from './css/Mycss'
import Mycss1 from './css/Mycss1'
import Mymodule from './module_css/Mymodule'
import Mymodule1 from './module_css/Mymodule1'
import Simple_Bootstrap from './Bootstrap/Simple_Bootstrap'
import React_bootsrap from './Bootstrap/React_bootsrap'
import Props_main from './Props/Props_main'
import Class_state from './State/Class/Class_state'
import Func_state from './State/Function/Func_state'
import Crud_Handeling from './Form_Handeling/Crud_Handeling'
import Sass_css from './Sass_css/Sass_css'
import App_routing from './Routing/App_routing'
import MUI from './MUI/MUI'
import Styled_component from './Styled_component/Styled_component'

function App() {

  return (
    <div>
        {
          // component
          //<Func_component/>
          //<Class_component/>
        
          // jsx
          //<Jsx/>

          //layout
          //<Home/>

          // css 
          //<Mycss/>
          //<Mycss1/>
          

          //Module css
          //<Mymodule/>
          //<Mymodule1/>
        
          // Sass Css
          //<Sass_css/>


          //Bootstrap 
          //<Simple_Bootstrap/>
          //<React_bootsrap/>

          // MUI
          //<MUI/>

          // custome styled-component 
          <Styled_component/>


          // Props
          //<Props_main/>


          //state
          //<Class_state/>
          //<Func_state/>
          
          //Form handeling Crud
          //<Crud_Handeling/>


          // Routing

          //<App_routing/>
       }

          

    </div>
  )
}

export default App