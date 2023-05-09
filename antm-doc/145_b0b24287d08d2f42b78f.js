"use strict";(self.webpackChunk_antmjs_doc=self.webpackChunk_antmjs_doc||[]).push([[145],{145:function(s,e,t){t.r(e),e.default={tile:"Convention-basedRouting",docs:'<h1>Convention-based Routing</h1>\n<div class="card"><h3 id="What%20is%20Convention-b"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>What is Convention-based Routing</h3>\n<p>Antm.js Doc uses file system routing, where the file path of a page is simply mapped to its routing path. This makes the routing of the entire project very intuitive.</p>\n<p>For example, if there is a file named <code>foo.md</code> in the <code>docs</code> directory, its routing path would be <code>/foo</code>.</p>\n<blockquote>\n<p>The browser console will print <code>DOC_ROUTERS</code> by default, which shows all generated routing pages.</p>\n</blockquote>\n</div><div class="card"><h3 id="Mapping%20Rules"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>Mapping Rules</h3>\n<p>Antm.js Doc will automatically scan the root directory and all subdirectories and map the file path to its routing path. For example, if you have the following file structure:</p>\n<pre><code class="language-markdown">docs\n├── foo\n│ └── bar.md\n└── foo.md\n</code></pre>\n<p>The mapping rules are as follows:</p>\n<table>\n<thead>\n<tr>\n<th>File Path</th>\n<th>Routing Path</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>docs/foo.md</code></td>\n<td><code>/foo</code></td>\n</tr>\n<tr>\n<td><code>docs/foo/bar.md</code></td>\n<td><code>/foo/bar</code></td>\n</tr>\n<tr>\n<td><code>docs/abc/README.md</code></td>\n<td><code>/abc</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="Custom%20Rules"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>Custom Rules</h3>\n<p>Custom routing rules can be defined through configuration.</p>\n<p><code>src</code> configuration specifies the root path of the documentation files, which can be a string or number.</p>\n<p><code>route</code> configuration includes:</p>\n<ul>\n<li><code>exclude</code>: markdown files that do not need to be converted into documentation, supports <code>/abc/*.md</code> syntax, please use full path matching.</li>\n<li><code>redirect</code>: the path to redirect to when there is no matching route or for the root route <code>/</code>.</li>\n<li><code>type</code>: type of routing, either <code>hash</code> or <code>history</code>.</li>\n<li><code>level</code>: controls the length of the routing path. For example, when level is set to 1, <code>docs/foo/bar.md</code> is mapped to <code>/bar</code>. There may be <strong>routing conflicts</strong>, so use with caution.</li>\n</ul>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/types&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({\n  <span class="hljs-attr">docs</span>: {\n    <span class="hljs-attr">src</span>: [<span class="hljs-string">&#x27;./doc&#x27;</span>],\n    <span class="hljs-attr">route</span>: {\n      <span class="hljs-attr">level</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">exclude</span>: [<span class="hljs-title function_">join</span>(<span class="hljs-variable constant_">CWD</span>, <span class="hljs-string">&#x27;/a/*.md&#x27;</span>)],\n      <span class="hljs-attr">redirect</span>: <span class="hljs-string">&#x27;/introduce&#x27;</span>,\n      <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;hash&#x27;</span>,\n    },\n  },\n})\n</code></pre>\n</div>',h3Ids:"What is Convention-b:::Mapping Rules:::Custom Rules",codePath:[]}}}]);