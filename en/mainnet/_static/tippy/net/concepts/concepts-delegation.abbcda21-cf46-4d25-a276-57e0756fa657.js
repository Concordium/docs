selector_to_html = {"a[href=\"../resources/glossary.html#term-Passive-delegation\"]": "<dt id=\"term-Passive-delegation\">Passive delegation</dt><dd><p>A form of delegation where a delegator\u2019s stake is effectively distributed among all baker pools. It is not associated with a specific baker. Delegators earn lower rewards when delegating to passive delegation than when delegating to a specific baker pool. However, passive delegation is not affected by poor performance of a single baker.</p></dd>", "a[href=\"../resources/glossary.html#term-Lottery-Power\"]": "<dt id=\"term-Lottery-Power\">Lottery Power</dt><dd><p>A baker\u2019s lottery power is its relative stake and is therefore proportional to the <a class=\"reference internal\" href=\"#term-Staked-Amount\"><span class=\"xref std std-term\">staked amount</span></a> of that baker. The lottery power is updated each <a class=\"reference internal\" href=\"#term-Epoch\"><span class=\"xref std std-term\">epoch</span></a>, and is based on the stake distribution at the end of the epoch before last. (This delay ensures that the stake distribution is determined before the randomness that fixes the bakers for the epoch: otherwise, stakeholders might redistribute their stake to luckier bakers, which undermines the security of the system.) <a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> affects the lottery power of the baker by increasing their stake, thus increasing the odds of that baker being chosen to bake a block.</p></dd>", "a[href=\"../resources/glossary.html#term-Epoch\"]": "<dt id=\"term-Epoch\">Epoch</dt><dd><p>A time period that is approximately one hour on testnet and mainnet. At the start of each epoch, a <a class=\"reference internal\" href=\"#term-Leader-Election\"><span class=\"xref std std-term\">leadership election nonce</span></a> is computed based on the block nonces of the previous epoch. The leadership election nonce is valid for the duration of the epoch. Each epoch has a nominal ending, and when a block is finalized after this nominal ending then epoch transition occurs.</p></dd>", "a[href=\"../resources/glossary.html#term-Staked-Amount\"]": "<dt id=\"term-Staked-Amount\">Staked Amount</dt><dd><p><a class=\"reference internal\" href=\"#term-Baker\"><span class=\"xref std std-term\">Bakers</span></a> can have part of the balance of their account staked. The amount that is staked remains locked while staked and cannot be transferred or moved in any way. The staked amount is proportional to the <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a> of a baker.</p><p><a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegators</span></a> can delegate stake to a baker pool or passive delegation. This affects the staked amount of the baker and thus their lottery power.</p></dd>", "a[href=\"../resources/glossary.html#term-Cool-down-period\"]": "<dt id=\"term-Cool-down-period\">Cool-down period</dt><dd><p>A period of time during which a transaction is frozen. Examples of when cool-down periods apply include removing a baker and updating stake. The length of a cool-down period varies between transactions.</p></dd>", "a[href=\"../resources/glossary.html#term-Pay-day\"]": "<dt id=\"term-Pay-day\">Pay day</dt><dd><p>A pay day is the point at which new CCDs are minted and rewards to bakers and delegators are distributed. The stakes of bakers and delegators are updated each pay day (but the changes for each pay day are fixed one epoch before). Pay day is thus when new bakers begin baking and updates to delegation and baking take effect, such as increasing stake, restaking preferences, adding delegation. In the case of decreasing stake or removing delegation or baking, there is a longer cool-down period, after which the change is executed at the <strong>next pay day after the cool-down period ends</strong>. The cool-down period is 2 weeks for delegators and 3 weeks for bakers. Pay day is every 24 hours (i.e., 24 epochs) at approximately 09:00 UTC on Mainnet and approximately 12:00 UTC on Testnet. Bakers are finalized at the end of the epoch before that next epoch where they are eligible to bake.</p></dd>", "a[href=\"../resources/glossary.html#term-Baker-pool\"]": "<dt id=\"term-Baker-pool\">Baker pool</dt><dd><p>A baker and delegators that collectively pool their stake to participate in the consensus protocol and earn rewards. The baker runs a baker node on behalf of the baker pool to bake (and possibly finalize) blocks using the collective stake of the pool to determine its lottery power. Rewards are accrued to the pool each time the baker produces a block. Each pay day, the accrued rewards are distributed to the pool\u2019s participants in proportion to their relative stakes in the pool, with the baker (the pool owner) receiving an additional commission from the delegators\u2019 rewards.</p></dd>", "a[href=\"../resources/glossary.html#term-Delegator\"]": "<dt id=\"term-Delegator\">Delegator</dt><dd><p>An account that contributes stake to a baker pool, or to passive delegation. When an account becomes a delegator, the delegated amount of CCD is locked so that it cannot be spent or transferred while it is delegated. Delegators earn rewards, minus a commission to the baker, in proportion to their delegated stake.</p></dd>", "a[href=\"../resources/glossary.html#term-Baker\"]": "<dt id=\"term-Baker\">Baker</dt><dd><p>A node that participates in the production of <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">blocks</span></a>, referred to as <em>baking</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>"}
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
