selector_to_html = {"a[href=\"#GetBranches\"]": "<dt class=\"sig sig-object py\" id=\"GetBranches\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetBranches</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get the branches of the tree. This is the part of the tree above the last\nfinalized block.</p></dd>", "a[href=\"#GetRewardStatus\"]": "<dt class=\"sig sig-object py\" id=\"GetRewardStatus\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetRewardStatus</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get an overview of the balance of special accounts in the given block.</p></dd>", "a[href=\"#GetTransactionStatusInBlock\"]": "<dt class=\"sig sig-object py\" id=\"GetTransactionStatusInBlock\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetTransactionStatusInBlock</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">transaction_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">TransactionHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get the status of a given transaction in a given block.</p></dd>", "a[href=\"#BanNode\"]": "<dt class=\"sig sig-object py\" id=\"BanNode\">\n<span class=\"sig-name descname\"><span class=\"pre\">BanNode</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">node_id</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">String</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">port</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">UInt32</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ip</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">String</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">catchup_status</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">CatchupStatus</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Ban a node from being a peer. Note that you should provide a <code class=\"docutils literal notranslate\"><span class=\"pre\">node_id</span></code> OR\nan <code class=\"docutils literal notranslate\"><span class=\"pre\">ip</span></code>, but not both. Use <code class=\"docutils literal notranslate\"><span class=\"pre\">null</span></code> for the option not chosen.</p></dd>", "a[href=\"#PeerDisconnect\"]": "<dt class=\"sig sig-object py\" id=\"PeerDisconnect\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerDisconnect</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ip</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">String</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">port</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Int32</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Disconnect from the peer and remove them from the given addresses list if\nthey are on it.</p></dd>", "a[href=\"#PeerUptime\"]": "<dt class=\"sig sig-object py\" id=\"PeerUptime\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerUptime</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">UInt64</span></span></span></dt><dd><p>Get the uptime of the node in milliseconds.</p></dd>", "a[href=\"#LeaveNetwork\"]": "<dt class=\"sig sig-object py\" id=\"LeaveNetwork\">\n<span class=\"sig-name descname\"><span class=\"pre\">LeaveNetwork</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">network_id</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Int32</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Attempt to leave the specified network.</p></dd>", "a[href=\"#GetBlockInfo\"]": "<dt class=\"sig sig-object py\" id=\"GetBlockInfo\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetBlockInfo</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get information, such as height, timings, and transaction counts for the\ngiven block.</p></dd>", "a[href=\"#StartBaker\"]": "<dt class=\"sig sig-object py\" id=\"StartBaker\">\n<span class=\"sig-name descname\"><span class=\"pre\">StartBaker</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Start the validator.</p></dd>", "a[href=\"#SendTransaction\"]": "<dt class=\"sig sig-object py\" id=\"SendTransaction\">\n<span class=\"sig-name descname\"><span class=\"pre\">SendTransaction</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">network_id</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Int32</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">payload</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"pre\">Byte</span><span class=\"p\"><span class=\"pre\">]</span></span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Send a transaction to the given network.\nThe node will do basic transaction validation, such as signature checks and\naccount nonce checks, and if these fail, the call will return a gRPC error.\nThe payload is in binary encoding, read more in the\n<a class=\"reference internal\" href=\"#grpc-transaction-encoding\"><span class=\"std std-ref\">Transaction encoding</span></a> section.</p></dd>", "a[href=\"#PeerTotalSent\"]": "<dt class=\"sig sig-object py\" id=\"PeerTotalSent\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerTotalSent</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">UInt64</span></span></span></dt><dd><p>Get the total number of packets sent by the node.</p></dd>", "a[href=\"#PeerTotalReceive\"]": "<dt class=\"sig sig-object py\" id=\"PeerTotalReceive\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerTotalReceive</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">UInt64</span></span></span></dt><dd><p>Get the total number of packets received by the node.</p></dd>", "a[href=\"#GetTransactionStatus\"]": "<dt class=\"sig sig-object py\" id=\"GetTransactionStatus\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetTransactionStatus</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">transaction_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">TransactionHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get the status of a given transaction.</p></dd>", "a[href=\"#GetPoolStatus\"]": "<dt class=\"sig sig-object py\" id=\"GetPoolStatus\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetPoolStatus</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">passive_delegation</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Bool</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">baker_id</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">UInt64</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get the status of a pool.\nIf <code class=\"docutils literal notranslate\"><span class=\"pre\">passive_delegation</span> <span class=\"pre\">==</span> <span class=\"pre\">true</span></code>, this returns the status for the passive delegators.\nOtherwise, it returns the status for the validator with the specified ID (if it exists).</p></dd>", "a[href=\"#DumpStop\"]": "<dt class=\"sig sig-object py\" id=\"DumpStop\">\n<span class=\"sig-name descname\"><span class=\"pre\">DumpStop</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Stop dumping packages. <em>Only available on a node built with the\nnetwork_dump feature.</em></p></dd>", "a[href=\"#GetConsensusStatus\"]": "<dt class=\"sig sig-object py\" id=\"GetConsensusStatus\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetConsensusStatus</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get the information about the consensus.</p></dd>", "a[href=\"#GetModuleList\"]": "<dt class=\"sig sig-object py\" id=\"GetModuleList\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetModuleList</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of all smart contract modules that exist in the state at the end of the given block.</p></dd>", "a[href=\"#GetModuleSource\"]": "<dt class=\"sig sig-object py\" id=\"GetModuleSource\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetModuleSource</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">module_ref</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">ModuleReference</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">?[Byte]</span></span></span></dt><dd><p>Get the binary source of a smart contract module.</p></dd>", "a[href=\"#GetBirkParameters\"]": "<dt class=\"sig sig-object py\" id=\"GetBirkParameters\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetBirkParameters</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get an overview of the parameters used for validators.</p></dd>", "a[href=\"#GetBakerList\"]": "<dt class=\"sig sig-object py\" id=\"GetBakerList\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetBakerList</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of all validator IDs registered at that block in ascending order. Or\n<code class=\"docutils literal notranslate\"><span class=\"pre\">null</span></code>, if the block is invalid.</p></dd>", "a[href=\"#PeerVersion\"]": "<dt class=\"sig sig-object py\" id=\"PeerVersion\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerVersion</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">String</span></span></span></dt><dd><p>Get the version of the node software.</p></dd>", "a[href=\"#GetIdentityProviders\"]": "<dt class=\"sig sig-object py\" id=\"GetIdentityProviders\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetIdentityProviders</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of all identity providers that exist in the state at the end of the given block.</p></dd>", "a[href=\"#InvokeContract\"]": "<dt class=\"sig sig-object py\" id=\"InvokeContract\">\n<span class=\"sig-name descname\"><span class=\"pre\">InvokeContract</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">context</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">ContractContext</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Invoke a smart contract instance and view its results as if it had been\nupdated at the end of the given block. Please note that <em>this is not a\ntransaction</em>, so it won\u2019t affect the contract on chain. It only simulates the invocation.</p></dd>", "a[href=\"#PeerStats\"]": "<dt class=\"sig sig-object py\" id=\"PeerStats\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerStats</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">include_bootstrappers</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Bool</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">PeerStatsResponse</span></span></span></dt><dd><p>Get information on the peers that the node is connected to.</p></dd>", "a[href=\"#GetBlocksAtHeight\"]": "<dt class=\"sig sig-object py\" id=\"GetBlocksAtHeight\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetBlocksAtHeight</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_height</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHeight</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of the blocks at the given height.</p></dd>", "a[href=\"#GetNextAccountNonce\"]": "<dt class=\"sig sig-object py\" id=\"GetNextAccountNonce\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetNextAccountNonce</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">account_address</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">AccountAddress</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Returns the next available nonce for this account.</p></dd>", "a[href=\"#NodeInfo\"]": "<dt class=\"sig sig-object py\" id=\"NodeInfo\">\n<span class=\"sig-name descname\"><span class=\"pre\">NodeInfo</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">NodeInfoResponse</span></span></span></dt><dd><p>Get information about the running node.</p></dd>", "a[href=\"#GetAnonymityRevokers\"]": "<dt class=\"sig sig-object py\" id=\"GetAnonymityRevokers\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetAnonymityRevokers</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of all anonymity revokers that exist in the state at the end of the given block.</p></dd>", "a[href=\"#GetAccountNonFinalizedTransactions\"]": "<dt class=\"sig sig-object py\" id=\"GetAccountNonFinalizedTransactions\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetAccountNonFinalizedTransactions</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">account_address</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">AccountAddress</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of non-finalized transactions present on an account.</p></dd>", "a[href=\"#StopBaker\"]": "<dt class=\"sig sig-object py\" id=\"StopBaker\">\n<span class=\"sig-name descname\"><span class=\"pre\">StopBaker</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Stop the validator.</p></dd>", "a[href=\"#GetAccountInfo\"]": "<dt class=\"sig sig-object py\" id=\"GetAccountInfo\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetAccountInfo</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">address</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">AccountAddress</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get the state of an account in the given block.</p></dd>", "a[href=\"#GetInstances\"]": "<dt class=\"sig sig-object py\" id=\"GetInstances\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetInstances</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of all smart contract instances that exist in the state at the end\nof the given block.</p></dd>", "a[href=\"#GetAccountList\"]": "<dt class=\"sig sig-object py\" id=\"GetAccountList\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetAccountList</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of all accounts that exist in the state at the end of the given block.</p></dd>", "a[href=\"#Shutdown\"]": "<dt class=\"sig sig-object py\" id=\"Shutdown\">\n<span class=\"sig-name descname\"><span class=\"pre\">Shutdown</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Shut down the node.</p></dd>", "a[href=\"#GetCryptographicParameters\"]": "<dt class=\"sig sig-object py\" id=\"GetCryptographicParameters\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetCryptographicParameters</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get the cryptographic parameters used in the given block.</p></dd>", "a[href=\"#GetBannedPeers\"]": "<dt class=\"sig sig-object py\" id=\"GetBannedPeers\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetBannedPeers</span></span><span class=\"sig-paren\">(</span><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">PeerListResponse</span></span></span></dt><dd><p>Get a list of banned peers.</p></dd>", "a[href=\"#UnbanNode\"]": "<dt class=\"sig sig-object py\" id=\"UnbanNode\">\n<span class=\"sig-name descname\"><span class=\"pre\">UnbanNode</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">node_id</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">String</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">port</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">UInt32</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ip</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">String</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">catchup_status</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">CatchupStatus</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Unban a previously banned node. Note that you should provide a <code class=\"docutils literal notranslate\"><span class=\"pre\">node_id</span></code> OR\nan <code class=\"docutils literal notranslate\"><span class=\"pre\">ip</span></code>, but not both. Use <code class=\"docutils literal notranslate\"><span class=\"pre\">null</span></code> for the option not chosen.</p></dd>", "a[href=\"#JoinNetwork\"]": "<dt class=\"sig sig-object py\" id=\"JoinNetwork\">\n<span class=\"sig-name descname\"><span class=\"pre\">JoinNetwork</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">network_id</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Int32</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Attempt to join the specified network.</p></dd>", "a[href=\"#GetBlockSummary\"]": "<dt class=\"sig sig-object py\" id=\"GetBlockSummary\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetBlockSummary</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a summary of the transactions and data in a given block.</p></dd>", "a[href=\"#GetInstanceInfo\"]": "<dt class=\"sig sig-object py\" id=\"GetInstanceInfo\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetInstanceInfo</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">address</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">ContractAddress</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get information about the given smart contract instance in the given block.</p></dd>", "a[href=\"#DumpStart\"]": "<dt class=\"sig sig-object py\" id=\"DumpStart\">\n<span class=\"sig-name descname\"><span class=\"pre\">DumpStart</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">file</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">FilePath</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">raw</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Bool</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Start dumping packages into the specified file. <em>Only available on a node\nbuilt with the network_dump feature.</em></p></dd>", "a[href=\"#PeerList\"]": "<dt class=\"sig sig-object py\" id=\"PeerList\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerList</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">include_bootstrappers</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Bool</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">PeerListResponse</span></span></span></dt><dd><p>Get a list of the peers that the node is connected to.</p></dd>", "a[href=\"#PeerConnect\"]": "<dt class=\"sig sig-object py\" id=\"PeerConnect\">\n<span class=\"sig-name descname\"><span class=\"pre\">PeerConnect</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ip</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">String</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">port</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Int32</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">Bool</span></span></span></dt><dd><p>Suggest the node to connect to the submitted peer. If successful, this adds\nthe peer to the list of peers.</p></dd>", "a[href=\"#GetAncestors\"]": "<dt class=\"sig sig-object py\" id=\"GetAncestors\">\n<span class=\"sig-name descname\"><span class=\"pre\">GetAncestors</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">block_hash</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">BlockHash</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">amount</span></span><span class=\"p\"><span class=\"pre\">:</span></span> <span class=\"n\"><span class=\"pre\">Amount</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">JsonResponse</span></span></span></dt><dd><p>Get a list of the blocks preceding the given block. The list will contain at\nmost <code class=\"docutils literal notranslate\"><span class=\"pre\">amount</span></code> blocks.</p></dd>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
