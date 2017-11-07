
import React,{ Component } from 'react';


class Experience extends Component{
  render(){
    return(
      <div className="col-md-4">
          <article className="experience">
              <header>
                  <h3>{this.props.item.company}</h3>
                  <p>{this.props.item.role} / {this.props.item.place} / {this.props.item.period}</p>
              </header>
              <p>{this.props.item.details}.</p>
          </article>
      </div>
    );
  }
}
export default Experience;
