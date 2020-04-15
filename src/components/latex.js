import React from "react"
import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages";
import root  from "react-shadow"

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const tex = new TeX({ packages: AllPackages });
const svg = new SVG({ fontCache: "local" });
const html = mathjax.document("", { InputJax: tex, OutputJax: svg });

export const InlineMath = ({children}) => (
    <root.span>
        <style>{adaptor.textContent(svg.styleSheet(html))}</style>
        <span dangerouslySetInnerHTML={{__html: adaptor.outerHTML(html.convert(children, { display: false }))}} />
    </root.span>
)

export const DisplayMath = ({children}) => (
    <root.div>
        <style>{adaptor.textContent(svg.styleSheet(html))}</style>
        <span dangerouslySetInnerHTML={{__html: adaptor.outerHTML(html.convert(children, { display: true }))}} />
    </root.div>
)
