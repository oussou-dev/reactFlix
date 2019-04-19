import React from "react"

class SearchBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			searchText: "",
			placeholder: "Saisir votre film..."
		}
	}

	handleChange = e => {
		console.log("handleChange", e.target.value)
		this.setState({
			searchText: e.target.value
		})
	}

	handleOnClick = () => {
		console.log("click")
	}

	render() {
		const { callback } = this.props
		return (
			<div className="row">
				<div className="col-md-8 input-group">
					<input
						type="text"
						onChange={this.handleChange}
						placeholder={this.state.placeholder}
						className="form-control input-lg"
					/>
					<span className="input-group-btn">
						<button
							className="btn btn-secondary"
							onClick={() => callback(this.state.searchText)}
						>
							GO !
						</button>
					</span>
				</div>
			</div>
		)
	}
}

export default SearchBar
