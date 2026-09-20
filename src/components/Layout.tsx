import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
const navigation = [{to:'/',label:'Inicio'},{to:'/vehicles',label:'Vehículos'},{to:'/services',label:'Servicios'},{to:'/about',label:'Nosotros'}]
export function Layout() { const [open,setOpen]=useState(false); const close=()=>setOpen(false); return <><header className="header"><div className="container nav"><Link className="brand" to="/" onClick={close}><span>HS</span> MOTORS</Link><button className="menu" aria-label="Abrir navegación" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?'navlinks open':'navlinks'}>{navigation.map(item=><NavLink end={item.to==='/' } key={item.to} to={item.to} onClick={close}>{item.label}</NavLink>)}<Link className="button button-small" to="/quote" onClick={close}>Cotizar</Link></nav></div></header><main><Outlet/></main><footer className="footer">
  <div className="container footer-inner">

    <div className="footer-brand">
      <Link className="brand light" to="/">
        <span>HS</span> MOTORS
      </Link>

      <p>
        Movilidad que inspira. Vehículos y servicios diseñados alrededor de ti.
      </p>
    </div>

    <nav className="footer-nav" aria-label="Navegación del pie de página">
      <Link to="/">Inicio</Link>
      <Link to="/vehicles">Vehículos</Link>
      <Link to="/services">Servicios</Link>
      <Link to="/about">Nosotros</Link>
      <Link to="/test-drive">Prueba de manejo</Link>
    </nav>

    <Link className="footer-cta" to="/quote">
      Solicitar cotización
    </Link>

    <div className="copyright">
      © {new Date().getFullYear()} HS Motors
    <span>Empresa dedicada a la comercialización y distribución de vehículos.</span>    </div>

  </div>
</footer></> }
