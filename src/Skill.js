import React,{ Component } from 'react';


class Skill extends Component{
  render(){
    return(
      <div className="col-md-2">
          <span className="chart" data-percent={this.props.item.percent}>
            <span className="percent"></span>
          <h3>{this.props.item.tool}</h3>
          </span>
      </div>
    );
  }
}
export default Skill;
