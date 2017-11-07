import React,{ Component } from 'react';


class Education extends Component{
  render(){
    return(
      <div className="col-md-6">
          <article className="education">
              <header>
                  <h3>{this.props.item.university}</h3>
                  <p>{this.props.item.degree} - <strong>Graduated:</strong> {this.props.item.period}</p>
              </header>
          </article>
      </div>
    );
  }
}
export default Education;
