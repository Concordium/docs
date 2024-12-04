selector_to_html = {"a[href=\"../resources/glossary.html#term-Transaction\"]": "<dt id=\"term-Transaction\">Transaction</dt><dd><p>An atomic operation that defines a change of state in the ledger, such as transferring funds from one account to another. A transaction typically has a sender account and a <a class=\"reference internal\" href=\"#term-Transaction-Sequence-Number\"><span class=\"xref std std-term\">transaction sequence number</span></a>, and incurs a fee. The sender account must sign the transaction to authorize it. (The exception to this is a credential deployment transaction that creates a new account, which does not have a sender account.)</p></dd>", "a[href=\"../resources/glossary.html#term-Staked-Amount\"]": "<dt id=\"term-Staked-Amount\">Staked Amount</dt><dd><p><a class=\"reference internal\" href=\"#term-Validator\"><span class=\"xref std std-term\">Validators</span></a> can have part of the balance of their account staked. The amount that is staked remains locked while staked and cannot be transferred or moved in any way. The staked amount is proportional to the <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a> of a validator.</p><p><a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegators</span></a> can delegate stake to a staking pool or passive delegation. This affects the staked amount of the validator and thus their lottery power.</p></dd>", "a[href=\"../resources/glossary.html#term-Winning-probability\"]": "<dt id=\"term-Winning-probability\">Winning probability</dt><dd><p>The winning probability is the probability that a validator wins in a given round. The probability is <span class=\"math notranslate nohighlight\">\\(\\alpha\\)</span>, which equals the validator\u2019s relative stake.</p></dd>", "a[href=\"../resources/glossary.html#term-Quorum-certificate\"]": "<dt id=\"term-Quorum-certificate\">Quorum certificate</dt><dd><p>When the validators sign the block, their collective signatures are aggregated to form a quorum certificate. This quorum certificate is then included in the next block. If the round leader fails to produce a block in the <a class=\"reference internal\" href=\"#term-Round\"><span class=\"xref std std-term\">round</span></a>, or not enough signatures were gathered for a quorum certificate, then the validators will instead send timeout messages, which are aggregated to form a <a class=\"reference internal\" href=\"#term-Timeout-certificate\"><span class=\"xref std std-term\">timeout certificate</span></a>. Each block either contains a quorum certificate or a timeout certificate for the previous round. A block always contains a quorum certificate as it serves as a reference to the parent block. The block might contain a timeout certificate if the previous round timed out. A quorum certificate or a timeout certificate ensures that the protocol progresses. When a node sees a valid quorum certificate or timeout certificate it progresses to the next round.</p></dd>", "a[href=\"../resources/glossary.html#term-Block\"]": "<dt id=\"term-Block\">Block</dt><dd><p>The basic unit of the blockchain, which is produced by a <a class=\"reference internal\" href=\"#term-Validator\"><span class=\"xref std std-term\">validator</span></a>. A block contains a (possibly empty) list of <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transactions</span></a>, and has a pointer to a previous block (with the exception of the <a class=\"reference internal\" href=\"#term-Genesis-Block\"><span class=\"xref std std-term\">genesis block</span></a>). A block and its predecessors form a chain, and the sequence of transactions they contain form a ledger. Each block has a <a class=\"reference internal\" href=\"#term-Slot\"><span class=\"xref std std-term\">slot time</span></a> that records when it was produced. A block also contains information relating to consensus, for instance establishing which validator created the block, and that the validator was entitled to do so.</p></dd>", "a[href=\"../resources/glossary.html#term-Node\"]": "<dt id=\"term-Node\">Node</dt><dd><p>A participant in the Concordium network. Nodes receive blocks and transactions, and track the current state of the blockchain. A <a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">validator node</span></a> has cryptographic keys that enable it to take part in validation. A node without these keys is referred to as a <em>passive node</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Lottery-Power\"]": "<dt id=\"term-Lottery-Power\">Lottery Power</dt><dd><p>A validator\u2019s lottery power is its relative stake and is therefore proportional to the <a class=\"reference internal\" href=\"#term-Staked-Amount\"><span class=\"xref std std-term\">staked amount</span></a> of that validator. The lottery power is updated each <a class=\"reference internal\" href=\"#term-Pay-day\"><span class=\"xref std std-term\">pay day</span></a>, and is based on the stake distribution at the end of the epoch before last. (This delay ensures that the stake distribution is determined before the randomness that fixes the validators for the epoch; otherwise, stakeholders might redistribute their stake to luckier validators, which undermines the security of the system.) <a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> affects the lottery power of the validator by increasing their stake, thus increasing the odds of that validator being chosen to produce a block.</p></dd>", "a[href=\"../resources/glossary.html#term-Validator\"]": "<dt id=\"term-Validator\">Validator</dt><dd><p>A node that participates in the production of <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">blocks</span></a>, referred to as <em>validation</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Concordium-Byzantine-Fault-Tolerance-BFT-protocol\"]": "<dt id=\"term-Concordium-Byzantine-Fault-Tolerance-BFT-protocol\">Concordium Byzantine Fault Tolerance (BFT) protocol</dt><dd><p>The consensus protocol for the blockchain. The protocol offers high transaction throughput and lower confirmation time because a block can be produced as soon as the previous block has been signed. The protocol proceeds by rounds. In each round, a predetermined leader among the validators should produce a block. The other validators then sign this block, and their collective signatures are aggregated to form a quorum certificate (QC). This quorum certificate is then included in the next block. If the leader fails to produce a block in the round, or not enough signatures were gathered for a QC, then the validators will instead send timeout messages, which are aggregated to form a timeout certificate (TC). Each block always contains a quorum certificate and may contain a timeout certificate for the previous round if and only if the previous round timed out. When blocks on a common chain in two consecutive rounds have quorum certificates, the block in the first of these rounds (together with its ancestors) is considered final. At this point, the protocol ensures that it cannot be rolled back. The two consecutive blocks must also be within the same epoch.</p></dd>", "a[href=\"../resources/glossary.html#term-Pay-day\"]": "<dt id=\"term-Pay-day\">Pay day</dt><dd><p>A pay day is the point at which new CCDs are minted and rewards to validators and delegators are distributed. The stakes of validators and delegators are updated each pay day (but the changes for each pay day are fixed one epoch before). Pay day is thus when new validators begin validation and updates to delegation and validation take effect, such as increasing stake, restaking preferences, adding delegation. In the case of decreasing stake or removing delegation or validation, there is a longer cool-down period, after which the change is executed at the <strong>next pay day after the cool-down period ends</strong>. The cool-down period is 3 weeks. Pay day is every 24 hours (i.e., 24 epochs) at approximately 09:00 UTC on Mainnet and approximately 12:00 UTC on Testnet. The list of lottery winners that are elected to be the leader for every round in that epoch is established at the beginning of the epoch.</p></dd>", "a[href=\"../resources/glossary.html#term-Cool-down-period\"]": "<dt id=\"term-Cool-down-period\">Cool-down period</dt><dd><p>A period of time during which the funds are frozen and cannot be spent.</p></dd>", "a[href=\"../resources/glossary.html#term-Private-keys\"]": "<dt id=\"term-Private-keys\">Private keys</dt><dd><p>A random, secret string that is used in cryptography and cryptocurrency to prove ownership of an account and sign transactions to send, spend, delegate, and stake CCDs. A wallet consists of a set of public addresses and private keys. Anyone can deposit cryptocurrency in a public address, but funds cannot be removed from an address without the corresponding private key.</p></dd>", "a[href=\"../resources/glossary.html#term-Genesis-Block\"]": "<dt id=\"term-Genesis-Block\">Genesis Block</dt><dd><p>The first <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">block</span></a> in a <a class=\"reference internal\" href=\"#term-Chain\"><span class=\"xref std std-term\">chain</span></a>. The genesis block establishes the starting state of the chain, before any transactions have occurred.</p></dd>", "a[href=\"../resources/glossary.html#term-Round\"]": "<dt id=\"term-Round\">Round</dt><dd><p>Replaces slots in the Concordium BFT protocol. In each round, a predetermined leader among the validators should produce a block. Round leaders are determined each epoch, defined as a fixed time duration. Rounds are an index to a block or timeout. In every round, each validator checks locally whether they won the lottery, which entitles the winner to produce a block in that round. Zero, one, or multiple validators can win the lottery. The probability of these different events is controlled by the difficulty parameter <em>f</em>. For example, with difficulty 0.5 on average every second round will have a lottery winner.</p></dd>", "a[href=\"../resources/glossary.html#term-Staking-pool\"]": "<dt id=\"term-Staking-pool\">Staking pool</dt><dd><p>A validator and delegators that collectively pool their stake to participate in the consensus protocol and earn rewards. The validator runs a validator node on behalf of the staking pool to produce blocks using the collective stake of the pool to determine its lottery power. Rewards are accrued to the pool each time the validator produces a block. Each pay day, the accrued rewards are distributed to the pool\u2019s participants in proportion to their relative stakes in the pool, with the validator (the pool owner) receiving an additional commission from the delegators\u2019 rewards.</p></dd>", "a[href=\"../resources/glossary.html#term-Timeout-certificate\"]": "<dt id=\"term-Timeout-certificate\">Timeout certificate</dt><dd><p>If the leader fails to produce a block in the round, or not enough signatures were gathered for a quorum certificate, then the finalizers will instead send timeout messages, which are aggregated to form a timeout certificate. A block always contains a quorum certificate as it serves as a reference to the parent block. The block might contain a timeout certificate if the previous round timed out. A quorum certificate or a timeout certificate ensures that the protocol progresses. When a node sees a valid quorum certificate or timeout certificate it progresses to the next round.</p></dd>", "a[href=\"../resources/glossary.html#term-Leader-Election\"]": "<dt id=\"term-Leader-Election\">Leader Election</dt><dd><p>In every round a leader is elected among the validators to produce a new block. The leader is chosen by hashing a leader election nonce and the round number, and interpreting the hash as a random number that picks a validator with probability equal to their relative stake. A new leader election nonce is generated every <a class=\"reference internal\" href=\"#term-Epoch\"><span class=\"xref std std-term\">epoch</span></a> by hashing block nonces from the previous epoch. So the sequence of leaders for every epoch is determined at the beginning of the epoch when the leader election nonce is fixed.</p><p>The <a class=\"reference internal\" href=\"#term-Winning-probability\"><span class=\"xref std std-term\">winning probability</span></a> is proportional to the validator\u2019s relative stake.</p><p>See <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Epoch\"]": "<dt id=\"term-Epoch\">Epoch</dt><dd><p>A time period that is approximately one hour on testnet and mainnet. At the start of each epoch, a <a class=\"reference internal\" href=\"#term-Leader-Election\"><span class=\"xref std std-term\">leadership election nonce</span></a> is computed based on the block nonces of the previous epoch. The leadership election nonce is valid for the duration of the epoch. Each epoch has a nominal ending, and when a block is finalized after this nominal ending then epoch transition occurs.</p></dd>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
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
