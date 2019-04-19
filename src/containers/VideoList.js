import React from "react"
import VideoListItem from "../components/VideoListItem"

class VideoList extends React.Component {
	receiveCallBack = movie => {
		console.log("VideoList", movie)
	}
	render() {
		const { movieList } = this.props
		return (
			<div>
				<ul>
					{movieList.map(movie => (
						<VideoListItem
							key={movie.id}
							movie={movie}
							callback={this.receiveCallBack}
						/>
					))}
				</ul>
			</div>
		)
	}
}

export default VideoList
