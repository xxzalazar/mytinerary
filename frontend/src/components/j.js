/*import React from 'react'
import { Carousel } from 'react-materialize'

class Carrusel extends React.Component {
    state = {
        slider1:[{ pic: "https://picsum.photos/200/300?image=4" ,nombre:'tokyo' },
        { pic: "https://picsum.photos/200/300?image=4", nombre: 'france' },
        { pic: "https://picsum.photos/200/300?image=4", nombre: 'seul' },
        { pic: "https://picsum.photos/200/300?image=4", nombre: 'Buenos Aires' }],
        slider2:[{ pic: "https://picsum.photos/200/300?image=4" ,nombre:'tokyo' },
        { pic: "https://picsum.photos/200/300?image=4", nombre: 'france' },
        { pic: "https://picsum.photos/200/300?image=4", nombre: 'seul' },
        { pic: "https://picsum.photos/200/300?image=4", nombre: 'Buenos Aires' }],
        
    }
    render() {
        const hola= ["1", "2", "3","4"]

        return (
            <>
                <div style={{ width: '50%', margin: '15vh 10vh 0vh 10vh' }}>

                    <Carousel
                        carouselId="Carousel-2"
                        className="white-text center"
                        options={{
                            fullWidth: false,
                            indicators: true,
                            dist: -100
                        }}>
                         {this.state.slider2.map(() =>{
                              <div className="red" style={{ width: '400px', height: '400px', display: 'flex', flexWrap: 'wrap' }}>
                              {this.state.slider1.map(slide => {
                                      return(
                                          <div style={{
                                           backgroundImage: `url(${slide.pic})`, width: '50%', height:'50%',
                                           backgroundPosition: 'center', backgroundSize: 'cover'}}> <div className="cajitas"> 
                                           <h4 style={{ color: "black", textAlign: "center" }}> {slide.nombre} </h4> </div>
                                          </div>
                                      )
                                  })}
                              </div>
                         }
                            ) }
                           

                       
                            
                    
                    </Carousel>

                </div>


            </>
        )
    }
}
export default Carrusel*/