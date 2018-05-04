module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
	development: {
	    host: "127.0.0.1",
	    port: 22000,
	    network_id: "*",
	    gasPrice: 0,
	    gas: 4500000
	},
	node1: {
	    host: "127.0.0.1",
	    port: 22001,
	    network_id: "*",
	    gasPrice: 0,
	    gas: 4500000,
	},
	node2: {
	    host: "127.0.0.1",
	    port: 22002,
	    network_id:"*",
	    gasPrice: 0,
	    gas: 4500000,
	},
	node3: {
	    host: "127.0.0.1",
	    port: 22002,
	    network_id:"*",
	    gasPrice: 0,
	    gas: 4500000,
	},
	node4: {
	    host: "127.0.0.1",
	    port: 22003,
	    network_id:"*",
	    gasPrice: 0,
	    gas: 4500000,
	},
	node5: {
	    host: "127.0.0.1",
	    port: 22004,
	    network_id:"*",
	    gasPrice: 0,
	    gas: 4500000,
	},
	node6: {
	    host: "127.0.0.1",
	    port: 22005,
	    network_id:"*",
	    gasPrice: 0,
	    gas: 4500000,
	},
	node7: {
	    host: "127.0.0.1",
	    port: 22006,
	    network_id:"*",
	    gasPrice: 0,
	    gas: 4500000,
	}
    }
};
