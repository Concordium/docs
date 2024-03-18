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
    'cdw-sig': ('https://distribution.mainnet.concordium.software/tools/linux/concordium-desktop-wallet-1.7.2.%s.sig', 'Download signature:%s') # Supply extension, e.g. exe, dmg, AppImage
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
    "navbar_center": ["navbar-menu"],
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
}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["../_static"]

html_css_files = [
    "css/style.css",
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
}
