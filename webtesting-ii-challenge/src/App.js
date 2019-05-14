import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		strikes: 0,
		balls: 0,
		fouls: 0,
		outs: 0,
		inning: 0.5,
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
		this.newBatter();
	};

	out = () => {
		this.state.outs < 2
			? this.setState({ outs: this.state.outs + 1 })
			: this.setState({ inning: this.state.inning + 0.5 });
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<div className='counts'>
						<h1>
							Inning:{" "}
							{this.state.inning % 1 === 0
								? `Bottom ${this.state.inning.toFixed(0)}`
								: `Top ${this.state.inning.toFixed(0)}`}
						</h1>
						<h2>Outs: {this.state.outs}</h2>
						<h3>Strikes: {this.state.strikes}</h3>
						<h3>Balls: {this.state.balls}</h3>
						<h3>Fouls: {this.state.fouls}</h3>
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
