import { Component } from "react";

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <desc>{this.props.desc}</desc>
        <div>
          <img src={this.props.img} alt={this.props.title}></img>
        </div>
      </article>
    );
  }
}

export default Content;