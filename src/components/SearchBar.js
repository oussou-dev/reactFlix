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
			<>
				<input
					type="text"
					onChange={this.handleChange}
					placeholder={this.state.placeholder}
				/>
				<p>{this.state.searchText}</p>
			</>
		)
	}
}

export default SearchBar
