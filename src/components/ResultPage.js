import React from 'react';

class ResultPage extends React.Component {

  componentDidMount() {
    var script = document.createElement("script");
    script.src = "https://comments.app/js/widget.js?3";
    script.async = true;
    script.setAttribute(
      'data-comments-app-website', "Jy7bHnpa");
      script.setAttribute(
        'data-limit', "50");

    // document.body.appendChild(script);
    this.instance.appendChild(script);
  }


  render() {
    const sd = this.props.match.params.sd;

    // do sanity check before proceeding

    return (
      <><div>
        <h3>Info loading... {sd}</h3>
      </div>
      <div ref={el => (this.instance = el)} />
      </>
    );
  }
}


export default ResultPage;