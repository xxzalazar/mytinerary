import React, {useState} from 'react';
function Buttons(){
    const [view, setView] = useState(false);
    return(<>
        <button className="botones"
          style={{ height: '3vw', alignSelf: 'center', borderRadius:'25px', padding:'0.5vw', fontStyle:'oblique' }}
          onClick={() => {
            setView(!view);
          }}
        >
          {' '}
          {view ? 'View less' : 'View more'}
        </button>
        {view && (
          <div>
            <p>contenido oculto</p>
          </div>
        )}
    </>)
    

}
export default Buttons