"use strict";(self.webpackChunkantm=self.webpackChunkantm||[]).push([[6049,6814],{86049:function(s,n,a){a.r(n),n.default={tile:"v0.0.3",docs:'<h1>v0.0.3</h1>\n<blockquote>\n<h1>--- 他来了</h1>\n</blockquote>\n<pre><code class="language-ts"> <span class="hljs-keyword">function</span> createFetch&lt;<span class="hljs-variable constant_">REQ</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">unknown</span>&gt;, <span class="hljs-variable constant_">RES</span> <span class="hljs-keyword">extends</span> {<span class="hljs-attr">data</span>: <span class="hljs-built_in">any</span>}&gt; (<span class="hljs-attr">url</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">method</span>: <span class="hljs-built_in">string</span>) {\n      <span class="hljs-keyword">return</span>  &lt;T <span class="hljs-keyword">extends</span> <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>&gt;(\n        <span class="hljs-attr">data</span>: <span class="hljs-variable constant_">REQ</span>,\n        options?: {\n          proxy?: T\n          pageError?: <span class="hljs-built_in">boolean</span>\n        }\n      ): <span class="hljs-title class_">Promise</span>&lt;T <span class="hljs-keyword">extends</span> <span class="hljs-literal">true</span> ? <span class="hljs-variable constant_">RES</span>[<span class="hljs-string">&#x27;data&#x27;</span>] : <span class="hljs-variable constant_">RES</span>&gt; =&gt; {\n        <span class="hljs-keyword">return</span> <span class="hljs-title function_">instance</span>(\n          {\n            url,\n            method,\n            data,\n          },\n          options\n        )\n      }\n    }\n    <span class="hljs-string">::::_QA::::_QA</span><span class="hljs-string">::::_QA\n\n\n\n\n</span></code></pre>\n',h3Ids:""}}}]);