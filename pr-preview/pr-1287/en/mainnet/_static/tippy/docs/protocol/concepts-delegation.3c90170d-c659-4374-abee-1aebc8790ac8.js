selector_to_html = {"a[href=\"../resources/glossary.html#term-Validator\"]": "<dt id=\"term-Validator\">Validator</dt><dd><p>A node that participates in the production of <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">blocks</span></a>, referred to as <em>validation</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Staked-Amount\"]": "<dt id=\"term-Staked-Amount\">Staked Amount</dt><dd><p><a class=\"reference internal\" href=\"#term-Validator\"><span class=\"xref std std-term\">Validators</span></a> can have part of the balance of their account staked. The amount that is staked remains locked while staked and cannot be transferred or moved in any way. The staked amount is proportional to the <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a> of a validator.</p><p><a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegators</span></a> can delegate stake to a staking pool or passive delegation. This affects the staked amount of the validator and thus their lottery power.</p></dd>", "a[href=\"../resources/glossary.html#term-Pay-day\"]": "<dt id=\"term-Pay-day\">Pay day</dt><dd><p>A pay day is the point at which new CCDs are minted and rewards to validators and delegators are distributed. The stakes of validators and delegators are updated each pay day (but the changes for each pay day are fixed one epoch before). Pay day is thus when new validators begin validation and updates to delegation and validation take effect, such as increasing stake, restaking preferences, adding delegation. In the case of decreasing stake or removing delegation or validation, there is a longer cool-down period, after which the change is executed at the <strong>next pay day after the cool-down period ends</strong>. The cool-down period is 3 weeks. Pay day is every 24 hours (i.e., 24 epochs) at approximately 09:00 UTC on Mainnet and approximately 12:00 UTC on Testnet. The list of lottery winners that are elected to be the leader for every round in that epoch is established at the beginning of the epoch.</p></dd>", "a[href=\"../resources/glossary.html#term-Epoch\"]": "<dt id=\"term-Epoch\">Epoch</dt><dd><p>A time period that is approximately one hour on testnet and mainnet. At the start of each epoch, a <a class=\"reference internal\" href=\"#term-Leader-Election\"><span class=\"xref std std-term\">leadership election nonce</span></a> is computed based on the block nonces of the previous epoch. The leadership election nonce is valid for the duration of the epoch. Each epoch has a nominal ending, and when a block is finalized after this nominal ending then epoch transition occurs.</p></dd>", "a[href=\"../resources/glossary.html#term-Lottery-Power\"]": "<dt id=\"term-Lottery-Power\">Lottery Power</dt><dd><p>A validator\u2019s lottery power is its relative stake and is therefore proportional to the <a class=\"reference internal\" href=\"#term-Staked-Amount\"><span class=\"xref std std-term\">staked amount</span></a> of that validator. The lottery power is updated each <a class=\"reference internal\" href=\"#term-Pay-day\"><span class=\"xref std std-term\">pay day</span></a>, and is based on the stake distribution at the end of the epoch before last. (This delay ensures that the stake distribution is determined before the randomness that fixes the validators for the epoch; otherwise, stakeholders might redistribute their stake to luckier validators, which undermines the security of the system.) <a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> affects the lottery power of the validator by increasing their stake, thus increasing the odds of that validator being chosen to produce a block.</p></dd>", "a[href=\"../resources/glossary.html#term-Delegator\"]": "<dt id=\"term-Delegator\">Delegator</dt><dd><p>An account that contributes stake to a staking pool, or to passive delegation. When an account becomes a delegator, the delegated amount of CCD is locked so that it cannot be spent or transferred while it is delegated. Delegators earn rewards, minus a commission to the validator, in proportion to their delegated stake.</p><p>For delegation in an election, see <a class=\"reference internal\" href=\"#term-Vote-delegation\"><span class=\"xref std std-term\">Vote delegation</span></a>.</p></dd>", "a[href=\"../resources/glossary.html#term-Cool-down-period\"]": "<dt id=\"term-Cool-down-period\">Cool-down period</dt><dd><p>A period of time during which the funds are frozen and cannot be spent.</p></dd>", "a[href=\"../resources/glossary.html#term-Passive-delegation\"]": "<dt id=\"term-Passive-delegation\">Passive delegation</dt><dd><p>A form of delegation where a delegator\u2019s stake is effectively distributed among all staking pools. It is not associated with a specific validator. Delegators earn lower rewards when delegating to passive delegation than when delegating to a specific staking pool. However, passive delegation is not affected by poor performance of a single validator.</p></dd>", "a[href=\"../resources/glossary.html#term-Staking-pool\"]": "<dt id=\"term-Staking-pool\">Staking pool</dt><dd><p>A validator and delegators that collectively pool their stake to participate in the consensus protocol and earn rewards. The validator runs a validator node on behalf of the staking pool to produce blocks using the collective stake of the pool to determine its lottery power. Rewards are accrued to the pool each time the validator produces a block. Each pay day, the accrued rewards are distributed to the pool\u2019s participants in proportion to their relative stakes in the pool, with the validator (the pool owner) receiving an additional commission from the delegators\u2019 rewards.</p></dd>", "a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>"}
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
