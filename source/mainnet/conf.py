# -*- coding: utf-8 -*-
#
# Configuration file for the Sphinx documentation builder.
#
# This file does only contain a selection of the most common options. For a
# full list see the documentation:
# http://www.sphinx-doc.org/en/master/config

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))
import sys, os
from datetime import date

# -- Project information -----------------------------------------------------

project = 'Concordium'
copyright = f'2021 - {date.today().year}, Concordium Software ApS'
author = 'Concordium'

# The short X.Y version
version = ''
# The full version, including alpha/beta/rc tags
release = ''


# -- General configuration ---------------------------------------------------

# If your documentation needs a minimal Sphinx version, state it here.
#
# needs_sphinx = '1.0'

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "sphinx.ext.todo",
    "sphinx.ext.graphviz",
    "sphinx.ext.intersphinx",
    "sphinx.ext.extlinks",
    "sphinx_reredirects",
    "sphinx_copybutton",
    "sphinx_toolbox.collapse",
    "sphinx_tabs.tabs",
    "sphinx_design",
    'notfound.extension',
    "sphinx_tippy",
]

# sphinx-prompt must be the first of these two.
extensions += ['sphinx-prompt', 'sphinx_substitution_extensions']

extlinks = {
    'cdw-pubkey': ('https://distribution.mainnet.concordium.com/tools/concordium-desktop-wallet-pubkey.pem?%s', 'Download public key:%s'),
    'cdw-sig': ('https://distribution.mainnet.concordium.software/tools/linux/concordium-desktop-wallet-1.7.4.%s.sig', 'Download signature:%s') # Supply extension, e.g. exe, dmg, AppImage
}

# todo_include_todos = True
# todo_emit_warnings = True
# todo_link_only = True

graphviz_fontname = "'Lato,proxima-nova,Helvetica Neue,Arial,sans-serif'"

graphviz_output_format="svg"
graphviz_dot_args=[
    "-Gfontname="+graphviz_fontname,
    "-Gfontsize=12",
    "-Gbgcolor=transparent",
    "-Nfontname="+graphviz_fontname,
    "-Nfontsize=12",
    "-Efontname="+graphviz_fontname,
    "-Efontsize=12",
]
# Options for copybutton behavior
copybutton_prompt_text = "$"
copybutton_line_continuation_character = "\\"

# Options for tabs behavior
sphinx_tabs_disable_tab_closing = True

# Disable default url prefix "/en/latest/" on every resource.
notfound_urls_prefix = "/en/mainnet/"

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates', '../_templates']

# 404 page template.
notfound_template = '404.html'

# The suffix(es) of source filenames.
# You can specify multiple suffix as a list of string:
#
# source_suffix = ['.rst', '.md']
source_suffix = '.rst'

# The master toctree document.
master_doc = 'index'

# The language for content autogenerated by Sphinx. Refer to documentation
# for a list of supported languages.
#
# This is also used if you do content translation via gettext catalogs.
# Usually you set "language" from the command line for these cases.
# language = None

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = "sphinx" #"friendly" # "sphinx" # "lovelace" # None # "abap" # "sas" # "algol_nu"
highlight_language = "rust"


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "pydata_sphinx_theme"

html_logo = "../_static/concordium-logo.svg"
html_favicon = "../_static/concordium-logo-no-text.svg"

# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the
# documentation.
#
# These options are for sphinx_rtd_theme
html_theme_options = {
    # 'canonical_url': '',
    # 'analytics_id': 'UA-XXXXXXX-1',  #  Provided by Google in your dashboard
    # 'analytics_anonymize_ip': False,
    # 'logo_only': True,
    # 'display_version': True,
    # 'prev_next_buttons_location': None,
    # 'style_external_links': False,
    # 'style_nav_header_background': '#235c9b',
    "use_edit_page_button": True,
    # # Toc options
    "collapse_navigation": False,
    # 'sticky_navigation': True,
    "navigation_depth": 3,
    # 'includehidden': False,
    "navigation_with_keys": False,
    # 'titles_only': False,
    "show_nav_level": 1,
    "show_toc_level": 2,
    "navigation_depth": 5,
    "navbar_start": ["navbar-logo"],
    "navbar_center": ["navbar-nav"],
    "navbar_end": ["navbar-icon-links"],
    "secondary_sidebar_items": ["page-toc", "edit-this-page"],
    "article_footer_items": ["footer-article"],
    "show_prev_next": True,
    #"navbar_align": "left",
    "icon_links": [
        {
            # Concordium GitHub
            "name": "GitHub",
            # URL where the link will redirect
            "url": "https://github.com/Concordium",  # required
            # Icon class (if "type": "fontawesome"), or path to local image (if "type": "local")
            "icon": "fab fa-github-square",
            # Whether icon should be a FontAwesome class, or a local file
            "type": "fontawesome",  # Default is fontawesome
            # Add additional attributes to the href link.
            # The defaults of the target, rel, class, title, and href may be overwritten.
            "attributes": {
               "target" : "_blank",}
        },
        {
            # Concordium Email Support
            "name": "Support",
            # URL where the link will redirect
            "url": "mailto:support@concordium.software",  # required
            # Icon class (if "type": "fontawesome"), or path to local image (if "type": "local")
            "icon": "fas fa-envelope",
            # Whether icon should be a FontAwesome class, or a local file
            "type": "fontawesome",  # Default is fontawesome
            # Add additional attributes to the href link.
            # The defaults of the target, rel, class, title, and href may be overwritten.
            "attributes": {
               "target" : "_blank",}
        },
        {
            # Concordium monitoring options
            "name": "Monitor",
            # URL where the link will redirect
            "url": "https://developer.concordium.software/en/mainnet/net/guides/developer-page.html#block-explorers",  # required
            # Icon class (if "type": "fontawesome"), or path to local image (if "type": "local")
            "icon": "fas fa-chart-line",
            # Whether icon should be a FontAwesome class, or a local file
            "type": "fontawesome",  # Default is fontawesome
            # Add additional attributes to the href link.
            # The defaults of the target, rel, class, title, and href may be overwritten.
            "attributes": {
               "target" : "_blank",}
        },
        {
            "name": "Discourse",
            "url": "https://support.concordium.software/latest",
            "icon": "fab fa-discourse",
            "type": "fontawesome",
            # Add additional attributes to the href link.
            # The defaults of the target, rel, class, title, and href may be overwritten.
            "attributes": {
               "target" : "_blank",}
        },
        {
            "name": "YouTube",
            "url": "https://www.youtube.com/channel/UCPZc2CuB2jGbZjD_5zX7-1A",
            "icon": "fab fa-youtube",
            "type": "fontawesome",
            # Add additional attributes to the href link.
            # The defaults of the target, rel, class, title, and href may be overwritten.
            "attributes": {
               "target" : "_blank",}
        },
        {
            "name": "Medium",
            "url": "https://medium.com/concordium",
            "icon": "fab fa-medium",
            "type": "fontawesome",
            # Add additional attributes to the href link.
            # The defaults of the target, rel, class, title, and href may be overwritten.
            "attributes": {
               "target" : "_blank",}
        },
        {
            "name": "Academy",
            "url": "https://academy.concordium.software/ccd-academy/getting-started",
            "icon": "fas fa-graduation-cap",
            "type": "fontawesome",
            # Add additional attributes to the href link.
            # The defaults of the target, rel, class, title, and href may be overwritten.
            "attributes": {
               "target" : "_blank",}
        },
    ]
    }

html_show_sourcelink = False

html_context = {
    # "display_github": True,
    "github_user": "Concordium",
    "github_repo": "concordium.github.io",
    "github_version": "main",
    "doc_path": "source/mainnet",
    "conf_py_path": "/source/",
    "default_mode": "light",
}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["../_static"]

html_css_files = [
    "css/custom.css",
    "css/tippy.css",
]

# Custom sidebar templates, must be a dictionary that maps document names
# to template names.
#
# The default sidebars (for documents that don't match any pattern) are
# defined by theme itself.  Builtin themes are using these templates by
# default: ``['localtoc.html', 'relations.html', 'sourcelink.html',
# 'searchbox.html']``.
html_sidebars = {
    "**": ["sidebar-nav-bs"]
}

# html_additional_pages = {}

