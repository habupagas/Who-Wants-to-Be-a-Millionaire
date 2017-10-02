import React from 'react';


class BestScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: [],
    }
  }



  componentDidMount(){
      const rankRef = firebase.database().ref('rank');
        rankRef.on('value', snapshot => {
          this.setState({
            ranking: snapshot.val(),
          })
        });
      console.log(typeof this.state.ranking);
  }


    render() {
      const scores = []
      for (let key of Object.keys(this.state.ranking)) {
          scores.push(this.state.ranking[key]);
      }

      const topTen = scores.map( (score, index) => {
        return <li key={index}>{score.name + score.score}</li>
      })
        return <div className = 'container'>
          <h1>Best Scores</h1>
          <ul>
            {topTen}
          </ul>
        </div>
      }
}


 module.exports = BestScores;
