selector_to_html = {"a[href=\"../docs/resources/glossary.html#term-Leader-Election\"]": "<dt id=\"term-Leader-Election\">Leader Election</dt><dd><p>In every round a leader is elected among the validators to produce a new block. The leader is chosen by hashing a leader election nonce and the round number, and interpreting the hash as a random number that picks a validator with probability equal to their relative stake. A new leader election nonce is generated every <a class=\"reference internal\" href=\"#term-Epoch\"><span class=\"xref std std-term\">epoch</span></a> by hashing block nonces from the previous epoch. So the sequence of leaders for every epoch is determined at the beginning of the epoch when the leader election nonce is fixed.</p><p>The <a class=\"reference internal\" href=\"#term-Winning-probability\"><span class=\"xref std std-term\">winning probability</span></a> is proportional to the validator\u2019s relative stake.</p><p>See <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a>.</p></dd>", "a[href=\"../docs/resources/glossary.html#term-Transaction\"]": "<dt id=\"term-Transaction\">Transaction</dt><dd><p>An atomic operation that defines a change of state in the ledger, such as transferring funds from one account to another. A transaction typically has a sender account and a <a class=\"reference internal\" href=\"#term-Transaction-Sequence-Number\"><span class=\"xref std std-term\">transaction sequence number</span></a>, and incurs a fee. The sender account must sign the transaction to authorize it. (The exception to this is a credential deployment transaction that creates a new account, which does not have a sender account.)</p></dd>", "a[href=\"../docs/resources/glossary.html#term-Best-block\"]": "<dt id=\"term-Best-block\">Best block</dt><dd><p>This term is no longer used. See <a class=\"reference internal\" href=\"#term-Concordium-Byzantine-Fault-Tolerance-BFT-protocol\"><span class=\"xref std std-term\">Concordium Byzantine Fault Tolerance (BFT) protocol</span></a>.</p></dd>", "a[href=\"../docs/resources/glossary.html#term-Identity\"]": "<dt id=\"term-Identity\">Identity</dt><dd><p>Before opening an account on the Concordium Platform, one\u2019s real-world identity must be verified and recorded by an <a class=\"reference internal\" href=\"#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a>. A user\u2019s identity is encrypted on-chain, however their real-world identity can be disclosed in response to a valid request from a government authority.</p></dd>", "a[href=\"../docs/resources/glossary.html#term-Lottery-Power\"]": "<dt id=\"term-Lottery-Power\">Lottery Power</dt><dd><p>A validator\u2019s lottery power is its relative stake and is therefore proportional to the <a class=\"reference internal\" href=\"#term-Staked-Amount\"><span class=\"xref std std-term\">staked amount</span></a> of that validator. The lottery power is updated each <a class=\"reference internal\" href=\"#term-Pay-day\"><span class=\"xref std std-term\">pay day</span></a>, and is based on the stake distribution at the end of the epoch before last. (This delay ensures that the stake distribution is determined before the randomness that fixes the validators for the epoch; otherwise, stakeholders might redistribute their stake to luckier validators, which undermines the security of the system.) <a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> affects the lottery power of the validator by increasing their stake, thus increasing the odds of that validator being chosen to produce a block.</p></dd>", "a[href=\"../docs/resources/glossary.html#term-Transaction-Sequence-Number\"]": "<dt id=\"term-Transaction-Sequence-Number\">Transaction Sequence Number</dt><dd><p>A sequence number that orders <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transaction</span></a> on a given <a class=\"reference internal\" href=\"#term-Account\"><span class=\"xref std std-term\">account</span></a>. In a ledger, all transactions for an account must be ordered with consecutive transaction sequence numbers, starting from 1. Transaction sequence numbers ensure that a transaction cannot be repeated in the ledger, and that the transactions occur in the order intended by the sender account holder.</p></dd>", "a[href=\"../docs/resources/glossary.html#term-Shielded-balance\"]": "<dt id=\"term-Shielded-balance\">Shielded balance</dt><dd><p>(<a class=\"reference internal\" href=\"../docs/guides/shield-ccd-wallets.html#shielded-balance-feature-deprecation\"><span class=\"std std-ref\">deprecated</span></a>):</p><p>The part of the balance of an <a class=\"reference internal\" href=\"#term-Account\"><span class=\"xref std std-term\">account</span></a> that only the owner of the account can see. This is achieved by encrypting transfers to an account with the account\u2019s <a class=\"reference internal\" href=\"#term-Encryption-key\"><span class=\"xref std std-term\">encryption key</span></a>. Every participant of the Concordium network can see the <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Ciphertext\">ciphertexts</a> of all the transfers, however they provide no information on how many CCDs were transferred. The receiver of the transfer can use their secret key to decrypt the ciphertexts, and seeing how many CCDs they have received.</p><p>For technical reasons the shielded balance of the account consists of two parts, the \u201cself balance\u201d and the \u201cincoming shielded amounts\u201d.</p></dd>", "a[href=\"../docs/resources/glossary.html#glossary\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Glossary of Concordium Terms<a class=\"headerlink\" href=\"#glossary-of-concordium-terms\" title=\"Link to this heading\">#</a></h1><p>Also see the Concordium <a class=\"reference external\" href=\"https://developer.concordium.software/governance/whitepaper/Concordium%20White%20Paper.pdf\">Whitepaper</a> for more details on the terms described below.</p>"}
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
