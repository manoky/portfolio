import React,{ Component } from 'react';


class Portfolio extends Component{
  render(){
    return(
      <li className={this.props.item.class}>
          <a href={this.props.item.large} target="_blank"> 
              <div className="overlay"><i className="fa fa-search"></i>
              </div><img src={this.props.item.small} alt="" />
          </a>
      </li>
    );
  }
}
export default Portfolio;
