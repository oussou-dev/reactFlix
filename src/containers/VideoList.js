import React from "react"
import VideoListItem from "../components/VideoListItem"

class VideoList extends React.Component {
	render() {
		const movies = ["fiml 1", "fiml 2", "fiml 3"]
		return (
			<div>
				<ul>
					{movies.map(movie => (
						<VideoListItem key={movie} movie={movie} />
					))}
				</ul>
			</div>
		)
	}
}

export default VideoList
