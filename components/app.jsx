class ChatBoxChallenge extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			sessionID: null,
			name: null,
			initialUsers: [],
			initialSeq: 0,
		};

		this.handleSignin = this.handleSignin.bind(this);
	}

	render() {
		return ( !this.state.sessionID ) ? (
			<ChatLogin
				onSuccess={ this.handleSignin }
			/>
		) : (
			<ChatWindow
				sessionID={ this.state.sessionID }
				name={ this.state.name }
				initialUsers={ this.state.initialUsers }
				initialSeq={ this.state.initialSeq }
			/>
		);
	}

	handleSignin(id, name, currentUsers, seq) {
		this.setState({
			sessionID: id,
			name: name,
			initialUsers: currentUsers,
			initialSeq: seq,
		});
	}

}
