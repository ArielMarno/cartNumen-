import facebook from "../assets/socialmedia/facebook.png"
import instagram from "../assets/socialmedia/instagram.png"
import twitter from "../assets/socialmedia/twitter.png"
import whatsapp from "../assets/socialmedia/whatsapp.png"
import logo from "../assets/logo.png"
export const Footer = () => {   
  return (
    <div className="container-contact">
        <div className="contact">
            <h3>CONTACTANOS</h3>
            <div className="line"></div>
            <a href="mailto:gentleman@example.com"><span>EMAIL:</span> gentleman@example.com</a>
            <p><span>TEL:</span> 555-7373-234</p>
        </div>
        <div className="copy">
            <img src={logo} alt=""  />
            <p className="marca">©<span>Gentleman, elegance & design.</span> Todos los derechos reservados.</p>
            <p className="developer">Sitio web desarrollado por <span>Ariel Marchesano</span>, a duras penas y con muy poco tiempo.</p>
        </div>
        <div className="social">
          <h4>CUENTAS OFICIALES</h4>
          <div className="icons">
            <a href=""><img src={facebook} alt="facebook icon"/></a>
            <a href=""><img src={instagram} alt="instagran icon"/></a>
            <a href=""><img src={twitter} alt="twitter icon"/></a>
            <a href=""><img src={whatsapp} alt="whatsapp"/></a>
          </div>
        </div>

    </div>
  )
}
