selector_to_html = {"a[href=\"../resources/glossary.html#term-Best-chain\"]": "<dt id=\"term-Best-chain\">Best chain</dt><dd><p>The chain a <a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">baker</span></a> will build upon when making a new block. The best chain selection procedure is determined by the consensus protocol. In particular, the best chain has the most <a class=\"reference internal\" href=\"#term-Finalization\"><span class=\"xref std std-term\">finalized</span></a> blocks, and the most blocks after the last finalized block.</p></dd>", "a[href=\"../resources/glossary.html#term-Quorum-certificate\"]": "<dt id=\"term-Quorum-certificate\">Quorum certificate</dt><dd><p>When the members of the finalization committee finalize the block, their collective signatures are aggregated to form a quorum certificate. This quorum certificate is then included in the next block. If the leader fails to produce a block in the <a class=\"reference internal\" href=\"#term-Round\"><span class=\"xref std std-term\">round</span></a>, or not enough signatures were gathered for a quorum certificate, then the finalizers will instead send timeout messages, which are aggregated to form a <a class=\"reference internal\" href=\"#term-Timeout-certificate\"><span class=\"xref std std-term\">timeout certificate</span></a>. Each block either contains a quorum certificate or a timeout certificate for the previous round. A block always contains a quorum certificate as it serves as a reference to the parent block. The block might contain a timeout certificate if the previous round timed out. A quorum certificate or a timeout certificate ensures that the protocol progresses. When a node sees a valid quorum certificate or timeout certificate it progresses to the next round.</p></dd>", "a[href=\"../resources/glossary.html#term-Private-keys\"]": "<dt id=\"term-Private-keys\">Private keys</dt><dd><p>A random, secret string that is used in cryptography and cryptocurrency to prove ownership of an account and sign transactions to send, spend, delegate, and stake CCDs. A wallet consists of a set of public addresses and private keys. Anyone can deposit cryptocurrency in a public address, but funds cannot be removed from an address without the corresponding private key.</p></dd>", "a[href=\"../resources/glossary.html#term-Pay-day\"]": "<dt id=\"term-Pay-day\">Pay day</dt><dd><p>A pay day is the point at which new CCDs are minted and rewards to bakers and delegators are distributed. The stakes of bakers and delegators are updated each pay day (but the changes for each pay day are fixed one epoch before). Pay day is thus when new bakers begin baking and updates to delegation and baking take effect, such as increasing stake, restaking preferences, adding delegation. In the case of decreasing stake or removing delegation or baking, there is a longer cool-down period, after which the change is executed at the <strong>next pay day after the cool-down period ends</strong>. The cool-down period is 2 weeks for delegators and 3 weeks for bakers. Pay day is every 24 hours (i.e., 24 epochs) at approximately 09:00 UTC on Mainnet and approximately 12:00 UTC on Testnet. Bakers are finalized at the end of the epoch before that next epoch where they are eligible to bake.</p></dd>", "a[href=\"../resources/glossary.html#term-Winning-probability\"]": "<dt id=\"term-Winning-probability\">Winning probability</dt><dd><p>The winning probability is the probability that a baker wins in a given round. The probability is <span class=\"math notranslate nohighlight\">\\(\\alpha\\)</span>, which equals the baker\u2019s relative stake.</p></dd>", "a[href=\"../resources/glossary.html#term-Baker-pool\"]": "<dt id=\"term-Baker-pool\">Baker pool</dt><dd><p>A baker and delegators that collectively pool their stake to participate in the consensus protocol and earn rewards. The baker runs a baker node on behalf of the baker pool to bake (and possibly finalize) blocks using the collective stake of the pool to determine its lottery power. Rewards are accrued to the pool each time the baker produces a block. Each pay day, the accrued rewards are distributed to the pool\u2019s participants in proportion to their relative stakes in the pool, with the baker (the pool owner) receiving an additional commission from the delegators\u2019 rewards.</p></dd>", "a[href=\"../resources/glossary.html#term-Block\"]": "<dt id=\"term-Block\">Block</dt><dd><p>The basic unit of the blockchain, which is produced by a <a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">baker</span></a>. A block contains a (possibly empty) list of <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transactions</span></a>, and has a pointer to a previous block (with the exception of the <a class=\"reference internal\" href=\"#term-Genesis-Block\"><span class=\"xref std std-term\">genesis block</span></a>). A block and its predecessors form a chain, and the sequence of transactions they contain form a ledger. Each block has a <a class=\"reference internal\" href=\"#term-Slot\"><span class=\"xref std std-term\">slot time</span></a> that records when it was baked. A block also contains information relating to consensus, for instance establishing which baker created the block, and that the baker was entitled to do so.</p></dd>", "a[href=\"../resources/glossary.html#term-Transaction\"]": "<dt id=\"term-Transaction\">Transaction</dt><dd><p>An atomic operation that defines a change of state in the ledger, such as transferring funds from one account to another. A transaction typically has a sender account and a <a class=\"reference internal\" href=\"#term-Transaction-Sequence-Number\"><span class=\"xref std std-term\">transaction sequence number</span></a>, and incurs a fee. The sender account must sign the transaction to authorize it. (The exception to this is a credential deployment transaction that creates a new account, which does not have a sender account.)</p></dd>", "a[href=\"../resources/glossary.html#term-Lottery-Power\"]": "<dt id=\"term-Lottery-Power\">Lottery Power</dt><dd><p>A baker\u2019s lottery power is its relative stake and is therefore proportional to the <a class=\"reference internal\" href=\"#term-Staked-Amount\"><span class=\"xref std std-term\">staked amount</span></a> of that baker. The lottery power is updated each <a class=\"reference internal\" href=\"#term-Epoch\"><span class=\"xref std std-term\">epoch</span></a>, and is based on the stake distribution at the end of the epoch before last. (This delay ensures that the stake distribution is determined before the randomness that fixes the bakers for the epoch: otherwise, stakeholders might redistribute their stake to luckier bakers, which undermines the security of the system.) <a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> affects the lottery power of the baker by increasing their stake, thus increasing the odds of that baker being chosen to bake a block.</p></dd>", "a[href=\"../resources/glossary.html#term-Epoch\"]": "<dt id=\"term-Epoch\">Epoch</dt><dd><p>A time period that is approximately one hour on testnet and mainnet. At the start of each epoch, a <a class=\"reference internal\" href=\"#term-Leader-Election\"><span class=\"xref std std-term\">leadership election nonce</span></a> is computed based on the block nonces of the previous epoch. The leadership election nonce is valid for the duration of the epoch. Each epoch has a nominal ending, and when a block is finalized after this nominal ending then epoch transition occurs.</p></dd>", "a[href=\"../resources/glossary.html#term-Genesis-Block\"]": "<dt id=\"term-Genesis-Block\">Genesis Block</dt><dd><p>The first <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">block</span></a> in a <a class=\"reference internal\" href=\"#term-Chain\"><span class=\"xref std std-term\">chain</span></a>. The genesis block establishes the starting state of the chain, before any transactions have occurred.</p></dd>", "a[href=\"../resources/glossary.html#term-Finalization\"]": "<dt id=\"term-Finalization\">Finalization</dt><dd><p>The process by which a block is marked to be \u201cfinalized\u201d, i.e. part of the authoritative <a class=\"reference internal\" href=\"#term-Chain\"><span class=\"xref std std-term\">chain</span></a>. Transactions that are part of finalized blocks are considered authoritative. New blocks can be only added following the last finalized block. The finalization process is conducted by the bakers with a staked amount of at least 0.1% of the <a class=\"reference internal\" href=\"#term-Total-effective-stake\"><span class=\"xref std std-term\">total effective stake</span></a> in baker pools, known as the Finalization committee. Total effective stake in baker pools does not include passive delegation and any amount that exceeds the <a class=\"reference internal\" href=\"../concepts/concepts-delegation.html#delegation-caps\"><span class=\"std std-ref\">baker pool bounding caps</span></a>. Finalization has to happen for each round otherwise the blockchain cannot proceed to the next round.</p></dd>", "a[href=\"../resources/glossary.html#term-Cool-down-period\"]": "<dt id=\"term-Cool-down-period\">Cool-down period</dt><dd><p>A period of time during which a transaction is frozen. Examples of when cool-down periods apply include removing a baker and updating stake. The length of a cool-down period varies between transactions.</p></dd>", "a[href=\"../resources/glossary.html#term-Baker\"]": "<dt id=\"term-Baker\">Baker</dt><dd><p>A node that participates in the production of <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">blocks</span></a>, referred to as <em>baking</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Round\"]": "<dt id=\"term-Round\">Round</dt><dd><p>Replaces slots in the Concordium BFT protocol. In each round, a predetermined leader among the bakers should produce a block. Round leaders are determined each epoch, defined as a fixed time duration. Rounds are an index to a block or timeout.</p></dd>", "a[href=\"../resources/glossary.html#term-Node\"]": "<dt id=\"term-Node\">Node</dt><dd><p>A participant in the Concordium network. Nodes receive blocks and transactions, and track the current state of the blockchain. A <a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">baker node</span></a> has cryptographic keys that enable it to take part in baking and <a class=\"reference internal\" href=\"#term-Finalization\"><span class=\"xref std std-term\">finalization</span></a>. A node without these keys is referred to as a <em>passive node</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Consensus\"]": "<dt id=\"term-Consensus\">Consensus</dt><dd><p>The process by which nodes agree which <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transaction</span></a> have occurred and in what order. This consists of <a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">baking</span></a> and <a class=\"reference internal\" href=\"#term-Finalization\"><span class=\"xref std std-term\">finalization</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Timeout-certificate\"]": "<dt id=\"term-Timeout-certificate\">Timeout certificate</dt><dd><p>If the leader fails to produce a block in the round, or not enough signatures were gathered for a quorum certificate, then the finalizers will instead send timeout messages, which are aggregated to form a timeout certificate. A block always contains a quorum certificate as it serves as a reference to the parent block. The block might contain a timeout certificate if the previous round timed out. A quorum certificate or a timeout certificate ensures that the protocol progresses. When a node sees a valid quorum certificate or timeout certificate it progresses to the next round.</p></dd>", "a[href=\"../resources/glossary.html#term-Staked-Amount\"]": "<dt id=\"term-Staked-Amount\">Staked Amount</dt><dd><p><a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">Bakers</span></a> can have part of the balance of their account staked. The amount that is staked remains locked while staked and cannot be transferred or moved in any way. The staked amount is proportional to the <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a> of a baker.</p><p><a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegators</span></a> can delegate stake to a baker pool or passive delegation. This affects the staked amount of the baker and thus their lottery power.</p></dd>"}
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
