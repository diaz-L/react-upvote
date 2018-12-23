import React from 'react';

class Submission extends React.Component {
	render() {
		return (
			<div className="media border p-2 mb-2"> 
				<div className="media-left mr-3"> 
					<img src={this.props.userImage} alt='submitter'style={{ height: '96px' }} />
				</div>
				<div className="media-body">
					<div className="d-flex align-items-center">
						<h4 className="m-0 text-primary" style={{display: 'inline-block'}}>{this.props.title}</h4>
						<span className="ml-2 badge badge-secondary">#{this.props.id}</span>
					</div>
					<p className="text-muted">{this.props.description}</p>		
					<div>
						<small className="text-muted mr-2">Submitted by:</small>
						<img src={this.props.avatar} alt="avatar" style={{ height: '25px', borderRadius: '50%'}} />
					</div>
				</div>
				<div className="media-right" onClick={this.props.handleClick}>
					<i className="fas fa-chevron-up text-muted mr-1"></i>
					<span className="text-primary">{this.props.votes}</span>	
				</div>	
			</div>
		)
	}
}

export default Submission;
