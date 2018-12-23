import React from 'react';
import Submission from './Submission';
import './seed';

class SubmissionList extends React.Component {
	constructor() {
		super()
		this.state = {
			submissions: window.Seed.submissions
		}
	}

	handleClick = (index, e) => {
		this.setState((prevState, props) => {
			return { ...prevState }.submissions[index].votes += 1
		})
	}

	render() {
		let subList = this.state.submissions.sort((a,b) => b.votes - a.votes)
		return (
			<ul>
				{
					subList.map((submission, index) => {
						return (<li key={submission.id} style={{ listStyle: 'none'}}>
							<Submission 
								id={submission.id}
							  	title={submission.title}
							  	description={submission.description}
							  	votes={submission.votes}
								userImage={submission.submissionImage}
							  	avatar={submission.avatar}
								handleClick={(e) => { this.handleClick(index, e)} }
						  	/>
						</li>)
					})
				}
			</ul>
		)
	}
}

export default SubmissionList;
