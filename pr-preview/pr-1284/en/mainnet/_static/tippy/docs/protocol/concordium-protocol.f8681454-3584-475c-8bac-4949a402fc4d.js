selector_to_html = {"a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>", "a[href=\"../resources/glossary.html#term-Identity-Provider\"]": "<dt id=\"term-Identity-Provider\">Identity Provider</dt><dd><p>A person or organization that performs off-chain identification of users. Users are required to obtain an identity object from an identity provider in order to open an account on the Concordium Platform.</p></dd>", "a[href=\"../resources/glossary.html#term-Concordium-Byzantine-Fault-Tolerance-BFT-protocol\"]": "<dt id=\"term-Concordium-Byzantine-Fault-Tolerance-BFT-protocol\">Concordium Byzantine Fault Tolerance (BFT) protocol</dt><dd><p>The consensus protocol for the blockchain. The protocol offers high transaction throughput and lower confirmation time because a block can be produced as soon as the previous block has been signed. The protocol proceeds by rounds. In each round, a predetermined leader among the validators should produce a block. The other validators then sign this block, and their collective signatures are aggregated to form a quorum certificate (QC). This quorum certificate is then included in the next block. If the leader fails to produce a block in the round, or not enough signatures were gathered for a QC, then the validators will instead send timeout messages, which are aggregated to form a timeout certificate (TC). Each block always contains a quorum certificate and may contain a timeout certificate for the previous round if and only if the previous round timed out. When blocks on a common chain in two consecutive rounds have quorum certificates, the block in the first of these rounds (together with its ancestors) is considered final. At this point, the protocol ensures that it cannot be rolled back. The two consecutive blocks must also be within the same epoch.</p></dd>", "a[href=\"../resources/glossary.html#term-Testnet\"]": "<dt id=\"term-Testnet\">Testnet</dt><dd><p>A test network run by Concordium to test its protocols and software. There can be several test networks in existence at the same time. All the features are tested on the testnet before they are released on the <a class=\"reference internal\" href=\"#term-Mainnet\"><span class=\"xref std std-term\">mainnet</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Mainnet\"]": "<dt id=\"term-Mainnet\">Mainnet</dt><dd><p>The main Concordium network which launched in June 2021. The mainnet will receive periodic upgrades, but in contrast to the <a class=\"reference internal\" href=\"#term-Testnet\"><span class=\"xref std std-term\">testnet</span></a>, it will never be reset, and accounts created on the mainnet will remain indefinitely.</p></dd>", "a[href=\"../resources/glossary.html#term-WebAssembly\"]": "<dt id=\"term-WebAssembly\">WebAssembly</dt><dd><p>WebAssembly (Wasm) defines a portable binary-code format and a corresponding text format for executable programs as well as software interfaces for facilitating interactions between such programs and their host environment. Smart contracts are deployed on chain as Wasm files.</p></dd>", "a[href=\"../resources/glossary.html#term-Validator\"]": "<dt id=\"term-Validator\">Validator</dt><dd><p>A node that participates in the production of <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">blocks</span></a>, referred to as <em>validation</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Node\"]": "<dt id=\"term-Node\">Node</dt><dd><p>A participant in the Concordium network. Nodes receive blocks and transactions, and track the current state of the blockchain. A <a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">validator node</span></a> has cryptographic keys that enable it to take part in validation. A node without these keys is referred to as a <em>passive node</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Staked-Amount\"]": "<dt id=\"term-Staked-Amount\">Staked Amount</dt><dd><p><a class=\"reference internal\" href=\"#term-Validator\"><span class=\"xref std std-term\">Validators</span></a> can have part of the balance of their account staked. The amount that is staked remains locked while staked and cannot be transferred or moved in any way. The staked amount is proportional to the <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a> of a validator.</p><p><a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegators</span></a> can delegate stake to a staking pool or passive delegation. This affects the staked amount of the validator and thus their lottery power.</p></dd>", "a[href=\"../resources/glossary.html#term-Proof-of-stake\"]": "<dt id=\"term-Proof-of-stake\">Proof-of-stake</dt><dd><p>A consensus mechanism where validators must stake (lock) CCD tokens to participate in block production. The chance of being selected to produce a block is proportional to the amount staked.</p></dd>", "a[href=\"../resources/glossary.html#term-Smart-contract\"]": "<dt id=\"term-Smart-contract\">Smart contract</dt><dd><p>A computer program or a transaction protocol that is intended to automatically execute, control or document events and actions according to the terms of a contract or an agreement. An example is a smart contract for selling NFTs on a marketplace; it may contain information about royalties, selling the NFT on to others, and so on.</p></dd>"}
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
