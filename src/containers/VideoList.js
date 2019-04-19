import React from "react"
import VideoListItem from "../components/VideoListItem"

class VideoList extends React.Component {
	render() {
		const { movieList, receiveCallBack } = this.props
		return (
			<div>
				<ul>
					{movieList.map(movie => (
						<VideoListItem
							key={movie.id}
							movie={movie}
							callback={receiveCallBack}
						/>
					))}
				</ul>
			</div>
		)
	}
}

export default VideoList
