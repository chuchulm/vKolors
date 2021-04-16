import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Menu } from 'antd';
import { PinturaImpermeabilizanteScreen } from './screenPinturas/PinturaImpermeabilizanteScreen';
import { ClaseAScreen } from './screenPinturas/ClaseAScreen';
import { ClaseBScreen } from './screenPinturas/ClaseBScreen';
import { Satinado } from './screenPinturas/SatinadoScreen';
import { Inicio } from './screenPinturas/Inicio';
import { PinturaEsmalte } from './screenPinturas/PinturaEsmalte';






const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2'];



export const Catalogo = () => {

const [openKeys, setOpenKeys] = React.useState(['sub1']);

const onOpenChange = keys => {
  const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
  if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    setOpenKeys(keys);
  } else {
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  }
}; 

    return (
        <div className="rowCatalogo">
           <div className="col ">
             <div className="columna1">
             <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
                
                     
                     <Menu.Item key="0"><Link to="/">Volver</Link></Menu.Item>
                     {/* <Menu.Item key="1"><Link to="/catalogo/inicio">Inicio</Link></Menu.Item> */}
                    
                  
                     
                     <SubMenu key="sub1"  title="Pinturas">
                     
                       <Menu.Item key="1"><Link to="/catalogo/claseA"> Clase A</Link></Menu.Item>
                       <Menu.Item key="2"><Link to="/catalogo/claseB"> Clase B</Link></Menu.Item>
                       <Menu.Item key="3"><Link to="/catalogo/satinado"> Caucho satinado</Link></Menu.Item>              
                       <Menu.Item key="4"><Link to="/catalogo/impermeabilizanteScreen">Impermeabilizante</Link></Menu.Item>
                       <Menu.Item key="5"><Link to="/catalogo/esmalte">Pintura Esmalte</Link></Menu.Item>
                     </SubMenu>
                     
                     
                     <SubMenu key="sub2"  title="Otros Productos ">
                       <Menu.Item key="6">Primer VK-10</Menu.Item>
                       <Menu.Item key="7">Fondo de herreria</Menu.Item>
                       <Menu.Item key="8">Pasta para paredes</Menu.Item>
                     </SubMenu>
                 </Menu>
             </div>
                
           </div>

           <div className="col-2 ">
                <Switch>
                  <Route path= "/catalogo/inicio" component ={Inicio}/>
                  <Route path= "/catalogo/impermeabilizanteScreen" component ={PinturaImpermeabilizanteScreen}/>
                  <Route path= "/catalogo/claseA" component ={ClaseAScreen}/>
                  <Route path= "/catalogo/claseB" component ={ClaseBScreen}/>
                  <Route path= "/catalogo/satinado" component ={Satinado}/>    
                  <Route path= "/catalogo/esmalte" component ={PinturaEsmalte}/>                       
                 </Switch>
           </div>
        </div>
        
    )
}