# Tippy configuration
tippy_js = ("https://unpkg.com/@popperjs/core@2", "https://unpkg.com/tippy.js@6")
tippy_skip_urls = [
    "(?!.*glossary.html.*)"
]
tippy_anchor_parent_selector = "article.bd-article"

# -- Options for linkchecking -------------------------------------------------

linkcheck_ignore = [r'https://fuchsia.googlesource.com/.+/', r'https://github.com/iqlusioninc/crates/tree/develop/zeroize_derive']
linkcheck_workers = 1
linkcheck_retries = 2
linkcheck_request_headers = {
    "https://crates.io/": {
        "Accept": "text/html",
        "Accept-Encoding": "utf-8",
    }
}

# -- InterSphinx links for linking between document versions ------------------
# intersphinx_mapping = {'smart-contracts-v0': ('https://developer.concordium.software/en/smart-contracts-v0/', None)}


# -- Sphinx-reredirects for redirecting old paths to new ones ----------------
redirects = {
    "index": "docs/index.html",
    "./net/guides/shielded-transfer": "/net/guides/shield-ccd-wallets.html",
    "./net/desktop-wallet/send-gtu-single-desktop": "/net/guides/send-ccd-wallets.html",
    "./net/desktop-wallet/send-gtu-single-desktop": "/net/guides/send-ccd-wallets.html",
    "./net/desktop-wallet/shield-gtu-desktop": "/net/guides/shield-ccd-wallets.html",
    "./net/resources/terms-and-conditions-bw": "/net/resources/terms-and-conditions.html",
    "./net/resources/terms-and-conditions-mw-gen2": "/net/resources/terms-and-conditions.html",
    "./net/resources/terms-and-conditions-mw-gen2": "/net/resources/terms-and-conditions.html",
    "./net/desktop-wallet/add-baker-pool-dw": "/net/mobile-wallet/add-baker-mw.html",
    "./net/concepts/concepts-backup": "/net/guides/recovery.html",
    "./net/resources/sirius-testnet-reset": "/en/mainnet/index.html",
    "./net/resources/sirius-testnet-reset-wallets": "/en/mainnet/index.html",
    "./net/resources/sirius-testnet-reset-client": "/en/mainnet/index.html",
    "./net/resources/sirius-testnet-reset-nodes": "/en/mainnet/index.html",
    "./en/mainnet/smart-contracts/index": "/en/mainnet/smart-contracts/general/introduction.html",
    "./net/resources/release-notes": "net/release-notes/release-notes-lp.html",
    "./net/resources/release-notes-mainnet": "net/release-notes/release-notes-lp.html",
    "./en/mainnet/smart-contracts/tutorials/piggy-bank/preparing": "/en/mainnet/smart-contracts/tutorials/piggy-bank/index.html",
    "./en/mainnet/smart-contracts/tutorials/nft-minting/setup-dev-env": "/en/mainnet/smart-contracts/tutorials/setup-env.html",
    "./net/guides/overview-baker-process": "/net/concepts/concepts-baker.html",
    "./en/testnet4/index": "/en/mainnet/index.html",
    "./en/testnet4/smart-contracts/index": "/en/mainnet/index.html",
    "./en/testnet4/testnet/guides/accounts-transactions": "/en/mainnet/index.html",
    "./en/testnet4/testnet/guides/explore-more": "/en/mainnet/index.html",
    "./en/testnet4/testnet/guides/run-node": "/en/mainnet/index.html",
    "./en/testnet4/testnet/references/concordium-client": "/en/mainnet/index.html",
    "./en/testnet4/testnet/references/manage-accounts": "/en/mainnet/index.html",
    "./en/testnet4/testnet/references/transactions": "/en/mainnet/index.html",
    "./en/testnet4/testnet/see-also/downloads": "/en/mainnet/index.html",
    "./en/testnet/net/concepts/concepts": "/en/mainnet/guides/learn-about-concordium.html",
    "./en/testnet/net/desktop-wallet/change-restake-settings": "/net/mobile-wallet/update-baker-mw.html#update-baker-stake-and-restaking-preference",
    "./en/testnet/net/desktop-wallet/setup-maintenance-dw": "net/guides/overview-desktop.html",
    "./en/testnet/net/guides/run-node-macos": "net/guides/run-node-macos.html",
    "./en/testnet/net/references/developer-tools": "net/references/developer-tools.html",
    "./en/testnet/net/references/manage-accounts": "net/references/manage-accounts.html",
    "./en/testnet/smart-contracts/guides/deploy-module": "/en/mainnet/smart-contracts/guides/deploy-module.html",
    "./net/browser-wallet/index": "net/browser-wallet/setup-browser-wallet.html",
    "./net/desktop-wallet/remove-baker": "net/mobile-wallet/update-baker-mw.html#stop-baking",
    "./net/mobile-wallet-gen2/index": "net/mobile-wallet-gen2/setup-mobile-wallet.html",
    "./net/mobile-wallet/baker-mw": "net/mobile-wallet/add-baker-mw.html",
    "./net/mobile-wallet/create-identity": "net/guides/create-identity.html",
    "./net/mobile-wallet/explore-more": "net/mobile-wallet-gen2/faq.html",
    "./net/mobile-wallet/export-import-mw": "net/guides/export-import.html",
    "./net/mobile-wallet/make-shielded-transfer-mw": "net/guides/shielded-transfer.html",
    "./net/mobile-wallet/make-simple-transfer-mw": "net/guides/send-ccd-wallets.html",
    "./net/mobile-wallet/setup-maintenance-mw": "net/mobile-wallet-gen2/setup-mobile-wallet.html",
    "./net/mobile-wallet/shield-unshield-mw": "net/guides/shield-ccd-wallets.html",
    "./classes/Common_GRPC_Client.ConcordiumGRPCClient": "concordium-node-sdk-js/classes/Common_GRPC_Client.ConcordiumGRPCClient.html",
    "./en/mainnet/index.html-": "en/mainnet/index.html",
    "./net/guides/delegation": "net/concepts/concepts-delegation.html",
    "./net/desktop-wallet/account-recovery": "/net/guides/recovery.html",
    "./net/desktop-wallet/change-baker-stake": "/net/mobile-wallet/update-baker-mw.html#update-baker-stake-and-restaking-preference",
    "./net/desktop-wallet/create-account-desktop": "net/guides/create-account.html",
    "./net/desktop-wallet/delegation-dw": "net/guides/add-delegation.html",
    "./net/desktop-wallet/get-started-desktop": "net/desktop-wallet/accounts-desktop.html",
    "./net/desktop-wallet/index": "net/guides/overview-desktop.html",
    "./net/desktop-wallet/make-account-report": "net/guides/transaction-report.html",
    "./net/desktop-wallet/send-shielded-amount": "net/guides/shielded-transfer.html",
    "./net/desktop-wallet/shield-ccd-desktop": "net/guides/shield-ccd-wallets.html",
    "./net/desktop-wallet/transfers-dw": "net/guides/send-ccd-wallets.html",
    "./net/desktop-wallet/update-baker-keys": "https://developer.concordium.software/en/mainnet/net/mobile-wallet/update-baker-mw.html#update-baker-keys",
    "./net/desktop-wallet/update-baker-pool-dw": "https://developer.concordium.software/en/mainnet/net/mobile-wallet/update-baker-mw.html#update-pool-settings",
    "./net/desktop-wallet/update-delegation": "net/guides/update-delegation.html",
    "./net/guides/add-baker-desktop": "net/mobile-wallet/add-baker-mw.html",
    "./net/guides/concordium-client": "net/references/concordium-client.html",
    "./net/installation/downloads-testnet": "net/installation/downloads.html",
    "./net/resources/legal": "net/resources/terms-and-conditions.html",
    "./en/mainnet/smart-contracts/onboarding-guide-solana-developers/index": "en/mainnet/smart-contracts/onboarding-guide-solana-developers/overview.html",
    "./net/references/grpc": "net/references/grpc2.html",
    "./en/mainnet/smart-contracts/guides/contract-testing-guides": "./en/mainnet/smart-contracts/guides/integration-test-contract",
    "./en/mainnet/smart-contracts/best-practices/index": "./en/mainnet/smart-contracts/best-practices/development",
    "./net/smart-contracts/guides/quick-start": "docs/smart-contracts/guides/quickstart.html",
    "./net/smart-contracts/guides/deploy-module": "docs/smart-contracts/guides/deploy-module.html",
    "./net/concepts/id-accounts": "docs/protocol/id.accounts.html",
    "./net/smart-contracts/general/introduction": "docs/smart-contracts/introduction.html",
    "./net/smart-contracts/general/contract-instances": "docs/smart-contracts/contract-instances.html",
    "./net/smart-contracts/general/contract-lifecycle": "docs/smart-contracts/contract-lifecycle.html",
    "./net/smart-contracts/general/contract-module": "docs/smart-contracts/contract-module.html",
    "./net/smart-contracts/general/contract-schema": "docs/smart-contracts/contract-schema.html",
    "./net/smart-contracts/general/develop-contracts": "docs/smart-contracts/develop-contracts.html",
    "./net/smart-contracts/general/images/smart-contract-lifecycle.png": "docs/smart-contracts/images/smart-contract-lifecycle.png",
    "./net/references/manage-accounts": "docs/protocol/manage-accounts.html",
    "./net/images/concepts/account-creation.png": "docs/protocol/images/account-creation.png",
    "./net/smart-contracts/guides/setup-tools": "docs/smart-contracts/guides/build-contract.html",
    "./net/smart-contracts/guides/setup-contract": "docs/smart-contracts/guides/setup-contract.html",
    "./net/smart-contracts/guides/compile-module": "docs/smart-contracts/guides/compile-module.html",
    "./net/smart-contracts/guides/build-schema": "docs/smart-contracts/guides/build-schema.html",
    "./net/smart-contracts/guides/no-std": "docs/smart-contracts/guides/no-std.html",
    "./net/smart-contracts/guides/fallback-entrypoints": "docs/smart-contracts/guides/fallback-entrypoints.html",
    "./net/smart-contracts/guides/upgradeable-contract": "docs/smart-contracts/guides/upgradeable-contract.html",
    "./net/smart-contracts/guides/json-params": "docs/smart-contracts/guides/json-params.html",
    "./net/smart-contracts/guides/factory-pattern": "docs/smart-contracts/guides/factory-pattern.html",
    "./net/smart-contracts/guides/unit-test-contract": "docs/smart-contracts/guides/unit-test-contract.html",
    "./net/smart-contracts/guides/development": "docs/smart-contracts/guides/development.html",
    "./net/smart-contracts/guides/costs": "docs/smart-contracts/guides/costs.html",
    "./net/guides/company-identities": "docs/protocol/company-identities.html",
    "./net/images/company-id-request.png": "docs/protocol/images/company-id-request.png",
    "./net/images/company-id-create.png": "docs/protocol/images/company-id-create.png",
    "./net/images/company-id-acct-keys.png": "docs/protocol/images/company-id-acct-keys.png",
    "./net/images/company-id-recover.png": "docs/protocol/images/company-id-recover.png",
    "./net/concepts/concepts-transactions": "docs/protocol/concepts-transactions.html",
    "./net/concepts/concepts-baker": "docs/protocol/concepts-baker.html",
    "./net/concepts/concepts-delegation": "docs/protocol/concepts-delegation.html",
    "./net/images/concepts/baker-process1.png": "docs/protocol/images/baker-process1.png",
    "./net/images/concepts/baker-process2.png": "docs/protocol/images/baker-process2.png",
    "./net/smart-contracts/guides/initialize-contract": "docs/smart-contracts/guides/initialize-contract.html",
    "./net/smart-contracts/guides/interact-instance": "docs/smart-contracts/guides/interact-instance.html",
    "./net/smart-contracts/guides/inspect-instance": "docs/smart-contracts/guides/inspect-instance.html",
    "./net/smart-contracts/guides/invoke-instance": "docs/smart-contracts/guides/invoke-instance.html",
    "./net/guides/baker-pool": "docs/network/baker-pool.html",
    "./net/guides/baker-windows": "docs/network/baker-windows.html",
    "./net/nodes/baker-macos": "docs/network/guides/baker-macos.html",
    "./net/nodes/baker-ubuntu": "docs/network/guides/baker-ubuntu.html",
    "./net/nodes/baker-docker": "docs/network/guides/baker-docker.html",
    "./net/guides/become-baker": "docs/network/guides/become-baker.html",
    "./net/references/concordium-client": "docs/network/concordium-client.html",
    "./net/references/transactions": "docs/network/transactions.html",
    "./net/references/query-node": "docs/network/query-node.html",
    "./net/references/multi-sig": "docs/network/multi-sig.html",
    "./net/web3-id/index": "docs/network/web3-id/index.html",
    "./net/web3-id/wallet": "docs/network/web3-id/wallet.html",
    "./net/web3-id/issuer": "docs/network/web3-id/issuer.html",
    "./net/guides/create-proofs": "docs/network/guides/create-proofs.html",
    "./net/web3-id/concordia": "docs/network/web3-id/concordia.html",
    "./net/guides/run-local-chain": "docs/network/guides/run-local-chain.html",
    "./net/guides/low-code-nft-marketplace/introduction": "tutorials/low-code-nft-marketplace/introduction.html",
    "./net/guides/low-code-nft-marketplace/marketplace": "tutorials/low-code-nft-marketplace/marketplace.html",
    "./net/guides/low-code-nft-marketplace/minting-tool": "tutorials/low-code-nft-marketplace/minting-tool.html",
    "./net/indexers/intro": "docs/network/indexers/intro.html",
    "./net/indexers/suoquery": "docs/network/indexers/subquery.html",
    "./net/nodes/node-requirements": "docs/network/nodes/node-requirements.html",
    "./net/guides/run-node-ubuntu": "docs/network/nodes/run-node-ubuntu.html",
    "./net/nodes/run-node-ubuntu": "docs/network/nodes/run-node-ubuntu-testnet.html",
    "./net/nodes/troubleshoot-ubuntu": "docs/network/nodes/troubleshoot-ubuntu.html",
    "./net/guides/run-node-macos": "docs/network/nodes/run-node-macos.html",
    "./net/nodes/troubleshoot-macos": "docs/network/nodes/troubleshoot-macos.html",
    "./net/guides/run-nodes-windows": "docs/network/nodes/rin-nodes-windows.html",
    "./net/nodes/node-runner-servide-configuration": "docs/network/nodes/node-runner-service-configuration.html",
    "./net/nodes/troubleshoot-windows": "docs/network/nodes/troubleshoot-windows.html",
    "./net/guides/run-node": "docs/network/nodes/run-node.html",
    "./net/nodes/troubleshoot-docker": "docs/network/nodes/troubleshoot-docker.html",
    "./net/nodes/ubuntu": "docs/network/nodes/run-node-ubuntu.html",
    "./net/nodes/macos": "docs/network/nodes/run-node-macos.html",
    "./net/nodes/windows": "docs/network/nodes/run-node-windows.html",
    "./net/nodes/docker": "docs/network/nodes/run-node.html",
    "./net/release-notes/release-notes-lp": "docs/release-notes/release-notes-lp.html",
    "./net/release-notes/release-notes-mainnet": "docs/release-notes/release-notes-mainnet.html",
    "./net/release-notes/release-notes": "docs/release-notes/release-notes.html",
    "./net/installation/downloads": "docs/installation/downloads.html",
    "./net/installation/previous-node-downloads": "docs/installation/previous-node-downloads.html",
    "./net/installation/verification-instructuions": "docs/installation/verification-instructions.html",
    "./net/installation/cargo-verification-instructions/cargo-linux": "docs/installation/cargo-verification-instructions/cargo-linux.html",
    "./net/installation/cdw-verification-instructions/cdw-appimage": "docs/installation/cdw-verification-instructions/cdw-appimage.html",
    "./net/installation/cdw-verification-instructions/cdw-deb": "docs/installation/cdw-verification-instructions/cdw-deb.html",
    "./net/installation/cdw-verification-instructions/cdw-rpm": "docs/installation/cdw-verification-instructions/cdw-rpm.html",
    "./net/installation/client-verification-instructions/client-linux": "docs/installation/client-verification-instructions/client-linux.html",
    "./net/installation/snippets/delegation-faq": "docs/help/delegation-faq.html",
    "./net/resources/glossary": "docs/resources/glossary.html",
    "./en/mainnet/smart-contracts/onboarding-guide-solana-developers/faq": "en/mainnet/docs/help-and-faq/onboarding-guide-solana-developers/faq.html",
    "./en/mainnet/smart-contracts/onboarding-guide-solana-developers/overview": "en/mainnet/docs/help-and-faq/onboarding-guide-solana-developers/overview.html",
    "./en/mainnet/smart-contracts/onboarding-guide-ethereum-developers/faq": "en/mainnet/docs/help-and-faq/onboarding-guide-ethereum-developers/faq.html",
    "./net/voting/gc-voting": "docs/voting/gc-voting.html",
    "./net/voting/coordinator": "docs/voting/coordinator.html",
    "./net/voting/gc-voting": "docs/voting/gc-voting.html",
    "./net/voting/voting": "docs/voting/voting.html",
    "./net/voting/guardians": "docs/voting/guardians.html",
    "./net/voting/verify-election-result": "docs/voting/verify-election-result.html",
    "./en/mainnet/smart-contracts/tutorials/index": "en/mainnet/tutorials/smart-contract-tutorials.html",
    "./smart-contracts/tutorials/setup-env": "tutorials/setup-env.html",
    "./smart-contracts/tutorials/counter/counter-contract": "tutorials/counter/counter-contract",
    "./smart-contracts/tutorials/piggy-bank/index": "tutorials/piggy-bank/index.html",
    "./smart-contracts/tutorials/piggy-bank/writing": "tutorials/piggy-bank/writing.html",
    "./smart-contracts/tutorials/piggy-bank/testing": "tutorials/piggy-bank/testing.html",
    "./smart-contracts/tutorials/piggy-bank/deploying": "tutorials/piggy-bank/deploying.html",
    "./smart-contracts/tutorials/piggy-bank/frontend": "tutorials/piggy-bank/frontend.html",
    "./smart-contracts/tutorials/wCCD/index": "tutorials/wCCD/index.html",
    "./smart-contracts/tutorials/wCCD/wCCD-introduction": "tutorials/wCCD/wCCD-introduction.html",
    ".smart-contracts/tutorials/wCCD/wCCD-interacting": "tutorials/wCCD/wCCD-interacting.html",
    "./smart-contracts/tutorials/wCCD/wCCD-frontend_set_up": "tutorials/wCCD/wCCD-frontend-set-up.html",
    ".smart-contracts/tutorials/voting/index": "tutorials/voting/index.html",
    "./smart-contracts/tutorials/voting/voting-sc": "tutorials/voting/voting-sc.html",
    "./smart-contracts/tutorials/voting/voting-dapp": "tutorials/voting/voting-dapp.html",
    "./smart-contracts/tutorials/nft-minting/index": "tutorials/nft-minting/index.html",
    "./smart-contracts/tutorials/nft-minting/upload": "tutorials/nft-minting/upload.html",
    ".smart-contracts/tutorials/nft-minting/build-smart-contract": "tutorials/nft-minting/build-smart-contract.html",
    "./smart-contracts/tutorials/nft-minting/mint-xfer": "tutorials/nft-minting/mint-xfer.html",
    "./smart-contracts/tutorials/sft-minting/index": "tutorials/sft-minting/index.html",
    "./smart-contracts/tutorials/sft-minting/build-smart-contract": "tutorials/sft-minting/build-smart-contract.html",
    "./smart-contracts/tutorials/sft-minting/mint-xfer": "tutorials/sft-minting/mint-xfer.html",
    "./smart-contracts/tutorials/fungible-tokens/index": "tutorials/fungible-tokens/index.html",
    "./smart-contracts/tutorials/fungible-tokens/smart-contract": "tutorials/fungible-tokens/smart-contract.html",
    "./.smart-contracts/tutorials/fungible-tokens/mint-xfer": "tutorials/fungible-tokens/mint-xfer.html",
    "./smart-contracts/tutorials/eSealing/index": "tutorials/eSealing/index.html",
    "./smart-contracts/tutorials/eSealing/eSealing-dapp": "tutorials/eSealing/eSealing-dapp.html",
    "./smart-contracts/tutorials/sponsoredTransactions/index": "tutorials/sponsoredTransactions/index.html",
    "./smart-contracts/tutorials/sponsoredTransactions/sponsoredTransactionsSmartContract": "tutorials/sponsoredTransactions/sponsoredTransactionsSmartContract.html",
    "./smart-contracts/tutorials/sponsoredTransactions/sponsoredTransactionsFrontendAndBackend": "tutorials/sponsoredTransactions/sponsoredTransactionsFrontendAndBackend.html",
    "./smart-contracts/tutorials/smartContractUpgrade/index": "tutorials/smartContractUpgrade/index.html",
    "./smart-contracts/tutorials/smartContractUpgrade/smartContractUpgrade": "tutorials/smartContractUpgrade/smartContractUpgrade.html",
    "./net/resources/ccd-scan": "tools/ccd-scan/ccd-scan",
    "./net/resources/ccd-scan-accounts": "tools/ccd-scan/ccd-scan-accounts",
    "./net/resources/ccd-scan-blocks": "tools/ccd-scan/ccd-scan-blocks",
    "./net/resources/ccd-scan-nodes": "tools/ccd-scan/ccd-scan-nodes",
    "./net/resources/ccd-scan-staking": "tools/ccd-scan/ccd-scan-staking",
    "./net/resources/ccd-scan-transactions": "tools/ccd-scan/ccd-scan-transactions",
    "./net/guides/sdks-apis": "tools/sdks-apis.html",
    "./net/references/grcp2": "tools/sdks-apis.html",
    "./net/guides/wallet-sdk/wallet-sdk": "tools/wallet-sdk/wallet-sdk.html",
    "./net/guides/wallet-sdk/wallet-sdk-identity-creation": "tools/wallet-sdk/wallet-sdk-identity-creation.html",
    "./net/guides/wallet-sdk/wallet-sdk-identity-recovery": "tools/wallet-sdk/wallet-sdk-identity-recovery.html",
    "./net/guides/wallet-sdk/wallet-sdk-credential-deployment": "tools/wallet-sdk/wallet-sdk-credential-deployment.html",
    "./net/guides/wallet-sdk/wallet-sdk-account-transaction": "tools/wallet-sdk/wallet-sdk-account-transaction.html",
    "./net/guides/wallet-sdk/wallet-sdk-identity-provider": "tools/wallet-sdk/wallet-sdk-identity-provider.html",
    "./net/references/developer-tools": "tools/developer-tools.html",
    "./smart-contracts/smart-contracts-v0/guides/on-chain-index": "tutorials/on-chain-guides/on-chain-index.html",
    "./smart-contracts/smart-contracts-v0/guides/deploy-module": "tutorials/on-chain-guides/deploy-module.html",
    "./smart-contracts/smart-contracts-v0/guides/initialize-contract": "tutorials/on-chain-guides/initialize-contract.html",
    "./smart-contracts/smart-contracts-v0/guides/interact-instance": "tutorials/on-chain-guides/interact-instance.html",
    "./smart-contracts/smart-contracts-v0/guides/inspect-instance": "tutorials/on-chain-guides/inspect-instance.html",
    "./net/guides/dapp-examples": "tutorials/daap-examples/dapp-examples.html",
    "./net/guides/wallets-lp": "docs/guides/wallets-lp.html",
    "./net/guides/wallets-faqs": "docs/guides/wallets-faqs.html",
    "./net/guides/wallets-deciding-wallets": "docs/guides/deciding-wallets.html",
    "./net/guides/cryptox-faq": "docs/guides/cryptox-faq.html",
    "./net/mobile-wallet-gen2/faq": "docs/guides/mobule-wallet-gen2/faq.html",
    "./net/browser-wallet/browser-wallet-faq": "docs/browser-wallet/browser-wallet-faq.html",
    "./net/concepts/concepts-transactions": "docs/protocol/transactions.html",
    "./en/mainnet/net/guides/developer-page": "tools/developer-page.html",
    "./en/mainnet/smart-contracts/guides/setup-tools": "docs/smart-contracts/guides/setup-contract.html",
    "./en/mainnet/smart-contracts/guides/build-schema": "docs/smart-contracts/build-schema.html",
    "./en/mainnet/smart-contracts/guides/contract-dev-guides": "docs/smart-contracts/build-contract.html",
    "./en/mainnet/smart-contracts/guides/quick-start": "docs/smart-contracts/guides/quick-start.html",
    "./en/mainnet/smart-contracts/tutorials/index": "tutorials/index.html"

    }