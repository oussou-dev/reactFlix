import React from "react"
import SearchBar from "../components/SearchBar"
import VideoList from "./VideoList"
import axios from "axios"
import {
	API_END_POINT,
	API_KEY,
	POPULAR_MOVIES_URL
} from "../../tmdbAPI/tmdbAPI"

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = { movies: {}, currentMovie: {} }
	}

	componentWillMount() {
		axios
			.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
			.then(res => {
				this.setState({
					movies: res.data.results.slice(1, 6),
					currentMovie: res.data.results[0]
				})
				console.log(this.state.movies)
			})
	}

	render() {
		return (
			<div className="">
				<SearchBar />
				<VideoList />
			</div>
		)
	}
}

export default App
