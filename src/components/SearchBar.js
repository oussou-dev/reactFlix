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

	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<input
						type="text"
						onChange={this.handleChange}
						placeholder={this.state.placeholder}
						className="form-control input-lg"
					/>
					<p>{this.state.searchText}</p>
				</div>
			</div>
		)
	}
}

export default SearchBar
