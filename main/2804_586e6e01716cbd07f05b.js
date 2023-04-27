"use strict";(self.webpackChunkantm=self.webpackChunkantm||[]).push([[2804,622],{32804:function(s,a,n){n.r(a),a.default={tile:"@antmjs/warning",docs:'<h1>@antmjs/warning</h1>\n<p>在 git commit 的时候，获取工作区和暂存区指定的文件 与最后一次提交成功的对比的结果</p>\n<ul>\n<li>实现通过微信、钉钉、飞书等聊天群机器人的 webhooks，通知群内成员对比的结果</li>\n<li>实现邮件发送，邮件通知到目标邮件对比结果</li>\n</ul>\n<div class="card"><h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>为什么需要</h3>\n<p>团队成员对项目关键的配置项或代码修改了，需要通知开发组成员修改内容，避免影响开发的规范性和统一性</p>\n</div><div class="card"><h3 id="%E5%AE%89%E8%A3%85"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>安装</h3>\n<p>使用前你需要确认安装 <a href="https://www.npmjs.com/package/husky">husky</a></p>\n<pre><code class="language-sh">yarn add @antmjs/warning -D\n</code></pre>\n</div><div class="card"><h3 id="%E9%85%8D%E7%BD%AE"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>配置</h3>\n<ul>\n<li>根目录配置 antm.config.js</li>\n<li>钉钉机器人配置的时候，安全设置需要设置为关键词“文件修改”，<a href="https://developers.dingtalk.com/document/robots/customize-robot-security-settings">钉钉机器人的配置</a>\n<code>emailReceivers</code>、<code>webhooks</code>的配置支持数组和逗号隔开的字符串</li>\n</ul>\n<pre><code class="language-javascript"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">warning</span>: {\n    <span class="hljs-attr">monitorFiles</span>: [\n      <span class="hljs-string">&#x27;package.json&#x27;</span>,\n      <span class="hljs-string">&#x27;./packages/[!node_modules]**/package.json&#x27;</span>, <span class="hljs-comment">// 支持glob语法</span>\n    ],\n    <span class="hljs-attr">branchs</span>: [<span class="hljs-string">&#x27;master&#x27;</span>], <span class="hljs-comment">// 监听的分支，不设置的话所有的分支都监听</span>\n    <span class="hljs-attr">webhooks</span>: {\n      <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://oapi.dingtalk.com/robot/send?access_token=xxx&#x27;</span>, <span class="hljs-comment">// webhooks地址，多个用数组</span>\n    },\n    <span class="hljs-attr">email</span>: {\n      <span class="hljs-attr">sender</span>: <span class="hljs-string">&#x27;abcd@126.com&#x27;</span>, <span class="hljs-comment">// 发送人</span>\n      <span class="hljs-attr">senderPass</span>: <span class="hljs-string">&#x27;ASDFGHJASD&#x27;</span>, <span class="hljs-comment">// 发送令牌，邮箱需要设置SMTP服务获取</span>\n      <span class="hljs-attr">receivers</span>: <span class="hljs-string">&#x27;xxxxxx@qq.com&#x27;</span>, <span class="hljs-comment">// 接收人邮箱，多个用数组</span>\n    },\n  },\n}\n</code></pre>\n</div><div class="card"><h3 id="%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%9A%84%E4%BD%BF%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>命令行的使用</h3>\n<ul>\n<li>在 husky 的脚本中触发</li>\n<li>命令行中可以配置相关配置</li>\n</ul>\n<pre><code class="language-sh"><span class="hljs-meta">#!/bin/sh</span>\n. <span class="hljs-string">&quot;<span class="hljs-subst">$(dirname <span class="hljs-string">&quot;<span class="hljs-variable">$0</span>&quot;</span>)</span>/_/husky.sh&quot;</span>\n\nyarn lint-staged\nnpx antm-warning webhooks\nnpx antm-warning email\n</code></pre>\n<p>antm-warning webhook 的相关参数</p>\n<pre><code class="language-bash">antm-warning webhooks:\n  -u, --url, &lt;url&gt;                            <span class="hljs-built_in">set</span> webhooks api of dingding | wechart | Lark | others, separated by commas\n  -mf, --monitor-files, &lt;monitorFiles&gt;        <span class="hljs-built_in">set</span> monitor files\n</code></pre>\n<p>antm-warning email 的相关参数</p>\n<pre><code class="language-bash">antm-warning email:\n  -mf, --monitor-files, &lt;monitorFiles&gt;         <span class="hljs-built_in">set</span> monitor files\n  -sender, --sender, &lt;sender&gt;                  <span class="hljs-built_in">set</span> the email sender\n  -sender-pass, --sender-pass, &lt;senderPass&gt;    <span class="hljs-built_in">set</span> the email sender pass\n  -receivers, --receivers, &lt;receivers&gt;         <span class="hljs-built_in">set</span> the email receivers, separated by commas\n</code></pre>\n</div>',h3Ids:"为什么需要:::安装:::配置:::命令行的使用"}}}]);