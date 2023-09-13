selector_to_html = {"a[href=\"../resources/glossary.html#term-Leader-Election\"]": "<dt id=\"term-Leader-Election\">Leader Election</dt><dd><p>In each round, a predetermined leader among the bakers should produce a block. Round leaders are determined each epoch, defined as a fixed time duration. The leaders are determined from a leader election nonce that is updated each epoch. To update the leader election nonce the first block (the trigger block) after the nominal epoch time must be finalized. When this happens the chain starts a new epoch with the new leader election nonce set. When finalizers see the proof for the trigger block they stop signing additional blocks in the current epoch. When a baker sees the finalization proof it will bake in the new epoch. The leader election nonce is based on the block hashes up to the trigger block of the current epoch.</p><p>The <a class=\"reference internal\" href=\"#term-Winning-probability\"><span class=\"xref std std-term\">winning probability</span></a> is proportional to the baker\u2019s relative stake.</p><p>See <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Transaction\"]": "<dt id=\"term-Transaction\">Transaction</dt><dd><p>An atomic operation that defines a change of state in the ledger, such as transferring funds from one account to another. A transaction typically has a sender account and a <a class=\"reference internal\" href=\"#term-Transaction-Sequence-Number\"><span class=\"xref std std-term\">transaction sequence number</span></a>, and incurs a fee. The sender account must sign the transaction to authorize it. (The exception to this is a credential deployment transaction that creates a new account, which does not have a sender account.)</p></dd>", "a[href=\"../resources/glossary.html#term-Best-block\"]": "<dt id=\"term-Best-block\">Best block</dt><dd><p>Last block on the <a class=\"reference internal\" href=\"#term-Best-chain\"><span class=\"xref std std-term\">best chain</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Lottery-Power\"]": "<dt id=\"term-Lottery-Power\">Lottery Power</dt><dd><p>A baker\u2019s lottery power is its relative stake and is therefore proportional to the <a class=\"reference internal\" href=\"#term-Staked-Amount\"><span class=\"xref std std-term\">staked amount</span></a> of that baker. The lottery power is updated each <a class=\"reference internal\" href=\"#term-Epoch\"><span class=\"xref std std-term\">epoch</span></a>, and is based on the stake distribution at the end of the epoch before last. (This delay ensures that the stake distribution is determined before the randomness that fixes the bakers for the epoch: otherwise, stakeholders might redistribute their stake to luckier bakers, which undermines the security of the system.) <a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> affects the lottery power of the baker by increasing their stake, thus increasing the odds of that baker being chosen to bake a block.</p></dd>", "a[href=\"../resources/glossary.html#term-Identity\"]": "<dt id=\"term-Identity\">Identity</dt><dd><p>Before opening an account on the Concordium Platform, one\u2019s real-world identity must be verified and recorded by an <a class=\"reference internal\" href=\"#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a>. A user\u2019s identity is anonymous on-chain, however this anonymity can be revoked and their real-world identity revealed in response to a valid request from a government authority.</p></dd>", "a[href=\"../resources/glossary.html#term-Shielded-balance\"]": "<dt id=\"term-Shielded-balance\">Shielded balance</dt><dd><p>The part of the balance of an <a class=\"reference internal\" href=\"#term-Account\"><span class=\"xref std std-term\">account</span></a> that only the owner of the account can see. This is achieved by encrypting transfers to an account with the account\u2019s <a class=\"reference internal\" href=\"#term-Encryption-key\"><span class=\"xref std std-term\">encryption key</span></a>. Every participant of the Concordium network can see the <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Ciphertext\">ciphertexts</a> of all the transfers, however they provide no information on how many CCDs were transferred. The receiver of the transfer can use their secret key to decrypt the ciphertexts, and seeing how many CCDs they have received.</p><p>For technical reasons the shielded balance of the account consists of two parts, the \u201cself balance\u201d and the \u201cincoming shielded amounts\u201d.</p></dd>", "a[href=\"../resources/glossary.html#term-Transaction-Sequence-Number\"]": "<dt id=\"term-Transaction-Sequence-Number\">Transaction Sequence Number</dt><dd><p>A sequence number that orders <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transaction</span></a> on a given <a class=\"reference internal\" href=\"#term-Account\"><span class=\"xref std std-term\">account</span></a>. In a ledger, all transactions for an account must be ordered with consecutive transaction sequence numbers, starting from 1. Transaction sequence numbers ensure that a transaction cannot be repeated in the ledger, and that the transactions occur in the order intended by the sender account holder.</p></dd>"}
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
