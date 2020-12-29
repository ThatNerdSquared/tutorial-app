import React from "react"

class MemeGenerator extends React.Component {
	constructor() {
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			memeArray: ""
		}
		this.newInput = this.newInput.bind(this)
		this.newMeme = this.newMeme.bind(this)
	}

	newInput(event) {
		const {name, value} = event.target
		this.setState({ [name]: value })
	}

	newMeme(event) {
		event.preventDefault()
		var item = this.state.memeArray[Math.floor(Math.random() * this.state.memeArray.length)];
		console.log(item)
		var randoms = item.url
		this.setState({ randomImg: randoms })
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data
				this.setState({ memeArray: memes })

			})
	}

	render() {
		return (
			<div>
				<form className="meme-form" onSubmit={this.newMeme}>
						<input
							type="text"
							name="topText"
							value={this.state.topText}
							placeholder="Top text"
							onChange={this.newInput}
						/>
						<input
							type="text"
							name="bottomText"
							value={this.state.bottomText}
							placeholder="Bottom text"
							onChange={this.newInput}
						/>
					<button>Gen</button>
				</form>
				<div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
			</div>
		)
	}
}

export default MemeGenerator