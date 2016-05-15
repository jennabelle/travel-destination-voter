import Server from 'socket.io';

// create a Socket.io server
export default function startServer(store) {
	const io = new Server().attach(8090); // bound to port 8090

	// reads current state, turns it into plain JS object, emits it as state event on Socket.io server
	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	// immediately receive current state when connected to app
	io.on('connection', (socket) => {
		// emit current state right away
		socket.emit('state', store.getState().toJS());
	});
}