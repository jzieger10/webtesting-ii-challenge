import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		strikes: 0,
		balls: 0,
		fouls: 0,
		outs: 0,
		inning: 0.5,
		bases: 0,
		totalBases: 0,
		teamARuns: 0,
		teamBRuns: 0,
	};

	newBatter = () => {
		this.setState({
			strikes: 0,
			balls: 0,
			fouls: 0,
		});
	};

	strike = () => {
		if (this.state.strikes <= 1) {
			this.setState({ strikes: this.state.strikes + 1 });
		} else {
			this.out();
			this.newBatter();
		}
	};

	ball = () => {
		this.state.balls <= 2
			? this.setState({ balls: this.state.balls + 1 })
			: this.newBatter();
	};

	foul = () => {
		this.state.strikes <= 1
			? this.setState({ strikes: this.state.strikes + 1 })
			: this.setState({ fouls: this.state.fouls + 1 });
	};

	hit = () => {
		let bases = Math.floor(Math.random() * Math.floor(5));
		this.setState({ totalBases: this.state.totalBases + bases });
		if (this.state.totalBases % 4 === 0) {
			// this logic is not correct
			this.state.inning % 1 === 0
				? this.setState({
						bases: 0,
						teamBRuns: this.state.teamBRuns + 1,
				  })
				: this.setState({
						bases: 0,
						teamARuns: this.state.teamARuns + 1,
				  });
		} else {
			this.setState({
				totalBases: this.state.totalBases + bases,
			});
		}
		this.setState({ bases: bases });
		this.newBatter();
	};

	out = () => {
		this.state.outs < 2
			? this.setState({ outs: this.state.outs + 1 })
			: this.newInning();
	};

	newInning = () => {
		this.setState({
			outs: 0,
			inning: this.state.inning + 0.5,
			bases: 0,
			totalBases: 0,
		});
	};

	// addARun = () => {
	//   this.state.totalBases > 4 ? this.setState({ })
	// }

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<div className='counts'>
						<h1>Team A Score: {this.state.teamARuns}</h1>
						<h1>Team B Score: {this.state.teamBRuns}</h1>
						<h1>
							Inning:
							{this.state.inning % 1 === 0
								? `Bottom ${this.state.inning.toFixed(0)}`
								: `Top ${this.state.inning.toFixed(0)}`}
						</h1>
						<h2>Outs: {this.state.outs}</h2>
						<h3>Strikes: {this.state.strikes}</h3>
						<h3>Balls: {this.state.balls}</h3>
						<h4>Bases: {this.state.bases}</h4>
						<h2>Total Bases: {this.state.totalBases}</h2>
						{/* <h3>Fouls: {this.state.fouls}</h3> */}
					</div>
					<div>
						<button onClick={this.strike}>Strike</button>
						<button onClick={this.ball}>Ball</button>
						<button onClick={this.foul}>Foul</button>
						<button onClick={this.hit}>Hit</button>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
