import React from "react";

class Img extends React.Component{
    render(){
        return <div className='row justify-content-center'>
                    <div className="col-md-3">
                        <img src={this.props.imgSrc} className="rounded-circle mx-auto d-block border border-dark w-75" alt={this.props.alt}/>
                        <h3 className='text-center'>{this.props.text} <img width='25px' height='25px' src={this.props.icon} alt={this.props.altIcon}/></h3>
                    </div>
                </div>
    }
}
export default Img