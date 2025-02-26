selector_to_html = {"a[href=\"../resources/glossary.html#term-Credential-holder\"]": "<dt id=\"term-Credential-holder\">Credential holder</dt><dd><p>The user holding a credential. An account is owned by one or more credential holders.</p></dd>", "a[href=\"../resources/glossary.html#term-Initial-Account\"]": "<dt id=\"term-Initial-Account\">Initial Account</dt><dd><p>An intial account is an account submitted to the chain by the identity provider during the process of requesting a new identity. The initial account can perform all of the same actions as a regular account, however the real-life identity of the initial-account owner is known by the identity provider who submitted it to the chain. In contrast, the real-life identity of the owner of a regular account can only be ascertained by the identity disclosure authority working in concert with the identity provider.</p><p>Initial accounts are only relevant for Desktop Wallet.</p></dd>", "a[href=\"../resources/glossary.html#term-On-chain\"]": "<dt id=\"term-On-chain\">On-chain</dt><dd><p>Refers to an an event or activity that is propagated through the Concordium network and recorded on the Concordium blockchain. The recording can be explicit or implicit as part of the consensus protocol. An example of the former is a transaction such as a CCD transfer, an example of the latter are the rewards given out to, e.g., validators.</p></dd>", "a[href=\"../resources/glossary.html#term-Cryptographic-proof\"]": "<dt id=\"term-Cryptographic-proof\">Cryptographic proof</dt><dd><p>A method by which one party (the prover) can prove to another party (the verifier) that a given statement is true while the prover avoids conveying any additional information apart from the fact that the statement is indeed true. This is known as a <a class=\"reference internal\" href=\"#term-Zero-knowledge-proof\"><span class=\"xref std std-term\">zero-knowledge proof</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Staked-Amount\"]": "<dt id=\"term-Staked-Amount\">Staked Amount</dt><dd><p><a class=\"reference internal\" href=\"#term-Validator\"><span class=\"xref std std-term\">Validators</span></a> can have part of the balance of their account staked. The amount that is staked remains locked while staked and cannot be transferred or moved in any way. The staked amount is proportional to the <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a> of a validator.</p><p><a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegators</span></a> can delegate stake to a staking pool or passive delegation. This affects the staked amount of the validator and thus their lottery power.</p></dd>", "a[href=\"../resources/glossary.html#term-Transfer-with-schedule\"]": "<dt id=\"term-Transfer-with-schedule\">Transfer with schedule</dt><dd><p>A special kind of transfer of CCD that makes the CCD amount available to the receiver only in a limited way until a specified point in time. The point in time is specified as part of a transfer. The CCD are immediately owned by the receiver account, and the transfer cannot be revoked, but the receiver cannot spend the CCD until the specified time.</p></dd>", "a[href=\"../resources/glossary.html#term-Validator\"]": "<dt id=\"term-Validator\">Validator</dt><dd><p>A node that participates in the production of <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">blocks</span></a>, referred to as <em>validation</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Off-chain\"]": "<dt id=\"term-Off-chain\">Off-chain</dt><dd><p>Refers to activities outside of the Concordium blockchain. Some on-chain actions need preliminary actions off-chain, for example to create an account on the Concordium blockchain the user must first work with an identity provider, e.g., via their website or mobile application, to obtain a specific digital certificate. Concordium refers to this certificate as the <strong>identity</strong>.</p></dd>", "a[href=\"../resources/glossary.html#term-Node\"]": "<dt id=\"term-Node\">Node</dt><dd><p>A participant in the Concordium network. Nodes receive blocks and transactions, and track the current state of the blockchain. A <a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">validator node</span></a> has cryptographic keys that enable it to take part in validation. A node without these keys is referred to as a <em>passive node</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Identity\"]": "<dt id=\"term-Identity\">Identity</dt><dd><p>Before opening an account on the Concordium Platform, one\u2019s real-world identity must be verified and recorded by an <a class=\"reference internal\" href=\"#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a>. A user\u2019s identity is encrypted on-chain, however their real-world identity can be disclosed in response to a valid request from a government authority.</p></dd>", "a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>", "a[href=\"../resources/glossary.html#term-Alias\"]": "<dt id=\"term-Alias\">Alias</dt><dd><p>A kind of sub-account structure that can be created. An account owner can create different aliases for different uses to keep track of transfers and assign them meaning. Each account has 16777216 addresses, namely a so-called canonical account address together with matching account aliases. The canonical account address is derived when an account is created on chain. The other 16 million addresses with matching initial 29 bytes are referred to as account aliases for the same account. Thus, accounts can be referred to by any address whose initial 29 bytes match.</p></dd>", "a[href=\"../resources/glossary.html#term-Transaction-Sequence-Number\"]": "<dt id=\"term-Transaction-Sequence-Number\">Transaction Sequence Number</dt><dd><p>A sequence number that orders <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transaction</span></a> on a given <a class=\"reference internal\" href=\"#term-Account\"><span class=\"xref std std-term\">account</span></a>. In a ledger, all transactions for an account must be ordered with consecutive transaction sequence numbers, starting from 1. Transaction sequence numbers ensure that a transaction cannot be repeated in the ledger, and that the transactions occur in the order intended by the sender account holder.</p></dd>", "a[href=\"../resources/glossary.html#term-Credential\"]": "<dt id=\"term-Credential\">Credential</dt><dd><p>See <a class=\"reference internal\" href=\"#term-Account-credential\"><span class=\"xref std std-term\">account credential</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Identity-Provider\"]": "<dt id=\"term-Identity-Provider\">Identity Provider</dt><dd><p>A person or organization that performs off-chain identification of users. Users are required to obtain an identity object from an identity provider in order to open an account on the Concordium Platform.</p></dd>"}
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
