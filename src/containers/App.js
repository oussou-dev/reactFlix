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
import Video from "../components/Video"

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
				this.setState(
					{
						movieList: res.data.results.slice(1, 6),
						currentMovie: res.data.results[0]
					},
					() => this.applyVideoToCurrentMovie()
				)
				// console.log(this.state.movieList)
			})
	}

	applyVideoToCurrentMovie = () => {
		axios
			.get(
				`${API_END_POINT}movie/${
					this.state.currentMovie.id
				}?${API_KEY}&append_to_response=videos&include_adult=false`
			)
			.then(res => {
				// console.log(res)
				const youtubekey = res.data.videos.results[0].key
				// copie de la clef youtude dans le current movie
				let newCurrentMovieState = { ...this.state.currentMovie }
				newCurrentMovieState.videoId = youtubekey
				this.setState({
					currentMovie: newCurrentMovieState
				})
				// console.log(newCurrentMovieState)
			})
	}

	render() {
		const renderVideoList = () => {
			if (this.state.movieList.length >= 5) {
				return <VideoList movieList={this.state.movieList} />
			}
		}
		return (

			<div className="container">
				<div className="search_bar">
					<SearchBar />
				</div>
				<div className="row">
					<div className="col-md-8">
						<Video videoId={this.state.currentMovie.videoId} />
						<VideoDetail
							title={this.state.currentMovie.title}
							description={this.state.currentMovie.overview}
						/>
					</div>
					<div className="col-md-4"> {renderVideoList()}</div>
				</div>

			</div>
		)
	}
}

export default App
