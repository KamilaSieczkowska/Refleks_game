import React from 'react';

class UserCard extends React.Component {

    render(){

        let cardImages = this.props.userImages.map((el,index)=> {
            
            return (
                <div className={`image img${index+1}`} key={index+1}>
                    <img onClick={e => this.props.handleUserPoints(e)} src={`src/images/${el}`} alt={`${el}`} />
                </div>
                
            )
        })

        return (
            <div className="card user__card">

                {cardImages}
        
                <p>Twoja karta</p>
            </div>
        )
    }
}

export {UserCard}