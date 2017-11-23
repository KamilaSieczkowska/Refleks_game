import React from 'react';

class OpponentCard extends React.Component {
    render(){
        
        let opponentCardImages = this.props.opponentImages.map((el,index)=> {
            
            return (
                <div className={`image img${index+1}`} key={index+1}>
                    <img src={`src/images/${el}`} alt={`${el}`} />
                </div>
            )
        })

        return (
            <div className="card opponent__card">
                
                {opponentCardImages}
            
            </div>
        )
    }
}

export {OpponentCard}