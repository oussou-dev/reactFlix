import React from "react"
import VideoListItem from "../components/VideoListItem"

class VideoList extends React.Component {
	render() {
		const { movieList } = this.props
		console.log(movieList)
		return (
			<div>
				<ul>
					{movieList.map(movie => (
						<VideoListItem key={movie.id} movie={movie} />
					))}
				</ul>
			</div>
		)
	}
}

export default VideoList
