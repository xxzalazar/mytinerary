import React from 'react'

class Slider extends React.Component{
    render(){
        return(
           <>
          {this.props.data.map(slide => {
                return(
                    <div className="cajaGrande" style={{
                     backgroundImage: `url(${slide.pic})`, width: '50%', height:'50%',
                     backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', borderRadius:'25px'}}> <div className="cajitas"> 
                     <h4 className="ciudades"> {slide.nombre} </h4> </div>
                    </div>
                )
            })}
            </>

        )
    }

}
export default Slider