selector_to_html = {"a[href=\"#reference-material-for-migrating-types-and-tests\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reference material for migrating types and tests<a class=\"headerlink\" href=\"#reference-material-for-migrating-types-and-tests\" title=\"Link to this heading\">#</a></h2><p>The examples above show how to migrate most contracts, but for advanced contracts, there may be more types to migrate.\nThe list below shows how to achieve that.\nIt also includes types already described above:</p>", "a[href=\"#migrating-advanced-state-types\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Migrating advanced state types<a class=\"headerlink\" href=\"#migrating-advanced-state-types\" title=\"Link to this heading\">#</a></h2><p>If your contract state directly, or indirectly, contains one or more advanced state types, i.e., <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/struct.StateMap.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">StateMap</span></code></a>, <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/struct.StateSet.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">StateSet</span></code></a>, or <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/struct.StateBox.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">StateBox</span></code></a>, then you also need to make a small adjustment.\nThe advanced state types are generic over not only the types stored, such as the keys and values in a map but also over a type that implements the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/8.0.0/concordium_std/trait.HasStateApi.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">HasStateApi</span></code></a> trait.\nThis is because the deprecated <a class=\"reference external\" href=\"https://docs.rs/concordium-std/8.1/concordium_std/test_infrastructure\"><code class=\"docutils literal notranslate\"><span class=\"pre\">test_infrastructure</span></code></a> used a different implementation of the underlying contract state, i.e., a different implementation of <a class=\"reference external\" href=\"https://docs.rs/concordium-std/8.0.0/concordium_std/trait.HasStateApi.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">HasStateApi</span></code></a>, than the Concordium nodes do.\nBut <a class=\"reference external\" href=\"https://docs.rs/concordium-std-derive/latest/concordium_smart-contract-testing\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-smart-contract-testing</span></code></a> uses the exact same state implementation as the nodes do and it is therefore possible to specify the concrete type, <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std/type.StateApi.html\"><code class=\"docutils literal notranslate\"><span class=\"pre\">StateApi</span></code></a>, as the default.</p><p>Until the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/8.1/concordium_std/test_infrastructure\"><code class=\"docutils literal notranslate\"><span class=\"pre\">test_infrastructure</span></code></a> module is completely removed, the libraries will still support it, and thus the generic parameter <code class=\"docutils literal notranslate\"><span class=\"pre\">S</span></code> must still be present.</p>", "a[href=\"#migrate-contracts-for-concordium-std-8-1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Migrate contracts for <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-std</span></code> 8.1<a class=\"headerlink\" href=\"#migrate-contracts-for-concordium-std-8-1\" title=\"Link to this heading\">#</a></h1><p>With the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/latest/concordium_std\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium_std</span></code></a> version <code class=\"docutils literal notranslate\"><span class=\"pre\">8.1</span></code> release, writing and reading smart contracts is easier than ever before.\nThe new version of the standard library reduces the need for generics and traits in your init and receive methods.\nThese generics and traits were there to support testing with the <a class=\"reference external\" href=\"https://docs.rs/concordium-std/8.1/concordium_std/test_infrastructure\"><code class=\"docutils literal notranslate\"><span class=\"pre\">test_infrastructure</span></code></a>, which has been deprecated in favor of the <a class=\"reference external\" href=\"https://docs.rs/concordium-std-derive/latest/concordium_smart-contract-testing\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-smart-contract-testing</span></code></a> library.</p><p>This guide shows you how to migrate your contract code to use the simpler concrete types and use fewer generics.</p>", "a[href=\"#migrating-init-methods\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Migrating <code class=\"docutils literal notranslate\"><span class=\"pre\">init</span></code> methods<a class=\"headerlink\" href=\"#migrating-init-methods\" title=\"Link to this heading\">#</a></h2><p>To migrate a typical <code class=\"docutils literal notranslate\"><span class=\"pre\">init</span></code> method you must change the following:</p>", "a[href=\"#migrating-receive-methods\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Migrating <code class=\"docutils literal notranslate\"><span class=\"pre\">receive</span></code> methods<a class=\"headerlink\" href=\"#migrating-receive-methods\" title=\"Link to this heading\">#</a></h2><p>To migrate a typical <code class=\"docutils literal notranslate\"><span class=\"pre\">receive</span></code> method you must change the following:</p>", "a[href=\"integration-test-contract.html#integration-test-contract\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Integration test a contract in Rust<a class=\"headerlink\" href=\"#integration-test-a-contract-in-rust\" title=\"Link to this heading\">#</a></h1><p>This guide describes how to write <em>integration tests</em> in Rust for your smart contracts using the <a class=\"reference external\" href=\"https://docs.rs/concordium-smart-contract-testing/latest/concordium_smart_contract_testing/\">Concordium smart contract testing library</a>.</p>"}
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
