selector_to_html = {"a[href=\"../resources/glossary.html#term-Attributes\"]": "<dt id=\"term-Attributes\">Attributes</dt><dd><p>User data, such as date of birth or country of residence, that is associated with a user <a class=\"reference internal\" href=\"#term-Identity\"><span class=\"xref std std-term\">identity</span></a>. Users can choose which attributes should be revealed in each of their accounts.</p></dd>", "a[href=\"../resources/glossary.html#term-User-identity-certificate\"]": "<dt id=\"term-User-identity-certificate\">User identity certificate</dt><dd><p>Issued to the individual or entity once their real-world identity has been verified and recorded by an Identity Provider. You cannot use the Concordium Platform without a User Identity Certificate.\nThe user identity certificate includes attributes such as name, age, and nationality. When the Identity Provider has validated the attributes, it issues a user identity certificate, which is basically the Identity Provider\u2019s signature over some cryptographic keys of the user and the validated personal attributes. Unlike usual public key certificates such as X.509 certificates, the user identity certificate is private to the user; it is not submitted to the chain. Note that the Identity Provider also stores some information, but this is only used for a possible, subsequent investigation of the user\u2019s activities (i.e. disclosing an identity). The Identity Provider is not involved in any subsequent use of the user identity certificate. The user identity certificate is signed using the Pointcheval-Sanders signature scheme.</p></dd>", "a[href=\"../resources/glossary.html#term-Account\"]": "<dt id=\"term-Account\">Account</dt><dd><p>An addressable store of funds on the blockchain. An account is associated with one or more <em>account keys</em> that can be used to authorize transactions originating from the account, as well as with an <a class=\"reference internal\" href=\"#term-Encryption-key\"><span class=\"xref std std-term\">encryption key</span></a>. An account is also associated with the account holder\u2019s <a class=\"reference internal\" href=\"#term-Identity\"><span class=\"xref std std-term\">identity</span></a>, although this association is encrypted. This identity can only be disclosed by <a class=\"reference internal\" href=\"#term-Identity-disclosure-authority\"><span class=\"xref std std-term\">identity disclosure authorities</span></a>, in cooperation with the account\u2019s <a class=\"reference internal\" href=\"#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>", "a[href=\"../resources/glossary.html#term-Identity-disclosure-authority\"]": "<dt id=\"term-Identity-disclosure-authority\">Identity disclosure authority</dt><dd><p>An authority who has power to know the identity of a participant. The identity disclosure authority and <a class=\"reference internal\" href=\"#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a> can work together to determine the owner of an account and determine which accounts belong to the same owner. (They should only do so when legally obliged to, such as by a court order.) Identity disclosure is a two-stage process, requiring cooperation of multiple parties.</p></dd>", "a[href=\"../resources/glossary.html#term-Identity-Provider\"]": "<dt id=\"term-Identity-Provider\">Identity Provider</dt><dd><p>A person or organization that performs off-chain identification of users. Users are required to obtain an identity object from an identity provider in order to open an account on the Concordium Platform.</p></dd>", "a[href=\"../resources/glossary.html#term-Off-chain\"]": "<dt id=\"term-Off-chain\">Off-chain</dt><dd><p>Refers to activities outside of the Concordium blockchain. Some on-chain actions need preliminary actions off-chain, for example to create an account on the Concordium blockchain the user must first work with an identity provider, e.g., via their website or mobile application, to obtain a specific digital certificate. Concordium refers to this certificate as the <strong>identity</strong>.</p></dd>", "a[href=\"../resources/glossary.html#term-On-chain\"]": "<dt id=\"term-On-chain\">On-chain</dt><dd><p>Refers to an an event or activity that is propagated through the Concordium network and recorded on the Concordium blockchain. The recording can be explicit or implicit as part of the consensus protocol. An example of the former is a transaction such as a CCD transfer, an example of the latter are the rewards given out to, e.g., validators.</p></dd>"}
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
