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
import sphinx_rtd_theme
import sys, os

sys.path.append(os.path.abspath('../exts'))

# -- Project information -----------------------------------------------------

project = 'Concordium'
copyright = '2021 - 2022, Concordium Software ApS'
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
    "sphinx_rtd_theme",
    "sphinx.ext.todo",
    "sphinx.ext.graphviz",
    "sphinx.ext.intersphinx",
    "sphinx.ext.extlinks",
    # "sphinx.ext.imgconverter", # To support svg when targeting LaTeX
    # "multidoc",
    "sphinx_reredirects",
    # "sphinx_rtd_dark_mode", # A bug in this prevents code blocks from displaying correctly in dark mode
    "sphinx_copybutton",
    "sphinx_toolbox.collapse",
    "sphinx_tabs.tabs",
    "sphinx_design",
    'notfound.extension',
    'hoverxref.extension'
]

# sphinx-prompt must be the first of these two.
extensions += ['sphinx-prompt', 'sphinx_substitution_extensions']

extlinks = {
    'cdw-pubkey': ('https://distribution.mainnet.concordium.com/tools/concordium-desktop-wallet-pubkey.pem', 'Download public key'),
    'cdw-sig': ('https://distribution.mainnet.concordium.software/tools/linux/concordium-desktop-wallet-1.5.0.%s.sig', 'Download signature') # Supply extension, e.g. exe, dmg, AppImage
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

#Hover behavior.
hoverxref_roles = [
    'term'
]

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

html_logo = "../_static/concordium-logo-dark.svg"
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
    # # Toc options
    "collapse_navigation": False,
    # 'sticky_navigation': True,
    "navigation_depth": 3,
    # 'includehidden': False,
    # 'titles_only': False,
    "show_nav_level": 0,
    "show_toc_level": 2,
    "navbar_start": ["navbar-logo"],
    "navbar_center": ["navbar-menu"],
    "navbar_end": ["navbar-icon-links"],
    "page_sidebar_items": ["page-toc"],
    "footer_items": ["footer"],
    "show_prev_next": True,
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

        },
        {    
            "name": "Discourse",
            "url": "https://support.concordium.software/latest",
            "icon": "_static/discourse-brands.svg",
            "type": "local",
        },
        {
            # Concordium Email Support
            "name": "Feedback",
            # URL where the link will redirect
            "url": "mailto:documentation@concordium.com",  # required
            # Icon class (if "type": "fontawesome"), or path to local image (if "type": "local")
            "icon": "fas fa-bullhorn",
            # Whether icon should be a FontAwesome class, or a local file
            "type": "fontawesome",  # Default is fontawesome

        },
    ]        
    }


current_language = os.environ['current_language'] if 'current_language' in os.environ else 'en'
current_version = os.environ['current_version'] if 'current_version' in os.environ else 'local'
versions = os.environ['all_versions'].split(",") if 'all_versions' in os.environ else [current_version]
languages = os.environ['all_languages'].split(",") if 'all_languages' in os.environ else [current_language]

html_show_sourcelink = False

html_context = {
    "display_github": True,
    "github_user": "Concordium",
    "github_repo": "concordium.github.io",
    "github_version": current_version,
    "display_github": False,
    "conf_py_path": "/source/",
    # Expose the versions and languages to the template engine
    "current_language": current_language,
    "current_version": current_version,
    "languages": languages,
    "versions": list(map(lambda name:
        {
        "name": name,
        "url": "/{lng}/{vsn}/".format(lng = current_language, vsn = name)
        }, versions))
}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["../_static"]

# Custom sidebar templates, must be a dictionary that maps document names
# to template names.
#
# The default sidebars (for documents that don't match any pattern) are
# defined by theme itself.  Builtin themes are using these templates by
# default: ``['localtoc.html', 'relations.html', 'sourcelink.html',
# 'searchbox.html']``.
html_sidebars = {
    "**": ["search-field", "sidebar-nav-bs"]
}

# html_additional_pages = {}

# -- Options for HTMLHelp output ---------------------------------------------

# Output file base name for HTML help builder.
htmlhelp_basename = 'Concordiumdoc'


# -- Options for LaTeX output ------------------------------------------------

latex_elements = {
    # The paper size ('letterpaper' or 'a4paper').
    #
    # 'papersize': 'letterpaper',

    # The font size ('10pt', '11pt' or '12pt').
    #
    # 'pointsize': '10pt',

    # Additional stuff for the LaTeX preamble.
    #
    # 'preamble': '',

    # Latex figure (float) alignment
    #
    # 'figure_align': 'htbp',
}

# Grouping the document tree into LaTeX files. List of tuples
# (source start file, target name, title,
#  author, documentclass [howto, manual, or own class]).
latex_documents = [
    (master_doc, 'Concordium.tex', 'Concordium Documentation',
     'Concordium', 'manual'),
]


# -- Options for manual page output ------------------------------------------

# One entry per manual page. List of tuples
# (source start file, name, description, authors, manual section).
man_pages = [
    (master_doc, 'concordiumsmartcontracts', 'Concordium Documentation',
     [author], 1)
]


# -- Options for Texinfo output ----------------------------------------------

# Grouping the document tree into Texinfo files. List of tuples
# (source start file, target name, title, author,
#  dir menu entry, description, category)
texinfo_documents = [
    (master_doc, 'ConcordiumSmartContracts', 'Concordium Documentation',
     author, 'ConcordiumSmartContracts', 'One line description of project.',
     'Miscellaneous'),
]


# -- Options for Epub output -------------------------------------------------

# Bibliographic Dublin Core info.
epub_title = project

# The unique identifier of the text. This can be a ISBN number
# or the project homepage.
#
# epub_identifier = ''

# A unique identification for the text.
#
# epub_uid = ''

# A list of files that should not be packed into the epub file.
epub_exclude_files = ['search.html']

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
    "./net/desktop-wallet/send-gtu-single-desktop": "/en/mainnet/net/desktop-wallet/send-ccd-single-desktop.html",
    "./net/desktop-wallet/shield-gtu-desktop": "/en/mainnet/net/desktop-wallet/shield-ccd-desktop.html",
}

# -- Tags that enables the .. only option ----------------
tags.add('mainnet')
