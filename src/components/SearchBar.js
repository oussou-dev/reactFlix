import React from "react"

class SearchBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			searchText: "",
			placeholder: "Saisir votre film...",
			intervalBeforeRequest: 1000,
			lockRequest: false
		}
	}

	handleChange = e => {
		this.setState({
			searchText: e.target.value
		})
		if (!this.state.lockRequest) {
			this.setState({ lockRequest: true })
			setTimeout(() => this.search, this.state.intervalBeforeRequest)
		}
	}

	handleOnClick = () => {
		this.search()
	}

	search = () => {
		this.props.callback(this.state.searchText)
		this.setState({ lockRequest: false })
	}

	render() {
		// const { callback } = this.props
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
							onClick={this.handleOnClick}
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
