"use strict";(self.webpackChunk_antmjs_doc=self.webpackChunk_antmjs_doc||[]).push([[1199],{1199:function(s,n,a){a.r(n),n.default={tile:"Pagination分页",docs:'<h1>Pagination 分页</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>当数据量较多时，采用分页的形式分隔长列表。</p>\n</div><div class="card"><h3 id="%E5%AE%89%E8%A3%85"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>安装</h3>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div><div class="card"><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基础用法</h3>\n<p>通过 modelValue 来绑定当前页码时，组件为受控状态，分页显示取决于传入的 modelValue，一般搭配 onChange 使用。\n不需要受控时，可通过 defaultCurrentPage 指定当前页码</p>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [currentPage1, setCurrentPage1] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-number">1</span>)\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">pageChange1</span> = (<span class="hljs-params">v</span>) =&gt; {\n    <span class="hljs-keyword">const</span> c = v\n    <span class="hljs-title function_">setCurrentPage1</span>(c)\n  }\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>\n      <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{currentPage1}</span>\n      <span class="hljs-attr">totalItems</span>=<span class="hljs-string">&quot;25&quot;</span>\n      <span class="hljs-attr">itemsPerPage</span>=<span class="hljs-string">&quot;5&quot;</span>\n      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{pageChange1}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div><div class="card"><h3 id="%E7%AE%80%E5%8D%95%E6%A8%A1%E5%BC%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>简单模式</h3>\n<p>将 mode 设置为 &quot;simple&quot; 来切换到简单模式，此时分页器不会展示具体的页码按钮。</p>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [currentPage2, setCurrentPage2] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-number">1</span>)\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">pageChange2</span> = (<span class="hljs-params">v</span>) =&gt; {\n    <span class="hljs-keyword">const</span> c = v\n    <span class="hljs-title function_">setCurrentPage2</span>(c)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>\n      <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{currentPage2}</span>\n      <span class="hljs-attr">pageCount</span>=<span class="hljs-string">{12}</span>\n      <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;simple&quot;</span>\n      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{pageChange2}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div><div class="card"><h3 id="%E6%98%BE%E7%A4%BA%E7%9C%81%E7%95%A5%E5%8F%B7"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>显示省略号</h3>\n<p>设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。</p>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [currentPage3, setCurrentPage3] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-number">1</span>)\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">pageChange3</span> = (<span class="hljs-params">v</span>) =&gt; {\n    <span class="hljs-keyword">const</span> c = v\n    <span class="hljs-title function_">setCurrentPage3</span>(c)\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>\n      <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{currentPage3}</span>\n      <span class="hljs-attr">totalItems</span>=<span class="hljs-string">&quot;125&quot;</span>\n      <span class="hljs-attr">showPageSize</span>=<span class="hljs-string">&quot;3&quot;</span>\n      <span class="hljs-attr">forceEllipses</span>\n      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{pageChange3}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义按钮</h3>\n<p>通过 pageNodeRender 传入自定义方法</p>\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [currentPage4, setCurrentPage4] = react.<span class="hljs-title function_">useState</span>(<span class="hljs-number">1</span>)\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">pageChange4</span> = (<span class="hljs-params">v</span>) =&gt; {\n    <span class="hljs-keyword">const</span> c = v\n    <span class="hljs-title function_">setCurrentPage4</span>(c)\n  }\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">pageNodeRender</span> = (<span class="hljs-params">page</span>) =&gt; {\n    <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>{page.number == 3 ? &#x27;hot&#x27; : page.text}<span class="hljs-tag">&lt;/&gt;</span></span>\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>\n      <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{currentPage4}</span>\n      <span class="hljs-attr">totalItems</span>=<span class="hljs-string">&quot;500&quot;</span>\n      <span class="hljs-attr">showPageSize</span>=<span class="hljs-string">&quot;5&quot;</span>\n      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{pageChange4}</span>\n      <span class="hljs-attr">pageNodeRender</span>=<span class="hljs-string">{pageNodeRender}</span>\n      <span class="hljs-attr">prevText</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-left&quot;</span> /&gt;</span>}\n      nextText={<span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow&quot;</span> /&gt;</span>}\n    /&gt;</span>\n  )\n}\n</code></pre>\n</div><div class="card"><h3 id="PaginationProps%20%3Ca%20h"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>PaginationProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/pagination.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>defaultValue</td>\n<td>默认页码</td>\n<td><em>  number<br/></em></td>\n<td>1</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>modelValue</td>\n<td>当前页码</td>\n<td><em>  number<br/></em></td>\n<td>1</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>mode</td>\n<td>-</td>\n<td><em>  &quot;multi&quot; ¦ &quot;simple&quot;<br/></em></td>\n<td>multi</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>prevText</td>\n<td>自定义上一页按钮内容</td>\n<td><em>  ReactNode<br/></em></td>\n<td>上一页</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>nextText</td>\n<td>自定义下一页按钮内容</td>\n<td><em>  ReactNode<br/></em></td>\n<td>下一页</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>pageCount</td>\n<td>总页数</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>传入或者根据数据量计算</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>totalItems</td>\n<td>总记录数</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>0</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>itemsPerPage</td>\n<td>每页数量</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>10</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showPageSize</td>\n<td>显示页码个数</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>5</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>forceEllipses</td>\n<td>是否展示省略号</td>\n<td><em>  boolean<br/></em></td>\n<td>false</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>pageNodeRender</td>\n<td>自定义渲染页码结构, 入参数为 number 页数、text 文本、 active 选中状态</td>\n<td><em>  (page: {<br/>    number: number<br/>    text: string<br/>    active: boolean<br/>  }) =&gt; React.ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>页码改变的时候触发</td>\n<td><em>  (<br/>    currPage: number<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>updatecurrent</td>\n<td>-</td>\n<td><em>  (<br/>    currPage: number<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考<a href="https://antmjs.github.io/vantui/#/config-provider">ConfigProvider 组件</a></p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--pagination-color</td>\n<td><code> @black;</code></td>\n</tr>\n<tr>\n<td>--pagination-font-size</td>\n<td><code> @font-size-md;</code></td>\n</tr>\n<tr>\n<td>--pagination-item-border-color</td>\n<td><code> #e4e7eb;</code></td>\n</tr>\n<tr>\n<td>--pagination-active-background-color</td>\n<td><code> @primary-color;</code></td>\n</tr>\n<tr>\n<td>--pagination-disable-color</td>\n<td><code> rgba(116, 116, 116, 0.31);</code></td>\n</tr>\n<tr>\n<td>--pagination-disable-background-color</td>\n<td><code> #f7f8fa;</code></td>\n</tr>\n<tr>\n<td>--pagination-item-border-width</td>\n<td><code> 1px;</code></td>\n</tr>\n<tr>\n<td>--pagination-item-border-radius</td>\n<td><code> 2px;</code></td>\n</tr>\n<tr>\n<td>--pagination-prev-next-padding</td>\n<td><code> 0 11px;</code></td>\n</tr>\n</tbody>\n</table>\n</div>',h3Ids:"介绍:::安装:::基础用法:::简单模式:::显示省略号:::自定义按钮:::PaginationProps <a h:::样式变量"}}}]);