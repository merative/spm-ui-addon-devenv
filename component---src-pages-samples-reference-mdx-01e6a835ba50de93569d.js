"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[56],{2296:function(e,n,t){t.d(n,{Z:function(){return D}});var a=t(7294),r=t(8650),l=t.n(r),o=t(1082),i=t(1025),s=t(1908),c=t(5900),p=t.n(c),m=function(e){var n,t=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return a.createElement("div",{className:p()("PageHeader-module--page-header--36a7c",(n={},n["PageHeader-module--with-tabs--bdb43"]=o.length,n["PageHeader-module--dark-mode--58278"]="dark"===r,n))},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))},d=function(e){var n=e.relativePagePath,t=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=t||r,i=l.baseUrl,s=l.subDirectory,c=i+"/edit/"+l.branch+s+"/src/pages"+n;return i?a.createElement("div",{className:"cds--row EditLink-module--row--04499"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},u=t(849),g=t(1721),b=function(e){function n(){return e.apply(this,arguments)||this}return(0,g.Z)(n,e),n.prototype.render=function(){var e=this.props,n=e.title,t=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var n,t=l()(e,{lower:!0,strict:!0}),s=t===i,c=new RegExp(i+"/?(#.*)?$"),m=r.replace(c,t);return a.createElement("li",{key:e,className:p()((n={},n["PageTabs-module--selected-item--68107"]=s,n),"PageTabs-module--list-item--d36e2")},a.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:""+m},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":n},a.createElement("ul",{className:"PageTabs-module--list--c4bab"},s))))))},n}(a.Component),f=b,v=t(5391),h=t(5387),E=t(4389),k=function(e){var n=e.date,t=new Date(n);return n?a.createElement(E.X2,{className:"last-modified-date-module--row--5c9a1"},a.createElement(E.sg,null,a.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},D=function(e){var n=e.pageContext,t=e.children,r=e.location,c=e.Title,p=n.frontmatter,g=void 0===p?{}:p,b=n.relativePagePath,E=n.titleType,D=g.tabs,w=g.title,C=g.theme,x=g.description,N=g.keywords,P=g.date,S=(0,h.Z)().interiorTheme,y=(0,o.useStaticQuery)("2456312558").site.pathPrefix,T=y?r.pathname.replace(y,""):r.pathname,R=D?T.split("/").filter(Boolean).slice(-1)[0]||l()(D[0],{lower:!0}):"",W=C||S;return a.createElement(s.Z,{tabs:D,homepage:!1,theme:W,pageTitle:w,pageDescription:x,pageKeywords:N,titleType:E},a.createElement(m,{title:c?a.createElement(c,null):w,label:"label",tabs:D,theme:W}),D&&a.createElement(f,{title:w,slug:T,tabs:D,currentTab:R}),a.createElement(v.Z,{padded:!0},t,a.createElement(d,{relativePagePath:b}),a.createElement(k,{date:P})),a.createElement(u.Z,{pageContext:n,location:r,slug:T,tabs:D,currentTab:R}),a.createElement(i.Z,null))}},3301:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return p}});var a=t(3366),r=(t(7294),t(4983)),l=t(2296),o=["components"],i={},s={_frontmatter:i},c=l.Z;function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)(c,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some sample Carbon component are provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"carbon-addons-devenv")," package, which you can use as a reference or aid when starting to develop new Carbon components."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PersonFolio"),(0,r.kt)("li",{parentName:"ul"},"Logo")),(0,r.kt)("p",null,"These samples contain all that is needed for Carbon components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The React component"),(0,r.kt)("li",{parentName:"ul"},"Sass"),(0,r.kt)("li",{parentName:"ul"},"A query provider in Apollo Client"),(0,r.kt)("li",{parentName:"ul"},"A JavaScript renderer wrapper function")),(0,r.kt)("p",null,"Unit tests, a storybook wrapper, and a JavaScript documentation example are also provided."),(0,r.kt)("p",null,"The sample components are ready to be fully implemented and integrated into a custom UIM page by using a Java Renderer."),(0,r.kt)("h3",null,"Examples of integrating components into a Java renderer"),(0,r.kt)("p",null,"For guidance, the following code snippets, which don’t include the imports, demonstrate how the PersonFolio and Logo sample components can be integrated into a Java Renderer. Configuring a Java render is described in ",(0,r.kt)("a",{parentName:"p",href:"spm-uim-integration"},"Rendering components on a UIM page")),(0,r.kt)("p",null,"An example of integrating the sample PersonFolio component into a domain Java renderer on a UIM page is shown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'public class PersonFolioSampleRenderer extends AbstractViewRenderer {\n\n  /**\n   * Constructor.\n   */\n  public PersonFolioSampleRenderer() {}\n\n  /**\n   * */\n  @Override\n  public void render(final Field field, final DocumentFragment fragment,\n    final RendererContext context, final RendererContract contract)\n    throws ClientException, DataAccessException, PlugInException {\n\n    final Element carbonWrapperDiv =\n      fragment.getOwnerDocument().createElement("div");\n    final String carbonWrapperDivID = "CarbonWrapperDiv";\n    carbonWrapperDiv.setAttribute("id", carbonWrapperDivID);\n    HTMLUtils.appendComment(carbonWrapperDiv, "filler");\n    carbonWrapperDiv.setAttribute("class", "spm-custom-component");\n    fragment.appendChild(carbonWrapperDiv);\n    // label translations override default labels in Carbon component\n    // for properly translated labels, you must put them into a `*.properties` file and look them up using the `context.getDataAccessor()` function.\n    // final String labels =\n    //   "{firstnameLabel: \\"Translated First name\\", surnameLabel: \\"Translated Surname\\", ageLabel: \\"Translated Age\\"}";\n    final String labels = "{}";\n    final Map<String, String> map = new HashMap<String, String>();\n\n    includeCarbonComponent(context, carbonWrapperDivID, labels, "{}",\n      "window.spmcustom.sampleRenderers.PersonFolio.PersonFolioRenderer",\n      map);\n  }\n}\n')),(0,r.kt)("p",null,"An example of integrating the sample Logo component into a domain Java renderer on a UIM page is shown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'public class LogoSampleRenderer extends AbstractViewRenderer {\n\n  /**\n   * Constructor.\n   */\n  public LogoSampleRenderer() {}\n\n  /**\n   * */\n  @Override\n  public void render(final Field field, final DocumentFragment fragment,\n    final RendererContext context, final RendererContract contract)\n    throws ClientException, DataAccessException, PlugInException {\n\n    final Element carbonWrapperDiv =\n      fragment.getOwnerDocument().createElement("div");\n    final String carbonWrapperDivID = "CarbonWrapperDiv";\n    carbonWrapperDiv.setAttribute("id", carbonWrapperDivID);\n    HTMLUtils.appendComment(carbonWrapperDiv, "filler");\n    carbonWrapperDiv.setAttribute("class", "spm-custom-component");\n    fragment.appendChild(carbonWrapperDiv);\n    final String labels = "{}";\n    final Map<String, String> map = new HashMap<String, String>();\n\n    map.put("logoId", "id_2");\n    includeCarbonComponent(context, carbonWrapperDivID, labels, "{}",\n      "window.spmcustom.sampleRenderers.Logo.LogoRenderer", map);\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-samples-reference-mdx-01e6a835ba50de93569d.js.map