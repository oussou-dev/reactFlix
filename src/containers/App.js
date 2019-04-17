import React from "react"
import SearchBar from "../components/SearchBar"
import VideoList from "./VideoList"
import axios from "axios"
import {
	API_END_POINT,
	API_KEY,
	POPULAR_MOVIES_URL
} from "../../tmdbAPI/tmdbAPI"
import VideoDetail from "../components/VideoDetail"

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = { movieList: {}, currentMovie: {} }
	}

	componentWillMount() {
		this.initMovies()
	}

	initMovies = () => {
		axios
			.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
			.then(res => {
				this.setState({
					movieList: res.data.results.slice(1, 6),
					currentMovie: res.data.results[0]
				})
				console.log(this.state.movieList)
			})
	}

	render() {
		const renderVideoList = () => {
			if (this.state.movieList.length >= 5) {
				return <VideoList movieList={this.state.movieList} />
			}
		}
		return (
			<div className="">
				<SearchBar />
				{renderVideoList()}
				{/* <VideoList movieList={this.state.movieList} /> */}
				<VideoDetail
					title={this.state.currentMovie.title}
					description={this.state.currentMovie.overview}
				/>
			</div>
		)
	}
}

export default App
