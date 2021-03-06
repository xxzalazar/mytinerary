import React from 'react';
import { Carousel } from 'react-materialize';
import Slide from './Slide';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"

class Carrusel extends React.Component {
  componentDidMount(){
    M.AutoInit();
  }
  state = {
    places: [
      [
        {
          pic: 'https://www.gotokyo.org/es/plan/tokyo-outline/images/main.jpg',
          nombre: 'Tokyo, Japan',
        },
        {
          pic:
            'https://resizer.codigounico.com/resizer/resizer.php?imagen=https://www.codigounico.com/wp-content/uploads/sites/2/2018/12/top-30-de-los-mejores-destinos-turisticos-de-2018-13.jpg&nuevoancho=750&crop=0',
          nombre: 'Venice, Italy',
        },
        {
          pic:
            'https://www.mundo-nomada.com/wp-content/uploads/2017/02/Wat-samphran1-1200x900.jpg',
          nombre: 'Thailand',
        },
        {
          pic: 'https://i.ytimg.com/vi/dHOQV-ZGAVw/maxresdefault.jpg',
          nombre: 'France',
        },
      ],
      [
        {
          pic: 'https://i.ytimg.com/vi/2KTKgR11YmI/maxresdefault.jpg',
          nombre: 'New York, USA',
        },
        {
          pic:
            'http://3.bp.blogspot.com/-dwKymwDyErU/U2wCaMnWSAI/AAAAAAAA814/iIZEhm56LF0/s00/San-Petersburgo-Rusia_HDR-1920x1080.jpg',
          nombre: 'Russia',
        },
        {
          pic:
            'https://media.metrolatam.com/2018/01/10/chichenitza1218025-bb75a7b3fc1be77351cd17825b913b3d-1200x800.jpg',
          nombre: 'México',
        },
        {
          pic:
            'https://2.bp.blogspot.com/-QXiR3ww5fV0/UEf792PaREI/AAAAAAAAJWc/gzplatA_jjE/s1600/1577+-+Puerta+Gwanghwamun.jpg',
          nombre: 'Seul, Korea',
        },
      ],
      [
        {
          pic: 'https://i.ytimg.com/vi/YEgSSw33hek/maxresdefault.jpg',
          nombre: 'Arequipa, Perú',
        },
        {
          pic:
            'http://www.roundalia.com/wp-content/uploads/2015/01/kioto-min.jpg',
          nombre: 'Kyoto',
        },
        {
          pic:
            'https://www.ahkargentina.com.ar/fileadmin/AHK_Argentinien/sobre_alemania_img.png',
          nombre: 'Germany',
        },
        {
          pic: 'https://avia.lt/images/cities/bg/BUE.jpg',
          nombre: 'Buenos Aires, Ar',
        },
      ],
      [
        {
          pic:
            'https://lh3.googleusercontent.com/l1E0IkEY1WsagzFbG6Wh2XAML3Gao_USB2yDFKulakpHoBVaChgdoivMDcAsxpdjkxEk8_KW6TYuTJ0dsIc0xdHlLkvkV3wgpAEokw8U_TfqZEwkS0A4mgAv5dj7Qmx0Czjh3fqnY6VuBn7swAMj0OYInv5orKm-KCUoF_rbTLkFTp9M5hnHADzYLXi-mUmyTUMKAR6VnJokWKEBrQeQPiiN6tr3IoODwt2ddtwNtyxuzhHS1eVevwveV9wDXhwF8GojfoTQXGlpqZdFiXvc45Aap6K3d9GmfK57mX6t6x5Wz2D2GzHtuXDkef1bFYMzCq67ynzLXnrAULD7EdL4X9gpOScy_942Z2iIW8VGOmy9uDTY-VsoX-991dc5JUfBc9CWrPLPWJWsYi-Po88OwxPbt5pMSHvVneIefQr2qAUXIEiG6zPvGGaeJsEcyOFoF7gz73XT5_FCfCAfLVNwnK2NM_a7WsUI2Whd-wOt_kaSIvbd33zs7ft0jYEmIpOmd2y6AVy_unGOF5YVR8mt91OhfpRvgwwIsVytOcwRI97u4B9-2cHbKwMrt7JHwLK8V5LVIOUZ050ulfy8tnv_6-H08TXmmhU6dKCtTFLDd9L0NsDvdap1cboHUn0fcS0Md2uo_dIh3khXZzSVsJIFPfd9QQ=w1000-h667-no',
          nombre: 'Hong Kong',
        },
        {
          pic:
            'https://www.state.gov/wp-content/uploads/2019/04/Egypt-2109x1406.jpg',
          nombre: 'Egypt',
        },
        {
          pic:
            'https://www.caracteristicas.co/wp-content/uploads/2017/05/espa%C3%B1a-e1570587854254.jpg',
          nombre: 'Spain',
        },
        {
          pic:
            'https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/AMS/ams-amsterdam-netherlands2.jpg.image.750.563.low.jpg',
          nombre: 'Netherlands',
        },
      ],
    ],
  };
  render() {
    return (
      <>
        <div style={{ width: '100%', marginBottom: '10vh' }}>
          <Carousel
            carouselId="Carousel-2"
            className="white-text center "
            options={{
              duration: 2,
              fullWidth: false,
              indicators: true,
              dist: -100,
            }}
          >
            {this.state.places.map((place, index) => (
              <div
                key={index}
                style={{
                  width: '60vw',
                  height: '60vh',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                <Slide data={place} />
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}
export default Carrusel;
