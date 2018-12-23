import React from 'react';
import SubmissionList from './SubmissionList';

class App extends React.Component {
	render() {
		return (
			<div style={{ width: '80%', margin: '0 auto' }}>
				<h1 className="text-center mb-4">UpVote!</h1>
				<SubmissionList />
			</div>
		);
	}
}

export default App;
