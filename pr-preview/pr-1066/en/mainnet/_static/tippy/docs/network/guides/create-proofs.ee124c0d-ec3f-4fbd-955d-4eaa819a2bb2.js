selector_to_html = {"a[href=\"../../resources/glossary.html#term-Non-membership-proof\"]": "<dt id=\"term-Non-membership-proof\">Non-membership proof</dt><dd><p>A proof to determine that an attribute of a user\u2019s identity is <strong>not</strong> included in a set, for example, that they are <strong>not</strong> a resident of a country under trade sanctions.</p></dd>", "a[href=\"../../resources/glossary.html#term-Statement\"]": "<dt id=\"term-Statement\">Statement</dt><dd><p>A list presented to a wallet by a dApp or service whose items are either attributes to reveal, or properties of attributes to prove.</p></dd>", "a[href=\"../../resources/glossary.html#term-Verifiable-credential\"]": "<dt id=\"term-Verifiable-credential\">Verifiable credential</dt><dd><p>Issued to the individual by an <a class=\"reference internal\" href=\"#term-Issuer\"><span class=\"xref std std-term\">issuer</span></a> who has authority for the credential to be issued. A verifiable credential contains some information about the individual independent of its identity, such as membership in a club or loyalty program, education, and more. Verifiable credentials can be checked by a <a class=\"reference internal\" href=\"#term-Verifier\"><span class=\"xref std std-term\">verifier</span></a> using <a class=\"reference internal\" href=\"#term-Zero-knowledge-proof\"><span class=\"xref std std-term\">zero-knowledge proofs</span></a>. The issuer can choose to have the verifiable credential expire, or revoke it, if necessary. The issuer manages the verifiable credentials with a smart contract, a credential registry contract.</p></dd>", "a[href=\"../../resources/glossary.html#term-Challenge\"]": "<dt id=\"term-Challenge\">Challenge</dt><dd><p>To make sure that <a class=\"reference internal\" href=\"#term-Zero-knowledge-proof\"><span class=\"xref std std-term\">zero-knowledge proofs</span></a> cannot be reused (e.g., if they are stolen), the verifier can and should specify a challenge string. This can be an arbitrary byte array which is used by the prover (wallet) when producing the proof. The proof will only validate with respect to the challenge that was used to produce it. The verifier server can thus use the challenge to make sure the proofs it is receiving are not reused, and to handle their lifetime (e.g., it can set the challenge it supplied to expire in 5 minutes).</p></dd>", "a[href=\"../../resources/glossary.html#term-Membership-proof\"]": "<dt id=\"term-Membership-proof\">Membership proof</dt><dd><p>A proof to determine if an attribute of a user\u2019s identity is included in a given set, for example, lives in the EU. Can also be a <a class=\"reference internal\" href=\"#term-Non-membership-proof\"><span class=\"xref std std-term\">non-membership proof</span></a>.</p></dd>", "a[href=\"../../resources/glossary.html#term-Verifiable-presentation\"]": "<dt id=\"term-Verifiable-presentation\">Verifiable presentation</dt><dd><p>Data derived from one or more verifiable credentials and/or account credentials, issued by one or more issuers or identity providers, that is shared with a specific verifier. A verifiable presentation is tamper-evident and encoded in such a way that authorship of the data can be trusted after a process of cryptographic verification. It contains a link that points to the contract and holder ID. A presentation that contains a <strong>zero-knowledge proof</strong> might contain data that confirms the truth of a statement from verifiable credentials or account credentials, but the presentation does not reveal the actual attributes of verifiable credentials.</p></dd>", "a[href=\"../../resources/glossary.html#term-Attributes\"]": "<dt id=\"term-Attributes\">Attributes</dt><dd><p>User data, such as date of birth or country of residence, that is associated with a user <a class=\"reference internal\" href=\"#term-Identity\"><span class=\"xref std std-term\">identity</span></a>. Users can choose which attributes should be revealed in each of their accounts.</p></dd>", "a[href=\"../../resources/glossary.html#term-Verifier\"]": "<dt id=\"term-Verifier\">Verifier</dt><dd><p>Party that checks users\u2019 <a class=\"reference internal\" href=\"#term-Verifiable-credential\"><span class=\"xref std std-term\">verifiable credentials</span></a>.</p></dd>", "a[href=\"../../resources/glossary.html#term-Range-proofs\"]": "<dt id=\"term-Range-proofs\">Range proofs</dt><dd><p>A range proof asks a user to prove that they meet an attribute within a range of values. For example, when renting a car, you might need to prove that you are between 25 and 65 years old to the car rental company. This could be constructed as a range proof.</p></dd>", "a[href=\"../../resources/glossary.html#term-Account-credential\"]": "<dt id=\"term-Account-credential\">Account credential</dt><dd><p>A certificate derived from the <a class=\"reference internal\" href=\"#term-Identity-Object\"><span class=\"xref std std-term\">identity object</span></a> that proves that the owner has been verified by an identity provider. The key feature of the credential is that it <strong>does not</strong> identify the owner to the identity provider, nor to any other single entity, however it contains enough information to allow disclosing an identity in concert with the identity provider to find the owner.</p></dd>", "a[href=\"../../resources/glossary.html#term-Zero-knowledge-proof\"]": "<dt id=\"term-Zero-knowledge-proof\">Zero-knowledge proof</dt><dd><p>A method by which a user (the prover) can prove to another party (the verifier) that the user meets a requirement without revealing anything beyond that. Zero knowledge proofs generated by the wallet are non-interactive. They are verifiable forever in the future without further prover interaction.</p></dd>"}
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
