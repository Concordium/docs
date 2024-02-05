selector_to_html = {"a[href=\"#preparation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Preparation<a class=\"headerlink\" href=\"#preparation\" title=\"Link to this heading\">#</a></h2><p>First, ensure you have <code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code> installed and if not the guide\n<a class=\"reference internal\" href=\"setup-tools.html#setup-tools-v0\"><span class=\"std std-ref\">Install tools for development</span></a> will help you.</p><p>You also need the Rust source code of the smart contract you wish to build a\nschema for.</p>", "a[href=\"../general/contract-schema.html#contract-schema-which-to-choose-v0\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Embedding schemas on-chain<a class=\"headerlink\" href=\"#embedding-schemas-on-chain\" title=\"Link to this heading\">#</a></h2><p>Schemas are embedded into smart contract modules using the <a class=\"reference external\" href=\"https://webassembly.github.io/spec/core/appendix/custom.html\">custom\nsection</a> feature of Wasm modules.\nThis allows Wasm modules to include a named section of bytes, which does not\naffect the semantics of running the Wasm module.</p><p>All schemas are collected and added in one custom section named\n<code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-schema-v1</span></code>.\nThis collection is a list of pairs, containing the name of the contract encoded\nin UTF-8 and the contract schema bytes.</p>", "a[href=\"setup-tools.html#setup-tools-v0\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install tools for development<a class=\"headerlink\" href=\"#install-tools-for-development\" title=\"Link to this heading\">#</a></h1><p>Before you can start developing smart contracts, you need to setup the\nenvironment.</p>", "a[href=\"#including-function-parameters\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Including function parameters<a class=\"headerlink\" href=\"#including-function-parameters\" title=\"Link to this heading\">#</a></h3><p>To generate and include the schema for parameters for init and\nreceive functions, set the optional <code class=\"docutils literal notranslate\"><span class=\"pre\">parameter</span></code> attribute for the\n<code class=\"docutils literal notranslate\"><span class=\"pre\">#[init(..)]</span></code>- and <code class=\"docutils literal notranslate\"><span class=\"pre\">#[receive(..)]</span></code>-macro:</p>", "a[href=\"#embedding-the-schema\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Embedding the schema<a class=\"headerlink\" href=\"#embedding-the-schema\" title=\"Link to this heading\">#</a></h3><p>In order to embed the schema into the smart contract module, add\n<code class=\"docutils literal notranslate\"><span class=\"pre\">--schema-embed</span></code> to the build command</p>", "a[href=\"#including-contract-state\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Including contract state<a class=\"headerlink\" href=\"#including-contract-state\" title=\"Link to this heading\">#</a></h3><p>To generate and include the schema for the contract state, annotate the type\nwith the <code class=\"docutils literal notranslate\"><span class=\"pre\">#[contract_state(contract</span> <span class=\"pre\">=</span> <span class=\"pre\">...)]</span></code> macro:</p>", "a[href=\"#outputting-a-schema-file\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Outputting a schema file<a class=\"headerlink\" href=\"#outputting-a-schema-file\" title=\"Link to this heading\">#</a></h3><p>To output the schema into a file, use the <code class=\"docutils literal notranslate\"><span class=\"pre\">--schema-out=FILE</span></code>\nwhere <code class=\"docutils literal notranslate\"><span class=\"pre\">FILE</span></code> is a path of the file to create:</p>", "a[href=\"#building-the-schema\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Building the schema<a class=\"headerlink\" href=\"#building-the-schema\" title=\"Link to this heading\">#</a></h2><p>Now, you are ready to build the actual schema using <code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code>, and you\nhave the options to embed the schema and/or write the schema to a file.</p>", "a[href=\"#setup-the-contract-for-a-schema\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Setup the contract for a schema<a class=\"headerlink\" href=\"#setup-the-contract-for-a-schema\" title=\"Link to this heading\">#</a></h2><p>In order to build a contract schema, you first have to prepare your smart\ncontract for building the schema.</p><p>You can choose which parts of our smart contract to included in the schema.\nThe options are to include a schema for the contract state, and/or for each of\nthe parameters of init and receive functions.</p>", "a[href=\"#build-a-contract-schema\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Build a contract schema<a class=\"headerlink\" href=\"#build-a-contract-schema\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to build a smart contract schema, how to export it\nto a file, and/or embed the schema into the smart contract module, all using\n<code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code>.</p>"}
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
